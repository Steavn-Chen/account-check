const express = require('express')
const router = express.Router()
const userList = require('../../user.json')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  let message = ''
  const { email, password } = req.body
  const checkAccount = userList.find((i) => i.email === email)
  if (!checkAccount) {
    message = '此帳號不存在 !'
    return res.render('error', { message })
  }
  if (checkAccount.password !== password) {
    message = '你的帳號或密碼錯誤 !'
    return res.render('error', { message })
  }

  // 使用者送出的表單 email password 無誤再把使用者名稱塞進 req.session 裡以便驗證
  req.session.user = checkAccount.firstName
  res.render('welcome', { user: checkAccount })
})

router.get('/logout', (req, res) => {
  // 當使用者登出就刪除 req.session.user
  req.session.destroy()
  res.render('index')
})

module.exports = router
