# 笨他侵略：支語提示器 Chrome 擴充套件

此擴充套件會在瀏覽網頁時，標示常見的中國用語（支語），並提供對應的替代詞與描述，協助你快速辨識可疑詞彙。

## 功能總覽

- 自動掃描頁面文字並標示支語
- 游標移到標示上方可顯示詳細資訊、建議用法與例句
- 底色與底線可分別啟用，並自動依文字顏色切換底色
- 報章雜誌風格的設定頁與懸浮資訊卡
- 可選擇忽略輸入框或停用提示浮窗

## 資料生成

擴充套件使用 `database/vocabs` 目錄的 YAML 檔案作為資料來源。安裝前請先產生 `vocabs.json`：

```bash
cd cmd/build
BAKAINVADE_DIR=$(pwd)/../.. go run . extension
```

執行後會在 `browser-extension/chrome/data/vocabs.json` 生成最新的詞彙資料。

## 詞彙欄位補充

在 `database/vocabs/*.yml` 的詞彙資料中，可額外帶有 `matchOptions` 來細調比對行為，重新執行 `go run . extension` 後就會被帶入 `vocabs.json`：

- `matchMode: "standalone"`：要求詞彙需出現在標點或空白邊界之間，適合英數縮寫或需獨立顯示的詞彙。
- `skipPhrases`: `string[]`：列出遇到特定片語時要忽略的情境，例如 `"海內存知己"`。

```yaml
# database/vocabs/內存.yml
matchOptions:
  skipPhrases:
    - 海內存知己
```

## 斷詞與比對流程

Content script 會優先透過 `Intl.Segmenter('zh-Hant', { granularity: 'word' })` 斷詞，僅針對分出的 token 嘗試比對詞庫，以降低「海內存知己 → 內存」這類誤判。瀏覽器若不支援 `Intl.Segmenter`，才會回退至既有的正則比對邏輯。需要支援的最低版本：Chrome 87、Firefox 114、Edge 87。

## 在 Chrome 載入

1. 開啟 `chrome://extensions`
2. 開啟「開發人員模式」
3. 選擇「載入未封裝項目」
4. 指定 `browser-extension/chrome` 目錄

## 在 Firefox 載入

1. 開啟 `about:debugging#/runtime/this-firefox`
2. 點選「臨時載入附加元件」
3. 選擇 `browser-extension/chrome/manifest.json`
4. 之後可在 `about:addons` 內調整權限或重新載入（Firefox 109 以上）

## 設定項目

擴充套件提供簡易設定頁（`chrome://extensions` → 擴充套件詳細資料 → **擴充功能選項**）：

- **啟用支語標記**：快速開啟或停用整體功能
- **顯示懸浮資訊**：控制是否顯示報章式提示卡
- **套用底色 / 保留底線**：可獨立開關，打造最順眼的標記效果
- **深色／淺色文字底色**：針對不同頁面主題分別設定色調
- **底線樣式**：細調線型以符合版面風格
- **忽略輸入區**：避免在編輯器或表單內干擾

按下「恢復預設值」可以隨時回到原始設定。

## 檔案結構

```
browser-extension/
└── chrome/
    ├── data/              # 由 Go 指令產生的詞彙資料
    ├── icons/             # 擴充套件使用的圖示
    ├── scripts/           # content script 與共用設定
    ├── styles/            # 樣式檔（標示與提示框）
    ├── manifest.json
    ├── options.html/.css/.js
```

歡迎依實際需求調整樣式與提示內容。若要更新詞彙資料，修改 `database/vocabs` 後重新執行資料生成指令即可。
