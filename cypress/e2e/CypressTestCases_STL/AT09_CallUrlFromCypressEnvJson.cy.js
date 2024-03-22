/// <reference types="cypress" />
describe('NavWebsite_EnvJsonFile', () => {
    it('NavigateToWebsite_EnvJsonFile', () => {
      cy.visit(Cypress.env('test_url'))
      
      
    })
  })