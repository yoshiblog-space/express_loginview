const express = require("express");
const app = express();

// テンプレートエンジンの指定
app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", function (req, res) {
  const data = {
    title: "Login",
    forms: [
      { name: "E-Mail Adress" },
      { name: "Password" },
    ],
    message:"Forgot Your Password"
  };
  // レンダリングを行う
  res.render("./login.ejs", data);
});

app.get("/register", function (req, res) {
  const data = {
    title: "Register",
    forms: [
      { name: "Name" },
      { name: "E-Mail Adress" },
      { name: "Password" },
      { name: "Confirm Password" },
    ],
    message: ""
  };
  // レンダリングを行う
  res.render("./login.ejs", data);
})

app.listen(3000);

