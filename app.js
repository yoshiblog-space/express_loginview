const express = require('express');
const app = express();
const { check, validationResult } = require('express-validator');
const userController = require('./controllers/UserController')
var testValidator = require('./validator/TestValidator.js')
const Views = '../views/'

// テンプレートエンジンの指定
app.set('view engine', 'ejs');
app.use(express.static('public'))
//bodyparser(ver.4.16~標準搭載)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/', userController.doGetLogin);
app.get('/register', userController.doGetRegister);
app.post('/register', testValidator, userController.doGetRegisterErr);
app.get('/dashboard', userController.doGetDashBoard);
app.listen(3000);
