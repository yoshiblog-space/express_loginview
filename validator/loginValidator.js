const { check } = require('express-validator');

module.exports = [
  check('Name')
    .notEmpty().withMessage('名前を入力してください。'),
  check('EmailAdress')
    .isEmail().withMessage('メールアドレスを入力して下さい'),
  check('Password')
    .notEmpty().withMessage('パスワードを入力してください。')
    .isLength({ min: 7 }).withMessage('パスワードを7文字以上で入力してください。'),
  check('ConfirmPassword')
    .custom((value, { req }) => value === req.body.Password)
    .withMessage('パスワードが一致しません'),
]