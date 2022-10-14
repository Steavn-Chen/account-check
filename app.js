const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const helpers = require('handlebars-helpers')
//  載入 express-session
const session = require('express-session')
const routes = require('./routes')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs', helpers: helpers() }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

//  讓每個進入的 request 都經過 express-session 這個中介軟體並設定參數
app.use(session({
  secret: 'This is secret',
  saveUninitialized: true,
  resave: false,
  // name: 'user'
}))
app.use((req, res, next) => {
  // 實作登入次數
  if (req.body.email !== req.session.user) {
    req.session.count = 0
  }
  req.session.count++
  console.log('session', req.session)
  console.log('id', req.sessionID)
  console.log('sTore',req.sessionStore)
  next()
})
app.use(routes)

app.listen(port, () => {
  console.log(`The account-check WEB running on http://localhost:${port}`)
})