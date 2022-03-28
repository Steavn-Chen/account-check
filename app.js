const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

// 載入 express-session
const session = require("express-session");
const userList = require("./user.json");

const app = express();
const port = 3000;

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 讓每個進入的 request 都經過 express-session 這個中介軟體並設定參數
app.use(
  session({
    secret: "This is secret",
    saveUninitialized: false,
    resave: false,
    name: "user",
  })
);

// 設一個確認 session 的函式
const checkSession = (userData, sessionData, secret, sessionUser) => {
  const isCheckUser = userData.some((i) => i.firstName === sessionUser.user);
  let sessions = sessionData || {};
  sessions = Object.keys(sessions);
  const isSession = sessions.some((i) => i === secret);
  return isSession && isCheckUser;
};

app.get("/", (req, res) => {
  if (
    !checkSession(
      userList,
      req.sessionStore.sessions,
      req.sessionID,
      req.session
    )
  ) {
    return res.redirect("/login");
  }
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let message = "";
  const { email, password } = req.body;
  const checkAccount = userList.find((i) => i.email === email);
  if (!checkAccount) {
    message = "此帳號不存在 !";
    return res.render("error", { message });
  }
  if (checkAccount.password !== password) {
    message = "你的帳號或密碼錯誤 !";
    return res.render("error", { message });
  }
  // 使用者送出的表單 email password 無誤再把使用者名稱塞進 req.session 裡以便驗證
  req.session.user = checkAccount.firstName;
  res.render("welcome", { user: checkAccount });
});

app.get("/logout", (req, res) => {
  // 使用者登出就刪除 req.session.user
  req.session.destroy(() => {
    console.log("session destroy");
  });
  res.redirect("/");
});

app.get("/welcome", (req, res) => {
  if (
    !checkSession(
      userList,
      req.sessionStore.sessions,
      req.sessionID,
      req.session
    )
  ) {
    return res.redirect("/login");
  }
  res.render("welcome");
});

app.listen(port, () => {
  console.log(`The account-check WEB running on http://localhost:${port}`);
});
