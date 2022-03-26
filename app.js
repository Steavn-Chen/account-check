const express = require('express');
const exphbs = require('express-handlebars')
const users = require('./user.json')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/login", (req, res) => {
  console.log(req.body,req.params,req.query)
  res.render("login");
});

app.listen(port, () => {
  console.log(`The account-check WEB running on http://localhost:${port}`)
})