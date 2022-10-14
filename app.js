const express = require('express');
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')
const helpers = require('handlebars-helpers')
//  載入 express-session
const session = require('express-session')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = 3000
const MongoStore_URI = process.env.MongoStore_URI

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs', helpers: helpers() }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

//  讓每個進入的 request 都經過 express-session 這個中介軟體並設定參數
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
  store: MongoStore.create({ 
    mongoUrl: MongoStore_URI,
    ttl: 14 * 24 * 60 * 60, // 設為 14 天
    crypto: {
      secret: 'squirrel' // 加密
    }
  })
}))
app.use((req, res, next) => {
  // 實作登入次數
  if (req.body.email !== req.session.user) {
    req.session.count = 0
  }
  req.session.count++
  next()
})
app.use(routes)

app.listen(port, () => {
  console.log(`The account-check WEB running on http://localhost:${port}`)
})