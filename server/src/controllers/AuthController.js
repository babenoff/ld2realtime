const User = require('../models/User')
module.exports = {
  register (req, res) {
    const user = new User({username: req.body.username})
    user.setPassword(req.body.password)
    user.save((err, u) => {
      if (err) {
        res.status(400).send({
          error: 'Этот E-Mail уже используется другим пользователем'
        })
      } else {
        res.send(u.toJSON())
      }
    })
  }
}
