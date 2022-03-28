// 第二次用 session 來驗證的函式
const auth = (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    console.log('noAuth')
  }
}

module.exports = auth