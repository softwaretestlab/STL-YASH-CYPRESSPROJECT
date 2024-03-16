/// <reference types="cypress" />

describe('Obect Learning', () => {
    
    it('ObectCreationAndCalling', () => {
        var StudentName={
            "FirstName" : "Sam",
            "LastName"  :  "Smith"
        }
        cy.log(StudentName.FirstName)
    })
})