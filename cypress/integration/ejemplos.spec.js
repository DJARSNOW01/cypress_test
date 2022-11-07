/// <reference types="cypress" />

describe('test de login', ()=>{

    beforeEach(()=>{

     cy.visit('https://the-internet.herokuapp.com/')    })

it ('A valid user can login', () =>{
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains(' You logged into a secure area!')
    //Test Login valido //
})



