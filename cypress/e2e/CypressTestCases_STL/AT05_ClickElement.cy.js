describe('ClickElement', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
     
    })
  })