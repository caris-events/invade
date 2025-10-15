# 笨他侵略

我們的主旨並非讓人「仇恨中國」或是無腦地「抵制使用中國產品」，但我們希望你知道每個人的所作所為。這個網路資料庫記載了與中共政府有關的團體、服務還有侵略行為（例如：言論審查、侵害人權）。

你可以透過 [Google 表單](https://invade.tw/contribute)來建議新增、編輯條目。

## MCP 伺服器

本專案提供 **Model Context Protocol (MCP) 伺服器**，讓 AI 助手（如 Claude Desktop）可以方便地查詢資料庫。

### 功能特點

- 🔍 **搜尋項目** - 查詢中資公司、品牌、軟體、遊戲等
- 📖 **詞彙查詢** - 查詢中國侵略性詞彙（支語）字典
- ✅ **檢查詞彙** - LLM 輸出前先查詢避免使用侵略性詞彙
- 🏷️ **進階篩選** - 按類別、類型、擁有者、侵略等級篩選
- 🌐 **直接連結** - 連結到 <https://invade.tw/> 查看完整資訊

### 快速開始

#### 1. 編譯伺服器

```bash
cd cmd/mcp-server
go build -o invade-mcp-server
```

#### 2. 設定 Claude

##### 方式 A：使用 Claude Code 指令（推薦）

如果你使用 Claude Code，可以用一行指令加入：

```bash
claude mcp add invade-tw /path/to/invade/cmd/mcp-server/invade-mcp-server --scope user -e INVADE_DB_PATH=/path/to/invade/database
```

驗證安裝：

```bash
claude mcp list
```

##### 方式 B：手動編輯設定檔案

編輯 Claude Desktop 設定檔案：

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "invade-tw": {
      "command": "/path/to/invade-mcp-server",
      "args": [],
      "env": {
        "INVADE_DB_PATH": "/path/to/invade/database"
      }
    }
  }
}
```

設定完成後，重啟 Claude Desktop 或 Claude Code。

### 使用範例

設定完成後，你可以在 Claude Desktop 中直接提問：

- "搜尋所有中國遊戲公司"
- "查詢 Alibaba 的詳細資訊"
- "檢查『數據庫』是否為侵略性詞彙"
- "什麼是支語中的『渲染』？"

### 詳細文件

更多資訊請參閱 [MCP 伺服器完整文件](cmd/mcp-server/README.md)

## 內容授權

笨他侵略的原始碼授權為 [MIT](https://github.com/caris-events/invade/blob/master/LICENSE)，文字段落以 [CC 0 公眾領域](https://creativecommons.org/publicdomain/zero/1.0/deed.zh_TW)釋出，你可以盡情分享、改寫或用作商業用途。

商標與圖示屬於該相關所屬企業、組織且僅作為提及並無挪作他用，在未營利與潛在教育價值下主張合理使用並以低畫質、解析度保護其原著作。笨他侵略相關記載之資料皆來自網路摘要、參考、大眾共同編輯，閱聽者應當妥善查證檢視當下的完整性、即時性與正確性並不得將資料用作法律依據。
