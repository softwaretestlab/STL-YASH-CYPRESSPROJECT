/// <reference types="cypress" />
describe('AnotherExampleOfAssert', function() {
    //title should match
      it('GoogleTitleMatch', function() {
     
        cy.visit('https://www.google.com.au')
         cy.title().should('eq',"Google")
        
    })
})

