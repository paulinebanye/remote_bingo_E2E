const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "tests/e2e/**/*.cy.{js,jsx,ts,tsx}", 
    supportFile: "tests/support/e2e.js", 
    fixturesFolder: "tests/fixtures", 
  },
});
