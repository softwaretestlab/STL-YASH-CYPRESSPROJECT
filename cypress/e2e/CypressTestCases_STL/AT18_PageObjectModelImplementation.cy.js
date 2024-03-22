//import page class
import { CustomerRegPage } from "../../pages/RegisterNewCustomer.cy.js";
import regTestData from "../../fixtures/regTestData.json"
//create object
const RegObj= new CustomerRegpage()

describe('CreateUser',()=>{
    it("NewUser",()=>{
        RegObj.NavigateToWebPage()
         // RegObj.InputFristName('John')
         RegObj.InputFirstName(regTestData.FirstName)
          // RegObj.InputLastName('Smith')
       RegObj.InputLastName(regTestData.Lastname)
    })
})