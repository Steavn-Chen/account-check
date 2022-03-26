const express = require('express');
const exphbs = require('express-handlebars')
const users = require('./user.json')
const bodyParser =require('body-parser')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  let message = ''
  const { email, password } = req.body
  console.log(email, password);
  const checkAccount = users.find(i =>  i.email === email )
  console.log(checkAccount);
  if (!checkAccount) {
    message = '此帳號不存在 !'
    return res.render('error', { message })
  } 
  if (checkAccount.password !== password) {
    message = "你的帳號或密碼錯誤 !";
    return res.render("error", { message });
  }
  res.render("welcome", { user: checkAccount });
});

app.listen(port, () => {
  console.log(`The account-check WEB running on http://localhost:${port}`)
})