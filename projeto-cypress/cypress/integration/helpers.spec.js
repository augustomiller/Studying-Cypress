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

  /**
   * Esse método trabalha com as propriedades...
  */
  it('Its...', () => {
    const obj = { name: 'user', age: 20 };
    cy.wrap(obj).should('have.property', 'name', 'user');
    cy.wrap(obj).its('name').should('be.a.equal', 'user');

    const objeto = { name: 'user', age: 20, address: { street: 'Minha Rua.' } };
    cy.wrap(objeto).its('address').should('have.a.property', 'street');
    cy.wrap(objeto).its('address').its('street').should('contain', 'Rua');
    cy.wrap(objeto).its('address.street').should('contain', 'Rua');

    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    cy.title().its('length').should('be.a.equal', 20);
  });

  /**
   * Esse método trabalha com as funções...
   * Com ele consigo pegar uma função e enviar para o cypress executar...
  */
  it.only('Invoke', () => {
    const getValue = () => 1;
    const sum = (a, b) => a + b;

    cy.wrap({ fn: getValue }).invoke('fn').should('be.a.equal', 1);
    cy.wrap({ fn: sum }).invoke('fn', 2, 5).should('be.a.equal', 7);

    cy.window().invoke('alert', 'Dá pra ver?');

    cy.visit('https://www.wcaquino.me/cypress/componentes.html');
    cy.get('#resultado')
      .invoke('html', '<input type="button" value="hacked"/>');
  });
});
