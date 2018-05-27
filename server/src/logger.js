var hub = require('mag-hub')
var format = require('mag-format-message')
var colored = require('mag-colored-output')

hub.pipe(format())
  .pipe(colored())
  .pipe(process.stdout)

const mag = require('mag')
const logger = mag('Likedimion2')
module.exports = () => {
  return logger
}
