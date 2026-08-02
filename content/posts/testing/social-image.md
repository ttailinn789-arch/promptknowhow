---
title: "【範例】如何為文章自訂 Open Graph (OG) 社群分享卡片圖片"
publishDate: "27 January 2023"
description: "這是一篇展示如何在 Astro Cactus 主題的文章 Frontmatter 中設定自訂社群分享卡片圖片（OG Image）的範例教學。"
tags: ["範例", "教學", "社群圖片"]
ogImage: "/social-card.png"
---

## 📸 如何在文章中加入專屬的社群分享圖片

這篇文章是一個範例，教你如何為部落格文章新增自訂的 [Open Graph (OG)](https://ogp.me/) 社群卡片圖片（當你將文章連結分享到 Facebook、LINE 或 Telegram 時所顯示的預覽圖）。

只要在文章開頭的 Frontmatter 區塊中加入可選的 `ogImage` 屬性，系統就會自動停用 [satori](https://github.com/vercel/satori) 為此頁面自動生成圖片的功能，改為使用你指定的圖片。

---

### 🛠️ 設定方式說明

如果你開啟這個 Markdown 檔案 `src/content/post/social-image.md`，你會看到 `ogImage` 屬性設定指向了一個放在 `public/` 資料夾中的圖片路徑[^1]：

```yaml
ogImage: "/social-card.png"