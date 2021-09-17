/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Cypress basics', () => {
  it.only('Should visit a page and assert title', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo');

    cy.title().then((title) => {
      console.log(title);

      // Escrever o título em um campo de texto.
      cy.get('#formNome').type(title);
    });
  });

  it('Should find and interact with an element', () => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html');

    cy.get('#buttonSimple')
      .click()
      .should('have.value', 'Obrigado!');
  });
});
