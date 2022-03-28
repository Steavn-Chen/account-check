// 用來驗證 session 的函式
const auth = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    console.log('noAuth')
  }
}

module.exports = auth