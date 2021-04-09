const path = require('path')
const logger = require('utils/logger')

const AppController = {
  error(message = 'Bad request', statusCode = 400, type = 'INVALID_REQUEST') {
    const error = message instanceof Error ? message : new Error(message)
    error.statusCode = error.statusCode || statusCode
    error.type = error.type || type
    return error
  },
  // eslint-disable-next-line no-unused-vars
  handleErrors(err, req, res, next) {
    const { message, status, statusCode, type } = err || {}

    const sendError = [
      { ...(err || {}), logref: type || 'internal-server-error', message: message || '' }
    ]

    logger.error(JSON.stringify(sendError))

    res.status(statusCode || Number(status) || 500).send(sendError)
  },
  noContent(data) {
    if (!data) {
      throw AppController.error('Collection is empty', 404, 'NOT_FOUND')
    }
    return data
  },
  notFound(req, res, next) {
    const error = new Error('not-found')
    error.statusCode = 404
    error.type = 'NOT_FOUND'
    next(error)
  },
  // eslint-disable-next-line no-unused-vars
  routeInClient(req, res, next) {
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'))
  }
}

module.exports = AppController
