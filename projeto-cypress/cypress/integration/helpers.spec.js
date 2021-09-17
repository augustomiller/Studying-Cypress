/* eslint-disable no-console */
/* eslint-disable no-undef */
/// <reference types="cypress"/>

const { resolve, reject } = require('bluebird');

describe('Helpers...', () => {
  it('Wrap', () => {
    const obj = { name: 'user', age: 20 };
    expect(obj).to.have.property('name');
    cy.wrap(obj).should('have.property', 'name');

    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    // cy.get('#formNome').then(($el) => {
    //   cy.wrap($el).type('Funciona no cypress');
    // });

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });

    cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro'));
    // STUDY Sincronizando uma promise com cypress, utilizando wrap.
    cy.wrap(promise).then((retorno) => console.log(retorno));
    cy.get('#buttonList').then(() => console.log('Encontrei o segundo'));
  });
});
