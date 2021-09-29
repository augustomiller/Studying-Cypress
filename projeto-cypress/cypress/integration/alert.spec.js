/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Work with basic elements', () => {
  before(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
  });

  beforeEach(() => {
    cy.reload();
  });

  it('Alert', () => {
    cy.get('#alert').click();
    cy.on('window:alert', (msg) => {
      console.log(msg);
      expect(msg).to.be.equal('Alert Simples');
    });
  });
});
