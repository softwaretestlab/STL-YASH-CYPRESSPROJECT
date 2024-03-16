/// <reference types="cypress" />

describe('IfConditionLearning', () => {
    //if else
      it('IfCondition', () => {
         const SwitchOn=true

         if(!SwitchOn){
          cy.log("Switch is on")
         }
         else
         {
          cy.log("Switch is not on")
         }
  
    })

      //else if
  it('elseIfCondition', (MyCount=20) => {
    if(MyCount<15){
      cy.log("Mycount value is Smaller")
    }else if(MyCount>15){
      cy.log("Mycount value is Bigger")
    }else{
      cy.log("Invalid Value")
    }

})

    })