const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nnq4xj',
  e2e: {
    env:
  {
    lunaurl : "https://magento.softwaretestingboard.com/",
    rahushettyAngular:"https://rahulshettyacademy.com/angularAppdemo/"
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/e2e/Tests/*.cy.js'
  },
});
