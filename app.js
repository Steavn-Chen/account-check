const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

//  載入 express-session
const session = require('express-session')
const routes = require('./routes')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))

//  讓每個進入的 request 都經過 express-session 這個中介軟體並設定參數
app.use(session({
  secret: 'This is secret',
  saveUninitialized: true,
  resave: false,
  name: 'user',
}))

app.use(routes)

app.listen(port, () => {
  console.log(`The account-check WEB running on http://localhost:${port}`)
})