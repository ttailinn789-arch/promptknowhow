---
title: "【範例】如何為文章設定封面首圖 (Cover Image)"
description: "這是一篇展示如何在文章中新增與設定封面首圖（Hero Image）的範例教學。"
publishDate: "04 July 2023"
updatedDate: "14 August 2023"
coverImage:
  src: "./cover.png"
  alt: "Astro 桌面桌布圖片"
tags: ["範例", "圖片教學"]
---

## 🖼️ 文章封面首圖設定說明

這篇文章是一個範例，教你如何在 Astro Cactus 主題中為文章添加美麗的封面圖片（Cover / Hero Image）。

當你在文章頂部的 Frontmatter 區塊設定 `coverImage` 屬性時，這張圖片就會自動顯示在文章標題的最上方，提升整篇文章的視覺豐富度！

---

### 🛠️ 屬性設定說明

* **`src`**：封面圖片的路徑（可以是同資料夾下的圖片 `./cover.png`，或是放在 `public/` 資料夾中的圖片）。
* **`alt`**：圖片的替代文字說明（有利於 SEO 與無障礙閱讀）。
* **`updatedDate`**：文章的最後更新日期（如果文章有修訂，系統會顯示此更新時間）。