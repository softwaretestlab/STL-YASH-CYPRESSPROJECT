/// <reference types="cypress" />
//describe --> test suite
describe('AT01_02_VarNconst', () => {
    //test case
    it('StringIntConstant', () => {
        var MYName = 'SoftwareTestLab'
        var MyNum = 245677890
        const MyNewName='TestLab'
        cy.log(MYName)
        cy.log(MyNum)
        cy.log(MyNewName)
      })
//Var can be updated
      it('StringInt-1', () => {
        var x=1
        cy.log(x) //output: 1
        if(true){
            var x=2
            cy.log(x) //output: 2
        }
        cy.log(x) //output: 2
      })

      //const cant be updated
  it('Constant-1', () => {
    const x = 1;
    cy.log(x) //output: 1
    if (true) {
      let x = 2;
      cy.log(x); // Output: 2
    }
    cy.log(x); // Output: 1
  })

  it('variable-3', () => {
    var x = 10;
        x = 20;
    cy.log(x);
  })


   //this test will fail as constant can be changed
   it('Constant-2', () => {
    const x = 1;
          x = 2;
    cy.log(x);
  })

  
  })