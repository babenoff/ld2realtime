const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('node-uuid')
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require('./logger')()
const env = process.env.NODE_ENV || 'development'
mongoose.connect('mongodb://localhost/ld2')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to database')
})
morgan.token('id', function getId (req) {
  return req.id
})
const app = express()
const port = process.env.port || 8081
app.use(assignId)
app.use(bodyParser())
app.use(morgan(':id :method :url :response-time'))
app.use(cors())

require('./router')(app)

app.listen(port, () => {
  logger.info('Application runned on http://localhost:%d in %s mode', port, env)
  logger.debug('current working directory is:', process.cwd())
})

function assignId (req, res, next) {
  req.id = uuid.v4()
  next()
}
