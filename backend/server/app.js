const AppController = require('controller/AppController')
const cookieParser = require('cookie-parser')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const route = require('route')

const app = express()

app.disable('etag')

app.use(morgan('dev'))
app.use(express.json({ limit: '50MB' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
  })
}

app.use(express.static(path.join(__dirname, '..', 'build')))

app.use('/api', route)

app.use(AppController.routeInClient)
app.use(AppController.handleErrors)

module.exports = app
