const debug = require('debug')

const project = require('../../../package.json')

const logger = {
  error: debug(`${project.name}:error`),
  info: debug(`${project.name}:info`),
  warn: debug(`${project.name}:warn`)
}

module.exports = logger
