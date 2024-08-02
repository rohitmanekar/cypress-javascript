// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { locators } from './locators';

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.get(locators.login.usernameField).type(username);
    cy.get(locators.login.passwordField).type(password);
    cy.get(locators.login.loginButton).click();
});

Cypress.Commands.add('addItemToCart', (itemIndex) => {
    cy.get(locators.inventory.item).eq(itemIndex).within(() => {
        cy.get(locators.inventory.addToCartButton).click();
    });
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get(locators.checkout.firstNameField).type(firstName);
    cy.get(locators.checkout.lastNameField).type(lastName);
    cy.get(locators.checkout.postalCodeField).type(postalCode);
    cy.get(locators.checkout.continueButton).click();
});
