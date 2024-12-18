var db_vocabs = [["網吧",7,"網咖",1,0],["四愛",8,"女攻男受",2,0],["老鐵",5,"哥們",3,0],["媽生",16,"好膚質、好看",4,0],["拉黑",8,"封鎖",5,0],["萌萌噠",8,"很可愛",6,0],["前方高能",8,"注意",7,0],["含金量",16,"知識含量、潛在價值、內涵",8,0],["長知識",14,"學到了",9,0],["糾心",16,"心疼、心寒",10,0],["糾結",16,"執著、惦記",11,0],["腦洞大開",13,"異想天開、出其不意",12,0],["美刀",15,"美金",13,0],["河蟹",8,"審查",14,0],["白給",2,"送頭",15,0],["白嫖",14,"免費拿、白吃白喝",16,0],["靠譜",16,"可靠",17,0],["實屬",17,"確實",18,0],["碰瓷",14,"假車禍、敲竹槓",19,0],["牛逼",16,"厲害",20,0],["蹭熱度",8,"跟風、跟隨潮流",21,0],["踩一捧一",13,"自抬身價",22,0],["勞逸結合",13,"適時休息",23,0],["踩屎感拖鞋",16,"發泡拖鞋",24,0],["雷管",9,"管狀炸彈",25,0],["爆棚",16,"十足、破表",26,0],["本地化",3,"在地化、道地",27,0],["端口",3,"通訊埠",28,0],["埠口",3,"通訊埠",29,0],["拉滿",16,"十足、爆表",30,0],["絲滑",16,"順滑、流暢、順口",31,0],["過渡",3,"轉場",32,0],["打印機",10,"列印機",33,0],["打印",3,"列印",34,0],["舉報",14,"檢舉",35,0],["慌得一批",13,"十分慌張",36,0],["大概率",17,"大概、有機率",37,0],["牛子",15,"陰莖",38,2],["沒誰了",13,"無人能敵、敗給你、天兵",39,0],["屌絲",5,"單身漢、人生輸家",40,2],["接地氣",16,"親民",41,0],["單身狗",5,"單身漢",42,0],["圖標",3,"圖示",43,0],["抖色",3,"遞色",44,0],["開盒",8,"肉搜",45,0],["芯片",10,"晶片",46,0],["杯具",16,"倒楣、慘了",47,0],["省流",8,"懶人包",48,0],["充能",14,"蓄能",49,0],["扯淡",14,"胡扯",50,0],["妹紙",5,"女生、正妹",51,0],["螺絲批",15,"螺絲起子",52,0],["貓膩",15,"內幕、隱情",53,0],["電機",10,"馬達",54,0],["摩的",18,"機車",55,0],["公交車",18,"公車",56,0],["勾巴",15,"雞巴",57,2],["雞肋",16,"多餘、毫無意義",58,0],["電子陽痿",8,"失去興趣、提不起勁",59,0],["不科學",8,"不合理、違反原理、不直覺",60,0],["直觀",16,"直覺",61,0],["高亮",3,"醒目提示、螢光註記",62,0],["躺平",14,"擺爛、我就爛",63,0],["調用",3,"呼叫、執行、觸發",64,0],["內卷",14,"過度競爭、內鬥",65,0],["銳評",14,"一針見血、批評",66,0],["博客",8,"部落格",67,0],["立馬",17,"馬上、立刻",68,0],["套路",15,"手法、劇本、老梗",69,0],["充值",12,"儲值",70,0],["謎語人",5,"拐彎抹角、含糊不清",71,0],["毛玻璃",15,"磨砂玻璃",72,0],["操你媽",1,"幹你娘",73,1],["CNM",1,"幹你娘",74,1],["傻逼",1,"白痴",75,1],["SB",1,"白痴",76,1],["咋的",17,"怎麼樣、不管怎樣",77,0],["艾特",8,"標註、提醒",78,0],["貌似",17,"似乎、好像",79,0],["集成圖形",10,"整合圖形",80,0],["文件",3,"資料、檔案",81,0],["二哈",4,"哈士奇",82,0],["AWSL",13,"幹我要死了、誰快幫我叫救護車、心臟快受不了",83,0],["NMSL",1,"幹你娘、你媽死了",84,1],["PY交易",12,"見不得人",85,2],["U盤",10,"USB 隨身碟",86,0],["YYDS",13,"令人崇拜、意淫大師、永遠單身",87,0],["丟失",14,"遺失",88,0],["中國台灣",7,"台灣",89,0],["也是醉了",13,"沒救了、無言",90,0],["二逼",1,"蠢蛋",91,1],["互噴",8,"互罵",92,0],["互聯網",8,"網際網路",93,0],["交互",14,"互動",94,0],["佈局",15,"格局",95,0],["低端",16,"低級、低階",96,0],["傳感器",10,"感測器、感光元件",97,0],["優化",14,"最佳化、改進",98,0],["充電寶",10,"行動電源",99,0],["光刻機",10,"曝光機",100,0],["內存",10,"記憶體、內部儲存空間",101,0],["全家桶",15,"方案、套餐",102,0],["全屏",3,"全螢幕",103,0],["兼容",3,"相容",104,0],["分辨率",3,"解析度、取樣頻率",105,0],["刷新",3,"重新整理",106,0],["刷新率",3,"更新率",107,0],["創建",3,"新增、建立",108,0],["匹配",3,"配對、對應、吻合",109,0],["反饋",14,"反應、回饋",110,0],["吸引眼球",16,"引人矚目、目不轉睛",111,0],["回滾",3,"回溯、還原",112,0],["回車",3,"Enter",113,0],["固件",3,"韌體",114,0],["圈粉",8,"粉絲",115,0],["國企",5,"國營事業",116,0],["土豆",6,"馬鈴薯",117,0],["在線",8,"線上、在線上",118,0],["塑料",15,"塑膠、塑膠微粒",119,0],["大佬",5,"高手、大大",120,0],["奇葩",16,"怪胎",121,0],["套娃",14,"巢狀、模仿",122,0],["宏",3,"巨集",123,0],["寄",16,"完蛋了、GG",124,0],["實打實",16,"穩紮穩打、實實在在",125,0],["實時",16,"即時",126,0],["實錘",13,"證實",127,0],["封禁",8,"封鎖",128,0],["小區",7,"社區",129,0],["小姊姊",5,"正妹",130,0],["小號",8,"分身帳號",131,0],["尬黑",8,"抹黑、家醜外揚",132,0],["尿性",16,"個性、德性",133,0],["屏幕",10,"螢幕",134,0],["嵌套",3,"巢狀",135,0],["帖子",8,"貼文、文章",136,0],["帶節奏",8,"帶風向",137,0],["很好的",13,"妥善地",138,0],["快進",11,"快轉、跳到",139,0],["性能",3,"效能",140,0],["恰飯",12,"工商、業配",141,0],["悲摧",16,"催淚、悲傷",142,0],["我司",5,"本公司",143,0],["我日",1,"哇靠",144,1],["手辦",15,"模型、公仔、黏土人",145,0],["手雷",9,"手榴彈",146,0],["打醬油",13,"湊熱鬧、偶然路過",147,0],["打錢",12,"轉帳、匯款",148,0],["拉胯",16,"糟糕、不理想",149,0],["掉線",16,"斷線、分心、智商太低",150,0],["掙錢",12,"賺錢",151,0],["摳圖",3,"去背",152,0],["撿漏",14,"重新利用",153,0],["操作系統",3,"作業系統",154,0],["攝像頭",10,"相機、鏡頭",155,0],["支持",3,"支援",156,0],["教程",11,"教學",157,0],["數據庫",3,"資料庫",158,0],["新建",3,"新增、建立",159,0],["早上好",13,"早安",160,0],["晚上好",13,"晚安",161,0],["智能",3,"智慧",162,0],["有一說一",13,"平心而論、實話實說、說真的",163,0],["查找",14,"搜尋、尋找",164,0],["樂子人",5,"唯恐天下不亂、愉悅犯",165,0],["模塊",3,"模組",166,0],["水平",15,"水準",167,0],["沙雕",1,"無腦",168,1],["海量",16,"大量、眾多",169,0],["渲染",3,"彩現、算繪",170,0],["渲染管線",3,"彩現方式",171,0],["演示",14,"範例",172,0],["潤",14,"移民、快逃",173,0],["激活",14,"打開、啟用",174,0],["激活碼",3,"啟動序號",175,0],["炸魚",2,"碾壓、虐菜、欺負新手",176,0],["無節操",16,"不道德、不堪入目",177,0],["爆款",16,"人氣",178,0],["狗子",4,"狗、朋友",179,0],["當前",17,"目前",180,0],["發光二極管",10,"發光二極體",181,0],["直白",16,"直接、明確",182,0],["真香",16,"真棒、被打臉、嘴巴說不要，身體卻很誠實",183,0],["破防",16,"深受打擊、玻璃心碎滿地",184,0],["硬件",10,"硬體",185,0],["硬傷",15,"致命傷、痛點",186,0],["社牛",5,"熱情",187,0],["科普",14,"補充知識、小常識",188,0],["程序",3,"程式",189,0],["積分",12,"點數、分數、紅利",190,0],["積攢",14,"累積",191,0],["站著說話不腰疼",13,"風涼話、高談闊論",192,0],["紋理",15,"紋路、材質",193,0],["組件",3,"元件",194,0],["給力",16,"可靠、厲害",195,0],["線程",3,"執行緒",196,0],["編程語言",3,"程式語言",197,0],["臥槽",1,"哇靠",198,1],["自定義",3,"自訂、客製化",199,0],["自帶",14,"附屬、預載、本身",200,0],["菜單",3,"選單",201,0],["萌新",5,"新手",202,0],["蛋疼",16,"頭疼、傷腦筋",203,0],["補丁",3,"修補程式、破解工具",204,0],["視頻",11,"影片、視頻",205,0],["計算機",10,"電腦",206,0],["記憶棒",10,"MS 記憶卡",207,0],["變量",3,"變數、變因",208,0],["負一屏",3,"資訊主頁",209,0],["質量",15,"品質",210,0],["贏麻",14,"穩贏",211,0],["走心",14,"在意",212,0],["車間",7,"生產線、倉庫",213,0],["軟件",3,"軟體",214,0],["辣眼睛",16,"慘不忍睹",215,0],["返現",12,"回饋、現金回饋",216,0],["逼格",15,"格調、情懷、氣質",217,0],["運行",3,"執行",218,0],["適配",16,"符合",219,0],["適配器",10,"變壓器",220,0],["酸奶",6,"優格",221,0],["集成",14,"整合、彙整",222,0],["集成電路",10,"積體電路",223,0],["音頻",11,"音訊",224,0],["項目",15,"專案、選項",225,0],["領導",5,"主管、總統",226,0],["顏值",15,"很帥、很好看",227,0],["高玩",2,"高手",228,0],["高端",16,"高級、高階",229,0],["魔怔",16,"著魔、走火入魔",230,0],["魚塘局",2,"新手場",231,0],["黃油",6,"奶油",232,0],["默認",3,"預設、原本",233,0],["鼠標",3,"游標",234,0],["龍傲天",5,"開掛仔",235,0]]