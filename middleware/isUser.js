// 用來驗證 session 的函式
const auth = (req, res, next) => {
  if (req.session.user) {
    return next()
  } else {
    return res.redirect('/users/login')
  }
}

module.exports = auth