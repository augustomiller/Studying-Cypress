/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Esperas...', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Deve aguardar o elemento estar disponível', () => {
    cy.get('#novoCampo').should('not.exist');
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo').should('not.exist');
    cy.get('#novoCampo').should('exist');
    cy.get('#novoCampo').type('Funciona!!!');
  });

  it('Deve fazer retry', () => {
    cy.get('#buttonDelay').click();
    cy.get('#novoCampo')
      .should('exist')
      .type('Escrevendo no input!');
  });

  it.only('Uso do find', () => {
    cy.get('#buttonList').click();
    cy.get('#lista li')
      .find('span')
      .should('contain', 'Item 1');
    cy.get('#lista li span')
      .should('contain', 'Item 2');
  });

  it.only('Uso do Timeout', () => {
    // cy.get('#buttonDelay').click();
    // cy.get('#novoCampo', { timeout: 6000 }).should('exist');
  });

  it.only('Click retry', () => {
    cy.get('#buttonCount')
      .click()
      .click()
      .should('have.value', '111');
  });

  it.only('Should vs Then', () => {
    // cy.get('#buttonListDOM').should(($el) => {
    cy.get('#buttonListDOM').then(($el) => {
    // cy.get('#lista li span').should(($el) => {
    // cy.get('#lista li span').then(($el) => {
      // console.log($el);
      expect($el).to.have.length(1);
      cy.get('#buttonList');
    });
  });
});
