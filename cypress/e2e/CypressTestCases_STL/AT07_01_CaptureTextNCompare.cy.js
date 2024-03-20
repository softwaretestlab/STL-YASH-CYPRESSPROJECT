/// <reference types="cypress" />
describe('ReturnValuesVariables', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://www.thegoodguys.com.au/UserRegistrationForm?myAcctMain=1&new=Y&catalogId=30000&langId=-1&storeId=900')
      cy.get('#WC_AccountDisplay_div_2 > h1').then(($CapTxt)=>{
         //store text into constant txt
         const txt = $CapTxt.text()  
         cy.log("Captured Text is : "+txt)  //Create an Account
          //captured text ' Personal Details'
          //Compare capture text with another text
          cy.get('#WC_AccountDisplay_div_1 > .content').should(($CapTxt1)=>{
            
            //  assertexpected ' Personal Details' to not equal ' Create an Account'
            expect($CapTxt1.text()).not.to.eq(txt)
          })

      })
    })
})
