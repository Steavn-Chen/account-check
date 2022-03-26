const express = require("express");
const router = express.Router();

const users = require("../../user.json");

router.get("/", (req, res) => {
  res.render("login");
});
router.post("/", (req, res) => {
  let message = "";
  const { email, password } = req.body;
  const checkAccount = users.find((i) => i.email === email);
  if (!checkAccount) {
    message = "此帳號不存在 !";
    return res.render("error", { message });
  }
  if (checkAccount.password !== password) {
    message = "你的帳號或密碼錯誤 !";
    return res.render("error", { message });
  }
  res.render("welcome", { user: checkAccount });
});

module.exports = router;
