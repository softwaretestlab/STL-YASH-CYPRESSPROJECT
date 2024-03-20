const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
   baseUrl:"https://www.myer.com.au/"
  },
  env:{
    EnvName:"Prod environment"
  }
});