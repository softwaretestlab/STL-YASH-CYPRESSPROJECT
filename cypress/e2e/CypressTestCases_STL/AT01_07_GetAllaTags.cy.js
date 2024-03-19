/// <reference types="cypress" />

describe('ForLoopLearning', () => {
    // it('ForLoop', () => {
    //     cy.visit('https://www.google.com.au/')
    //     cy.get("a").then(($UrlCount) => {
    //         var LinkCount=$UrlCount.length;
    //         cy.log(LinkCount);
    //         cy.wrap($UrlCount).each(($UrlName) => {
    //         for(var i=0;i<LinkCount;i++){
                
    //             const link = $UrlCount.get(i).getAttribute('href')
    //             cy.log(link)
    //         }
    //     })
    // })
       
    //   })

      it('ForLoop1', () => {
        cy.visit('https://www.google.com.au/')

       cy.get("a").each(($UrlName) => {
             const link = $UrlName.attr('href')
            cy.log(link)
        })
  })

})