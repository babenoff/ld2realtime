const Joi = require('joi')
module.exports = {
  register (req, res, next) {
    const schema = {
      username: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{5,32}$')
      )
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'username':
          res.status(400).send({
            error: 'Вы должны ввести корректный E-Mail адресс'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Пароль должен быть не короче 5 символов, а также одержать только латинские буквы и цифры'
          })
          break
        default:
          res.status(400).send({
            error: 'Неверные данные регистрации'
          })
      }
    } else {
      next()
    }
  }
}
