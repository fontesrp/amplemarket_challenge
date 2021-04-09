const AppController = require('controller/AppController')
// eslint-disable-next-line new-cap
const router = require('express').Router()

router.use('/templates', require('./templates'))
router.use(AppController.notFound)

module.exports = router
