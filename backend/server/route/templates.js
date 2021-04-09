const TemplatesController = require('controller/TemplatesController')
// eslint-disable-next-line new-cap
const router = require('express').Router()

router.get('/', TemplatesController.getAll)
router.post('/', TemplatesController.create)

router.delete('/:templateId', TemplatesController.remove)
router.get('/:templateId', TemplatesController.getById)
router.put('/:templateId', TemplatesController.update)

module.exports = router
