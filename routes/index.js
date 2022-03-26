const express = require('express')
const router = express.Router()

const home = require('./modules/home.js')
const login = require('./modules/login.js')

router.use('/', home)
router.use('/login', login)

module.exports = router