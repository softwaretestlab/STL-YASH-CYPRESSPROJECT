/// <reference types="cypress" />
describe('NavWebsite', () => {
    it('NavigateToWebsite', () => {
      cy.visit("")
      cy.log("Testing Running in  "+Cypress.env('EnvName'))
      
    })
  })