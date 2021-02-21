const express = require('express');
const app = express();
const userController = require('./controllers/UserController')

// テンプレートエンジンの指定
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/', userController.doGetLogin);
app.get('/register', userController.doGetRegister);
app.listen(3000);

