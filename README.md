### Account-Check

![Account-Check-image](https://github.com/Steavn-Chen/Account-Check/blob/main/public/images/%E5%B8%B3%E5%AF%86%E6%AA%A2%E6%9F%A5%E6%A9%9F%E5%88%B6.PNG)

## 功能介紹
  功能(1)
  - 使用者輸入帳號跟密碼，如果輸入的帳號或密碼錯誤，則跳到錯誤畫面並通知使用者帳號或密碼錯誤，若輸入帳號、密碼都正確，則跳到歡迎使用者的頁面。
  
  功能(2)
  - 如何讓伺服器保存使用者登入的狀態，使用者發送表單，當 email，password 都輸入正確，伺服器在回應時會把 cookie 傳給瀏覽器，這樣子使用者在瀏覽網頁時因為瀏覽器上的 cookie 跟伺服器裡的一致，就不用一直重覆登入才能瀏覽網站，而是從登入到登出這段時間伺服器都保持著使用者處於登入的狀態。
  
## 啓動方式
  
  - 將專案 clone 到本地端

  https://github.com/Steavn-Chen/Account-Check.git

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

## 使用的套件

  - body-parser
