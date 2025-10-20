# 笨他侵略

我們的主旨並非讓人「仇恨中國」或是無腦地「抵制使用中國產品」，但我們希望你知道每個人的所作所為。這個網路資料庫記載了與中共政府有關的團體、服務還有侵略行為（例如：言論審查、侵害人權）。

你可以透過 [Google 表單](https://invade.tw/contribute)來建議新增、編輯條目。

## MCP 伺服器

本專案提供 Model Context Protocol (MCP) 伺服器，讓 AI 助手（如 Claude Desktop）可以方便地查詢資料庫。請參閱 [MCP 伺服器完整文件](cmd/mcp-server/README.md)。

## Chrome 擴充套件：支語提示器

- 在網頁上自動標示中國用語，滑鼠靠近即可查看建議替代詞與例句
- 底色與底線可分別啟用，自訂色調、線型與提示浮窗
- 報章雜誌風格的設定頁與懸浮資訊卡
- 資料來源與本專案一致，始終同步 `database/vocabs` 內容

建立資料並載入：

```bash
cd cmd/build
BAKAINVADE_DIR=$(pwd)/../.. go run . extension
```

然後於 Chrome 的 `chrome://extensions` 啟用「開發人員模式」，載入 `browser-extension/chrome` 即可。更多細節請見 [browser-extension/README.md](browser-extension/README.md)。

## 內容授權

笨他侵略的原始碼授權為 [MIT](https://github.com/caris-events/invade/blob/master/LICENSE)，文字段落以 [CC 0 公眾領域](https://creativecommons.org/publicdomain/zero/1.0/deed.zh_TW)釋出，你可以盡情分享、改寫或用作商業用途。

商標與圖示屬於該相關所屬企業、組織且僅作為提及並無挪作他用，在未營利與潛在教育價值下主張合理使用並以低畫質、解析度保護其原著作。笨他侵略相關記載之資料皆來自網路摘要、參考、大眾共同編輯，閱聽者應當妥善查證檢視當下的完整性、即時性與正確性並不得將資料用作法律依據。
