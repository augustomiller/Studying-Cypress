/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

/**
 * Verificar se um determinado texto existe na página de uma forma bem genérica.
 * Utilizando Jquery selector...
 *
 * Retirar comportamentos repetidos utilizando Hooks.
 *   - before() - executa uma unica vez antes do primeiro teste.
 *   - beforeEach() - executa antes de cada um de todos os testes.
*/
describe('Work with basic elements', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Text', () => {
    cy.get('body').should('contain', 'Cuidado');
    cy.get('span').should('contain', 'Cuidado');
    cy.get('.facilAchar').should('contain', 'Cuidado');
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
  });

  it('Links', () => {
    cy.get('[href="#"]').click();
    cy.get('#resultado').should('have.text', 'Voltou!');

    cy.reload();
    cy.get('#resultado').should('not.have.text', 'Voltou!');
    cy.contains('Voltar').click();
    cy.get('#resultado').should('have.text', 'Voltou!');
  });

  it('TextFields', () => {
    cy.get('#formNome').type('Cypress Test');
    cy.get('#formNome').should('have.value', 'Cypress Test');
  });

  it('TextArea', () => {
    cy.get('#elementosForm\\:sugestoes')
      .clear()
      .type('Cypress Textarea{selectall}Textarea Cypress!!!', { delay: 50 })
      .should('have.value', 'Textarea Cypress!!!');
  });

  it('RadioButton', () => {
    cy.get('#formSexoFem')
      .click()
      .should('be.checked');

    cy.get('#formSexoMasc').should('not.be.checked');

    cy.get('[name=formSexo]').should('have.length', 2);
  });

  it('Checkbox', () => {
    cy.get('#formComidaPizza')
      .click()
      .should('be.checked');

    cy.get('[name=formComidaFavorita]').click({ multiple: true });

    cy.get('#formComidaPizza').should('not.be.checked');
    cy.get('#formComidaVegetariana').should('be.checked');
  });

  it.only('ComboBox', () => {
    cy.get('[data-test=dataEscolaridade]')
      .select('2o grau completo')
      .should('have.value', '2graucomp');

    cy.get('[data-test=dataEscolaridade]')
      .select('1graucomp')
      .should('have.value', '1graucomp');

    // Verifica  o tamanho da lista de elementos.
    cy.get('[data-test=dataEscolaridade] option').should('have.length', 8);
    cy.get('[data-test=dataEscolaridade] option').then(($arr) => {
      const values = [];
      $arr.each(function () {
        values.push(this.innerHTML);
      });
      expect(values).to.include.members(['Superior', 'Mestrado']);
    });
  });

  it.only('Combo Multiple', () => {
    cy.get('[data-testid=dataEsportes]').select(['Corrida', 'Karate']);

    // validar opções selecionadas do combo multiplo.
    cy.get('[data-testid=dataEsportes]').then(($el) => {
      expect($el.val()).to.be.deep.equal(['Corrida', 'Karate']);
      expect($el.val()).to.have.length(2);
    });

    cy.get('[data-testid=dataEsportes]')
      .invoke('val')
      .should('eql', ['Corrida', 'Karate']);
  });
});
