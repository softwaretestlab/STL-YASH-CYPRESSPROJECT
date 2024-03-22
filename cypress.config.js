const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl:'https://www.thegoodguys.com.au/UserRegistrationForm?myAcctMain=1&new=Y&catalogId=30000&langId=-1&storeId=900',
      setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
  //global configuration setup for url
  env:{
    URL:'https://www.thegoodguys.com.au/UserRegistrationForm?myAcctMain=1&new=Y&catalogId=30000&langId=-1&storeId=900'
  }
});
