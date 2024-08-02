// <reference types="cypress" />

//import { locators } from '../../support/locators';
import { locators } from '../support/locators';

context('Buy item', () => {
    beforeEach(() => {
        cy.fixture('user').then((user) => {
            cy.login(user.username, user.password);
        });
    });

    it('Buys an item from the site', () => {
        // Add the first item to the cart
        cy.addItemToCart(0);

        // Navigate to the cart
        cy.get(locators.cart.cartLink).click();

        // Proceed to checkout
        cy.get(locators.cart.checkoutButton).click();

        // Fill in checkout information
        cy.checkout('Rohit', 'Manekar', '12345');

        // Complete the purchase
        cy.get(locators.checkout.finishButton).click();
        cy.get(locators.checkout.completeHeader).should('contain', 'Thank you for your order');
    });
});
