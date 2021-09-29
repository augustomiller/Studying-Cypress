/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Work with iFrame', () => {
  it('Deve preencher campo de texto', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    cy.get('#frame1').then((iframe) => {
      const body = iframe.contents().find('body');
      cy.wrap(body).find('#tfield')
        .type('funciona?')
        .should('have.value', 'funciona?');
    });
  });
});
