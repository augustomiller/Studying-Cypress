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
});
