const Views = '../views/'
const { validationResult } = require('express-validator');

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
  doGetRegisterErr(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      registerView.errormessages = errors.array();
      return res.render(Views + 'login.ejs', registerView);
    }
    res.redirect('/dashboard');
  }
}