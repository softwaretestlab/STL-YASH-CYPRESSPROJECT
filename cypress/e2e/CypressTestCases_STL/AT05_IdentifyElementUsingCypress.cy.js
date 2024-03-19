/// <reference types="cypress" />

describe('JaganTest', function() {
    it('Does not do much!', function() {
   
      cy.visit('https://www.davidjones.com/')
      //click consumer notice page
      cy.get('[data-catid="5780"] > a').click()

    })
  
})
