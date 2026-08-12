叠茵庭搬屋 Checklist PWA v1.1 — 家人即時同步測試版

需要在 Firebase Console 完成：
1. 建立 Firebase Project（Spark 免費方案即可）
2. 建立 Web App，取得 firebaseConfig
3. Build > Firestore Database > Create database
4. Firestore Rules 貼上 firestore.rules.txt 內容並 Publish
5. Build > Authentication > Sign-in method > 啟用 Anonymous
6. 將本資料夾全部檔案上載 GitHub Pages
7. 開 PWA > 右上角 ⚙︎ > 填名稱 > 產生家庭共用碼 > 貼 firebaseConfig > 儲存並連線
8. 複製「家庭設定碼」給家人。家人在同一個 PWA 的 ⚙︎ 內貼入後按「匯入家庭設定碼」，再填自己名稱並連線。

同步資料位置：Firestore / moveChecklists / <家庭共用碼>
注意：此版本供家庭測試，不要在備註輸入身份證、密碼、銀行資料等敏感資料。
