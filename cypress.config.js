const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature"],
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
