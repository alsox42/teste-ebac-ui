///<reference types="cypress" />
var faker = require('@faker-js/faker');

context('Funcionalidade pagina de Produto', () => {

    beforeEach(() => {
        cy.visit('produto/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' x "Ariel Roll Sleeve Sweatshirt"')
    })
});