

const { defineConfig } = require('cypress');


module.exports = defineConfig(
  {
    projectId: 'gevjw9',

    e2e: {
      specPattern: 'cypress/e2e/**/*.*',

      setupNodeEvents(on, config) {
        return require('./cypress/plugins/index.js')(on, config);
      },
    },
  }
);
