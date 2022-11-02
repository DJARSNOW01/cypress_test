/// <reference types="cypress" />

it ('A valid user can login', () =>{
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")

    })

it ('A invalid password cannot login', () =>{
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("error!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
    
    })

it ('A invalid user cannot login', () =>{
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("invaliduser")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")

    })

it ('A empty user and password cannot login', () =>{
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username')
    cy.get('#password')
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")

    })

