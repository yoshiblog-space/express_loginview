const express = require('express');
const app = express();
const userController = require('./controllers/UserController')

const Views = '../views/'

// テンプレートエンジンの指定
app.set('view engine', 'ejs');
app.use(express.static('public'))
//bodyparser(ver.4.16~標準搭載)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get('/', userController.doGetLogin);
app.get('/register', userController.doGetRegister);
app.post('/register', userController.validationList, userController.doGetRegisterErr);
app.get('/dashboard', userController.doGetDashBoard);
app.listen(3000);
