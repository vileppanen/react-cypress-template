/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const { initPlugin } = require('cypress-plugin-snapshots/plugin')
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  initPlugin(on, config)
  on("task", percyHealthCheck)
  return config
}
