const express = require('express');
const Views = '../views/'

module.exports = {
  doGetLogin(req, res) {
    const data = {
      title: 'Login',
      forms: [
        { name: 'E-Mail Adress' },
        { name: 'Password' },
      ],
      message: 'Forgot Your Password'
    };
    // レンダリングを行う
    res.render(Views + 'login.ejs', data);
  },
  doGetRegister(req, res) {
    const data = {
      title: 'Register',
      forms: [
        { name: 'Name' },
        { name: 'E-Mail Adress' },
        { name: 'Password' },
        { name: 'Confirm Password' },
      ],
      message: ''
    };
    // レンダリングを行う
    res.render(Views + 'login.ejs', data);
  }
}