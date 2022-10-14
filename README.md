### Account-Check

![Account-Check-image](public/images/%E5%B8%B3%E5%AF%86%E6%AA%A2%E6%9F%A5%E6%A9%9F%E5%88%B6.PNG)

## 功能介紹
  功能(1)
  - 使用者輸入帳號跟密碼，如果輸入的帳號或密碼錯誤，則跳到錯誤畫面並通知使用者帳號或密碼錯誤，若輸入帳號、密碼都正確，則跳到歡迎使用者的頁面。
  
  功能(2)
  - 使用者登入後在未登出前，都保持著登入狀態，可以瀏覽 index, welcome 網頁。
  
## 啓動方式
  
  - 將專案 clone 到本地端

  https://github.com/Steavn-Chen/account-check

  - 進入到專案資料夾
  ```
    安裝 npm
  ````
    npm install
  ````
    啓動專案
  ````
    npm run dev
  ````
    若終端機出現以下字串，表示伺服器連絡成功。
  ````
  The account-check WEB running on http://localhost:3000
  ```  

## 開發環境

  - express 4.17.3
  - express-handlebars 5.3.4
  - express-session 1.17.3

## 使用的套件

  - body-parser
