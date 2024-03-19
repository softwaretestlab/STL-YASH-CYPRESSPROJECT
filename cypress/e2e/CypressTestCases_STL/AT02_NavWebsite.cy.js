/// <reference types="cypress" />
describe('NavWebsite', () => {
    
    it('Visits the Kitchen Sink', () => {
            cy.visit('https://example.cypress.io')
    })

    it('Visits the HN website', () => {
        cy.visit('https://www.harveynorman.com.au/')
})
  })