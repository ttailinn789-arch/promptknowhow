import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

// =========================================================================
// 1. 網站全局基本資訊設定 (Site Config)
// =========================================================================
export const siteConfig: SiteConfig = {
	// 【關鍵】請把這裡換成你的免費子域名，網址結尾要加上斜線 /
	url: "https://ttailinn789.dpdns.org/",

	// 網站名稱 (會顯示在頂部 Header、頁尾 Footer 與 SEO 標題)
	title: "TTAILINN789 日常紀實！",

	// 網站作者名稱
	author: "TTAILINN789",

	// 網站 Slogan / 簡介 (用於 Google 搜尋引擎摘要與社交平台分享)
	description: "這裡可能會有你喜歡的免費資源，歡迎有空來看看。",

	// 網站 HTML 語言設定 (zh-TW 代表台灣繁體中文)
	lang: "zh-TW",

	// Open Graph 社交平台卡片語言設定
	ogLocale: "zh_TW",

	// 是否在網站 Header 顯示 Logo 圖示 (預設開啟)
	showLogo: true,

	// 日期顯示格式 (繁體中文語系與日/月/年格式)
	date: {
		locale: "zh-TW",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// =========================================================================
// 2. 網站頂部選單導覽列 (Navigation Menu Links)
// =========================================================================
export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "首頁", // 原英文: Home
	},
	{
		path: "/about/",
		title: "關於本站", // 原英文: About
	},
	{
		path: "/posts/",
		title: "免費資源文章", // 原英文: Blog (存放你發布的所有文章)
	},
	{
		path: "/notes/",
		title: "隨手筆記", // 原英文: Notes (短篇公告或心得)
	},
];

// =========================================================================
// 3. 程式碼區塊高亮與主題樣式設定 (Expressive Code Settings)
// 註解：這部分維持模板預設即可，確保文章內的程式碼與配色能正常顯示
// =========================================================================
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
