const express = require('express')
const router = express.Router();


const auth = require('../middleware/isUser.js')
const home = require("./modules/home.js");
const users = require("./modules/users.js");
const welcome = require("./modules/welcome.js");

router.use("/users", users);
router.use('/welcome',auth, welcome)
router.use('/', auth, home)

module.exports = router