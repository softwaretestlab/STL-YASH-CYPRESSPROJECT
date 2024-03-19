/// <reference types="cypress" />
describe('NavBacFrnt', () => {
    it('Visits the Kitchen Sink', () => {
            cy.visit('https://stl-automationtesting.blogspot.com/')
            cy.contains('Dropdown').click()
            cy.contains('Lets learn how to handle dropdown').should("be.visible")
            cy.go("back")
            cy.go("forward")
             //or these below 2 lines behave same as above
             cy.go(-1)
             cy.go(1)
            })
        })