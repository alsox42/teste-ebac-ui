///<reference types="cypress" />
var faker = require('@faker-js/faker');

context('Funcionalidade pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {

        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
        
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('12345*aB')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('#password_current').type('12345*aB')
        cy.get('#password_1').type('273245*aB')
        cy.get('#password_2').type('273245*aB')
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });

    it('Deve completar o pre-cadastro com sucesso usando comandos customizados', () => {
        let nomeFaker = faker.name.firstName()
        let emailFaker = faker.internet.email(nomeFaker)
        cy.preCadastro(emailFaker, 'senha!@#forte', 'Andre', 'Oliveira')

    });
});