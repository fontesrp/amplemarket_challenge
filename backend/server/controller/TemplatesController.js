const service = require('service/TemplatesService')

const AppController = require('./AppController')

const TemplatesController = {
  create(req, res, next) {
    const { body, title } = req.body || {}

    if (!body) {
      return next(AppController.error('`body` is required'))
    }

    if (!title) {
      return next(AppController.error('`title` is required'))
    }

    service
      .create({ body, title })
      .then(() => res.sendStatus(201))
      .catch(error => next(AppController.error(error)))
  },
  getAll(req, res, next) {
    let { items, page } = req.query || {}

    items = Number(items)
    page = Number(page)

    if (!items) {
      items = 10
    }

    if (!page) {
      page = 1
    }

    service
      .getAll({ items, page })
      .then(AppController.noContent)
      .then(data => res.json(data))
      .catch(error => next(AppController.error(error)))
  },
  getById(req, res, next) {
    const { templateId } = req.params || {}

    if (!templateId) {
      return next(AppController.error('Invalid template id'))
    }

    service
      .getById(templateId)
      .then(AppController.noContent)
      .then(data => res.json(data))
      .catch(error => next(AppController.error(error)))
  },
  remove(req, res, next) {
    const { templateId } = req.params || {}

    if (!templateId) {
      return next(AppController.error('Invalid template id'))
    }

    service
      .remove(templateId)
      .then(() => res.sendStatus(204))
      .catch(error => next(AppController.error(error)))
  },
  update(req, res, next) {
    const { body: reqBody, params } = req
    const { body, title } = reqBody || {}
    const { templateId } = params || {}

    if (!templateId) {
      return next(AppController.error('Invalid template id'))
    }

    if (!body) {
      return next(AppController.error('`body` is required'))
    }

    if (!title) {
      return next(AppController.error('`title` is required'))
    }

    service
      .update({ body, templateId, title })
      .then(() => res.sendStatus(204))
      .catch(error => next(AppController.error(error)))
  }
}

module.exports = TemplatesController
