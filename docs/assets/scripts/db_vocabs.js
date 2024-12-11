var db_vocabs = [["沒誰了",13,"無人能敵、敗給你",1,0],["毛玻璃",15,"磨砂玻璃",2,0],["操你媽",1,"幹你娘",3,1],["CNM",1,"幹你娘",4,1],["傻逼",1,"白痴",5,1],["SB",1,"白痴",6,1],["咋的",17,"怎麼樣、不管怎樣",7,0],["艾特",8,"標註、提醒",8,0],["貌似",17,"似乎、好像",9,0],["集成圖形",10,"整合圖形",10,0],["文件",3,"資料、檔案",11,0],["二哈",4,"哈士奇",12,0],["AWSL",13,"幹我要死了、誰快幫我叫救護車、心臟快受不了",13,0],["NMSL",1,"幹你娘、你媽死了",14,1],["PY交易",12,"見不得人",15,2],["U盤",10,"USB 隨身碟",16,0],["YYDS",13,"令人崇拜、意淫大師、永遠單身",17,0],["丟失",14,"遺失",18,0],["中國台灣",7,"台灣",19,0],["也是醉了",13,"沒救了、無言",20,0],["二逼",1,"蠢蛋",21,1],["互噴",8,"互罵",22,0],["互聯網",8,"網際網路",23,0],["交互",14,"互動",24,0],["佈局",15,"格局",25,0],["低端",16,"低級、低階",26,0],["傳感器",10,"感測器、感光元件",27,0],["優化",14,"最佳化、改進",28,0],["充值",12,"儲值",29,0],["充電寶",10,"行動電源",30,0],["光刻機",10,"曝光機",31,0],["內卷",14,"過度競爭、內鬥",32,0],["內存",10,"記憶體、內部儲存空間",33,0],["全家桶",15,"方案、套餐",34,0],["全屏",3,"全螢幕",35,0],["兼容",3,"相容",36,0],["分辨率",3,"解析度、取樣頻率",37,0],["刷新",3,"重新整理",38,0],["刷新率",3,"更新率",39,0],["前方高能",8,"注意、提醒觀眾",40,0],["創建",3,"新增、建立",41,0],["匹配",3,"配對、對應、吻合",42,0],["博客",8,"部落格",43,0],["反饋",14,"反應、回饋",44,0],["吸引眼球",16,"引人矚目、目不轉睛",45,0],["回滾",3,"回溯、還原",46,0],["回車",3,"Enter",47,0],["固件",3,"韌體",48,0],["圈粉",8,"粉絲",49,0],["國企",5,"國營事業",50,0],["土豆",6,"馬鈴薯",51,0],["在線",8,"線上、在線上",52,0],["塑料",15,"塑膠、塑膠微粒",53,0],["大佬",5,"高手、大大",54,0],["奇葩",16,"怪胎",55,0],["套娃",14,"巢狀、模仿",56,0],["套路",15,"手法、劇本、老梗",57,0],["宏",3,"巨集",58,0],["寄",16,"完蛋了、GG",59,0],["實打實",16,"穩紮穩打、實實在在",60,0],["實時",16,"即時",61,0],["實錘",13,"證實",62,0],["封禁",8,"封鎖",63,0],["小區",7,"社區",64,0],["小姊姊",5,"正妹",65,0],["小號",8,"分身帳號",66,0],["尬黑",8,"抹黑、家醜外揚",67,0],["尿性",16,"個性、德性",68,0],["屏幕",10,"螢幕",69,0],["嵌套",3,"巢狀",70,0],["帖子",8,"貼文、文章",71,0],["帶節奏",8,"帶風向",72,0],["很好的",13,"妥善地",73,0],["快進",11,"快轉、跳到",74,0],["性能",3,"效能",75,0],["恰飯",12,"工商、業配",76,0],["悲摧",16,"催淚、悲傷",77,0],["我司",5,"本公司",78,0],["我日",1,"哇靠",79,1],["手辦",15,"模型、公仔、黏土人",80,0],["手雷",9,"手榴彈",81,0],["打印",3,"列印",82,0],["打醬油",13,"湊熱鬧、偶然路過",83,0],["打錢",12,"轉帳、匯款",84,0],["拉胯",16,"糟糕、不理想",85,0],["掉線",16,"斷線、分心、智商太低",86,0],["掙錢",12,"賺錢",87,0],["接地氣",16,"親民",88,0],["摳圖",3,"去背",89,0],["撿漏",14,"重新利用",90,0],["操作系統",3,"作業系統",91,0],["攝像頭",10,"相機、鏡頭",92,0],["支持",3,"支援",93,0],["教程",11,"教學",94,0],["數據庫",3,"資料庫",95,0],["新建",3,"新增、建立",96,0],["早上好",13,"早安",97,0],["晚上好",13,"晚安",98,0],["智能",3,"智慧",99,0],["有一說一",13,"平心而論、實話實說、說真的",100,0],["杯具",16,"倒楣、慘了",101,0],["查找",14,"搜尋、尋找",102,0],["樂子人",5,"唯恐天下不亂、愉悅犯",103,0],["模塊",3,"模組",104,0],["水平",15,"水準",105,0],["沙雕",1,"無腦",106,1],["海量",16,"大量、眾多",107,0],["渲染",3,"彩現、算繪",108,0],["渲染管線",3,"彩現方式",109,0],["演示",14,"範例",110,0],["潤",14,"移民、快逃",111,0],["激活",14,"打開、啟用",112,0],["激活碼",3,"啟動序號",113,0],["炸魚",2,"碾壓、虐菜、欺負新手",114,0],["無節操",16,"不道德、不堪入目",115,0],["爆款",16,"人氣",116,0],["牛逼",16,"厲害",117,0],["狗子",4,"狗、朋友",118,0],["當前",17,"目前",119,0],["發光二極管",10,"發光二極體",120,0],["直白",16,"直接、明確",121,0],["真香",16,"真棒、被打臉、嘴巴說不要，身體卻很誠實",122,0],["破防",16,"深受打擊、玻璃心碎滿地",123,0],["硬件",10,"硬體",124,0],["硬傷",15,"致命傷、痛點",125,0],["社牛",5,"熱情",126,0],["科普",14,"補充知識、小常識",127,0],["程序",3,"程式",128,0],["積分",12,"點數、分數、紅利",129,0],["積攢",14,"累積",130,0],["立馬",17,"馬上、立刻",131,0],["站著說話不腰疼",13,"風涼話、高談闊論",132,0],["紋理",15,"紋路、材質",133,0],["組件",3,"元件",134,0],["給力",16,"可靠、厲害",135,0],["線程",3,"執行緒",136,0],["編程語言",3,"程式語言",137,0],["臥槽",1,"哇靠",138,1],["自定義",3,"自訂、客製化",139,0],["自帶",14,"附屬、預載、本身",140,0],["舉報",14,"檢舉",141,0],["芯片",10,"晶片",142,0],["菜單",3,"選單",143,0],["萌新",5,"新手",144,0],["蛋疼",16,"頭疼、傷腦筋",145,0],["補丁",3,"修補程式、破解工具",146,0],["視頻",11,"影片、視頻",147,0],["計算機",10,"電腦",148,0],["記憶棒",10,"MS 記憶卡",149,0],["調用",3,"呼叫、執行、觸發",150,0],["謎語人",5,"拐彎抹角、含糊不清",151,0],["變量",3,"變數、變因",152,0],["貓膩",15,"內幕、隱情",153,0],["負一屏",3,"資訊主頁",154,0],["質量",15,"品質",155,0],["贏麻",14,"穩贏",156,0],["走心",14,"在意",157,0],["蹭熱度",8,"跟風、跟隨潮流",158,0],["躺平",14,"擺爛、我就爛",159,0],["車間",7,"生產線、倉庫",160,0],["軟件",3,"軟體",161,0],["辣眼睛",16,"慘不忍睹",162,0],["返現",12,"回饋、現金回饋",163,0],["逼格",15,"格調、情懷、氣質",164,0],["運行",3,"執行",165,0],["適配",16,"符合",166,0],["適配器",10,"變壓器",167,0],["酸奶",6,"優格",168,0],["銳評",14,"一針見血、批評",169,0],["開盒",8,"肉搜",170,0],["集成",14,"整合、彙整",171,0],["集成電路",10,"積體電路",172,0],["音頻",11,"音訊",173,0],["項目",15,"專案、選項",174,0],["領導",5,"主管、總統",175,0],["顏值",15,"很帥、很好看",176,0],["高玩",2,"高手",177,0],["高端",16,"高級、高階",178,0],["魔怔",16,"著魔、走火入魔",179,0],["魚塘局",2,"新手場",180,0],["黃油",6,"奶油",181,0],["默認",3,"預設、原本",182,0],["鼠標",3,"游標",183,0],["龍傲天",5,"開掛仔",184,0]]