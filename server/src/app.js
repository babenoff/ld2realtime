const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mogoose = require('mongoose')
var hub = require('mag-hub')
var format = require('mag-format-message')
var colored = require('mag-colored-output')

hub.pipe(format())
  .pipe(colored())
  .pipe(process.stdout)

const mag = require('mag')
const logger = mag('Likedimion2')
const env = process.env.NODE_ENV || 'development'
mogoose.connect('mongodb://localhost/ld2')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser())
app.use(morgan('combie'))
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world!'
  })
})

app.listen(port, () => {
  logger.info('Application runned on http://localhost:%d in %s mode', port, env)
  logger.debug('current working directory is:', process.cwd())
})
