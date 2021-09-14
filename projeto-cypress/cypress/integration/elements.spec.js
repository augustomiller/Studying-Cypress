/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

/**
 * Verificar se um determinado texto existe na página de uma forma bem genérica.
 * Utilizando Jquery selector...
*/
describe('Work with basic elements', () => {
  it('Text', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    cy.get('body').should('contain', 'Cuidado');
    cy.get('span').should('contain', 'Cuidado');
    cy.get('.facilAchar').should('contain', 'Cuidado');
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
  });
});
