const Views = '../views/'
const { check, validationResult } = require('express-validator');

const loginView = {
  title: 'Login',
  forms: [
    { name: 'E-Mail Adress' },
    { name: 'Password' },
  ],
  errormessages: '',
  message: 'Forgot Your Password'
};
const registerView = {
  title: 'Register',
  forms: [
    { name: 'Name' },
    { name: 'EmailAdress' },
    { name: 'Password' },
    { name: 'ConfirmPassword' },
  ],
  errormessages: '',
  message: ''
};
const dashboardView = {
  title: 'DashBoard',
  username: '',
  message: 'You are Log in!'
};

module.exports = {
  doGetLogin(req, res) {
    res.render(Views + 'login.ejs', loginView);
  },
  doGetRegister(req, res) {
    registerView.errormessages = '';
    res.render(Views + 'login.ejs', registerView);
  },
  doGetDashBoard(req, res) {
    res.render(Views + 'dashboard.ejs', dashboardView);
  },
  validationList: [
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
  ],
  doGetRegisterErr(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      registerView.errormessages = errors.array();
      return res.render(Views + 'login.ejs', registerView);
    }
    res.redirect('/dashboard');
  }
}