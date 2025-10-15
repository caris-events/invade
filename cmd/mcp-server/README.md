# Invade.tw MCP Server

這是一個 Model Context Protocol (MCP) 伺服器，提供方便的查詢介面來存取「笨他侵略」(invade.tw) 資料庫。

## 功能特點

- 🔍 搜尋中資公司、品牌、遊戲等項目
- 📖 查詢中國侵略性詞彙（支語）字典
- 🏷️ 按類別、類型、擁有者、侵略等級篩選
- 🌐 直接連結到 https://invade.tw/ 網站查看詳細資訊

## 可用工具

### 項目查詢

- **search_items**: 搜尋資料庫中的項目（公司、品牌、軟體、遊戲等）
  - 參數：keyword（關鍵字）、category（分類）、type（類型）、owner（擁有者）、invasion（侵略類型）、limit（結果數量）
- **get_item**: 根據代碼獲取特定項目的詳細資訊
  - 參數：code（項目代碼，例如 'alibaba', 'tencent', 'muse-dash'）
- **list_item_categories**: 列出所有可用的項目分類

### 詞彙查詢

- **search_vocabs**: 搜尋中國侵略性詞彙（支語）字典
  - 參數：keyword（關鍵字）、category（分類）、limit（結果數量）
- **get_vocab**: 獲取特定詞彙的詳細資訊，包括說明、範例和正確用法
  - 參數：word（詞彙，例如 '數據庫', '渲染', '三觀'）
- **list_vocab_categories**: 列出所有可用的詞彙分類

## 安裝

### 方式 1：直接執行（開發模式）

```bash
cd cmd/mcp-server
go mod download
go run .
```

### 方式 2：編譯安裝

```bash
cd cmd/mcp-server
go build -o invade-mcp-server
./invade-mcp-server
```

## 環境變數

- `INVADE_DB_PATH`: 資料庫路徑（選填）
  - 預設會自動尋找 `database` 目錄

## 配置 MCP 客戶端

### Claude Desktop

在你的 Claude Desktop 配置文件中添加：

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

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

或者使用 `go run`：

```json
{
  "mcpServers": {
    "invade-tw": {
      "command": "go",
      "args": ["run", "/path/to/invade/cmd/mcp-server"],
      "env": {
        "INVADE_DB_PATH": "/path/to/invade/database"
      }
    }
  }
}
```

### 其他 MCP 客戶端

任何支援 MCP 的客戶端都可以使用此伺服器。伺服器使用標準輸入/輸出（stdio）進行通訊。

## 使用範例

配置完成後，你可以在 MCP 客戶端中使用以下查詢：

- "搜尋所有中國遊戲公司"
- "查詢 Alibaba 的詳細資訊"
- "什麼是支語中的『數據庫』？"
- "列出所有娛樂產業相關的項目"
- "搜尋與金融相關的詞彙"

## 資料來源

所有資料來自 [invade.tw](https://invade.tw/) 資料庫：
- 項目資料：`database/items/*.yml`
- 詞彙資料：`database/vocabs/*.yml`

## 授權

此 MCP 伺服器程式碼遵循 [MIT 授權](../../LICENSE)。資料內容以 [CC 0 公眾領域](https://creativecommons.org/publicdomain/zero/1.0/deed.zh_TW)釋出。

## 相關連結

- [invade.tw 網站](https://invade.tw/)
- [GitHub Repository](https://github.com/caris-events/invade)
- [Model Context Protocol](https://modelcontextprotocol.io/)
