叠茵庭搬屋 Checklist PWA v1.3 — 家人即時同步＋跨分類拖移版

最新日期：
- 2026-08-23：安床＋象徵式入宅（13:00–15:00）
- 2026-08-28：搬其他物件／正式搬屋

本版新增：
1. 8/23 安床＋象徵式入宅完整 Checklist
2. LG 電視、OSIM 小天后、Whirlpool 洗衣機、阿叔搬屋、祥益地產、業主 2按1上、蓆夢思床褥
3. 新增「枱凳」項目；移除獨立的「搬濾水機」項目
4. 每項左側 ☰ 可拖移排序；在「全部」畫面可跨分類拖移
5. 跨分類後的新分類位置及排序會保存在本機；啟用 Firestore 後亦會同步給家人
6. 保留 v1.1 的完成狀態、備註及 Firebase 設定，不需要重新設定

Firebase 設定沿用 v1.1：
1. Firebase Project（Spark 免費方案即可）
2. Web App firebaseConfig
3. Firestore Database
4. Firestore Rules 使用 firestore.rules.txt
5. Authentication > Sign-in method > Anonymous
6. 將本資料夾全部檔案上載／覆蓋到原本 GitHub Pages repository

同步資料位置：Firestore / moveChecklists / <家庭共用碼>
注意：不要在備註輸入身份證、密碼、銀行資料等敏感資料。
