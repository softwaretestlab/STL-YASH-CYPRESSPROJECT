describe('ContainsText', () => {
    it('finds the content "type"', () => {
      cy.visit('https://example.cypress.io')
        //assert that type and parentsUntil are present on webpage
      cy.contains('type')
      cy.contains('parentsUntil')
    })
  })