/// <reference types="cypress" />

describe('Array Learning', () => {

    //version-1
      it('ArrayLearn', () => {
        var CarName = ['bmw','toyota','benz']
        cy.log(CarName)
        cy.log(CarName[0])
    //this below code will loop through all the array elements
    CarName.forEach((car)=>{
        cy.get({car})
    })
})

    //   //version-2
    //   it('VisitWebsite', () => {
    //     var WebsiteUrl=['/finance','/zip']
    //     WebsiteUrl.forEach((WebsiteUrls)=>{
    //         //use url inside backtick (`, this symbol is present along with tilde on keyboard)
    //         cy.visit(`https://www.thegoodguys.com.au${WebsiteUrls}`)
    //         //this is hard wait
    //         cy.wait(20000)
    //         //assert that righ url is picked
    //         cy.url().should('include',WebsiteUrls)
    //     })
    // })

        //version-3
        it('AddElementToArrayLearn', () => {
            var NewCarName=['bmw','toyota','benz']
            cy.log(NewCarName)
            //add addational elements into array
            NewCarName.push('Tesla','RangeRover');
            cy.log(NewCarName)
            cy.log(NewCarName[4])
            NewCarName.pop();
            cy.log(NewCarName)
            
        })
    


})