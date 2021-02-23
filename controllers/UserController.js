const Views = '../views/'

const loginView = {
  title: 'Login',
  forms: [
    { name: 'E-Mail Adress' },
    { name: 'Password' },
  ],
  errormessage: '',
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
  errormessage: '',
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
    registerView.errormessage = '';
    res.render(Views + 'login.ejs', registerView);
  },
  doGetRegisterErr1(req, res) {

    registerView.errormessage = 'パスワード7桁以上必要';
    res.render(Views + 'login.ejs', registerView);
  },
  doGetDashBoard(req, res) {
    res.render(Views + 'dashboard.ejs', dashboardView);
  },
  doGetRegisterErr(req, res) {
    const inputcheck = req.body.Name && req.body.EmailAdress && req.body.Password && req.body.ConfirmPassword;
    if (inputcheck) {
      if (req.body.Password.length > 6) {
        if (req.body.Password === req.body.ConfirmPassword) {
          res.redirect('/dashboard');
        } else {
          registerView.errormessage = 'パスワードが一致しません。';
          res.render(Views + 'login.ejs', registerView);
        }
      } else {
        registerView.errormessage = 'パスワード7桁以上必要です';
        res.render(Views + 'login.ejs', registerView);
      }
    } else {
      registerView.errormessage = '未入力があります';
      res.render(Views + 'login.ejs', registerView);
    }
  }
}