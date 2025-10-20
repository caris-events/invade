# 笨他侵略：支語提示器 Chrome 擴充套件

此擴充套件會在瀏覽網頁時，標示常見的中國用語（支語），並提供對應的替代詞與描述，協助你快速辨識可疑詞彙。

## 功能總覽

- ✅ 自動掃描頁面文字並標示支語
- 💡 游標移到標示上方可顯示詳細資訊、建議用法與例句
- 🎨 底色與底線可分別啟用、調整顏色與線型
- 📰 報章雜誌風格的設定頁與懸浮資訊卡
- ✋ 可選擇忽略輸入框或停用提示浮窗

## 資料生成

擴充套件使用 `database/vocabs` 目錄的 YAML 檔案作為資料來源。安裝前請先產生 `vocabs.json`：

```bash
cd cmd/build
BAKAINVADE_DIR=$(pwd)/../.. go run . extension
```

執行後會在 `browser-extension/chrome/data/vocabs.json` 生成最新的詞彙資料。

## 在 Chrome 載入

1. 開啟 `chrome://extensions`
2. 開啟「開發人員模式」
3. 選擇「載入未封裝項目」
4. 指定 `browser-extension/chrome` 目錄

## 設定項目

擴充套件提供簡易設定頁（`chrome://extensions` → 擴充套件詳細資料 → **擴充功能選項**）：

- **啟用支語標記**：快速開啟或停用整體功能
- **顯示懸浮資訊**：控制是否顯示報章式提示卡
- **套用底色 / 保留底線**：可獨立開關，打造最順眼的標記效果
- **標記顏色 / 底線樣式**：細調色調與線型
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
