var db_vocabs = [["吧唧",15,"胸章",1,0,0],["線程",3,"執行緒",2,0,0],["刷手機",14,"滑手機",3,0,0],["民政局",7,"戶政事務所",4,0,0],["視頻電話",3,"視訊電話",5,0,0],["尋思",14,"想說、深思熟慮",6,0,0],["監控",10,"監視器",7,0,0],["大概率",17,"大概、有機率",8,0,0],["模板",15,"樣板、範本",9,0,0],["字節",3,"位元組",10,0,0],["字符",3,"字元",11,0,0],["幾個意思",13,"什麼意思",12,0,0],["當前",17,"目前",13,0,0],["跳閘",14,"跳電",14,0,0],["浴霸",10,"浴室暖風機",15,0,0],["計算機",10,"電腦",16,0,1],["科普",14,"講解、分享、小常識",17,0,0],["奇葩",16,"怪胎",18,0,0],["程序",3,"程式",19,0,0],["性能",3,"效能、性能",20,0,0],["掙錢",12,"賺錢",21,0,0],["進程",3,"程序",22,0,0],["操你媽",1,"幹你娘",23,1,0],["佈局",15,"格局",24,0,0],["寄",16,"完蛋了、GG",25,0,0],["小號",8,"分身帳號",26,0,0],["很好的",13,"妥善地",27,0,0],["支持",3,"支援",28,0,0],["文件",3,"資料、檔案",29,0,0],["新建",3,"新增、建立",30,0,0],["智能",3,"智慧",31,0,0],["水平",15,"水準",32,0,0],["沙雕",1,"無腦",33,1,0],["炸魚",2,"碾壓、虐菜、欺負新手",34,0,0],["真香",16,"真棒、被打臉、嘴巴說不要，身體卻很誠實",35,0,0],["菜單",3,"選單",36,0,0],["質量",15,"品質",37,0,0],["過渡",3,"轉場",38,0,0],["電機",10,"馬達",39,0,0],["項目",15,"專案、選項",40,0,0],["默認",3,"預設、原本",41,0,0],["高清",11,"高畫質、高音質",42,0,0],["高大上",16,"高貴、有氣質",43,0,0],["憋屈",16,"敢怒不敢言、委屈、有苦難言、彆扭",44,0,0],["逼格",15,"格調、情懷、氣質",45,0,0],["懵逼",16,"不明所以、困惑",46,0,0],["國企",5,"國營事業",47,0,0],["硬盤",10,"硬碟",48,0,0],["緩存",3,"快取",49,0,0],["奧術魔刃",15,"ASMR",50,0,0],["平替",15,"替代",51,0,0],["全局",3,"全域",52,0,0],["尬黑",8,"抹黑、家醜外揚",53,0,0],["渠道",15,"管道、通路",54,0,0],["打車",14,"叫車",55,0,0],["沒誰了",13,"無人能敵、敗給你、天兵",56,0,0],["文本",15,"文字、劇本、劇情、文案",57,0,0],["草泥馬",4,"羊駝",58,0,0],["破防",16,"深受打擊、玻璃心碎滿地、被說中了",59,0,0],["管飽",16,"份量大、充裕、十足",60,0,0],["網吧",7,"網咖",61,0,0],["四愛",8,"女攻男受",62,0,0],["老鐵",5,"哥們",63,0,0],["媽生",16,"好膚質、好看",64,0,0],["拉黑",8,"封鎖",65,0,0],["萌萌噠",8,"很可愛",66,0,0],["前方高能",8,"注意",67,0,0],["含金量",16,"知識含量、潛在價值、內涵",68,0,0],["長知識",14,"學到了",69,0,0],["糾心",16,"心疼、心寒",70,0,0],["糾結",16,"執著、惦記",71,0,0],["腦洞大開",13,"異想天開、出其不意",72,0,0],["美刀",15,"美金",73,0,0],["河蟹",8,"審查",74,0,0],["白給",2,"送頭",75,0,0],["白嫖",14,"免費拿、白吃白喝",76,0,0],["靠譜",16,"可靠",77,0,0],["實屬",17,"確實",78,0,0],["碰瓷",14,"假車禍、敲竹槓",79,0,0],["牛逼",16,"厲害",80,0,0],["蹭熱度",8,"跟風、跟隨潮流",81,0,0],["踩一捧一",13,"自抬身價",82,0,0],["勞逸結合",13,"適時休息",83,0,0],["踩屎感拖鞋",16,"發泡拖鞋",84,0,0],["雷管",9,"管狀炸彈",85,0,0],["爆棚",16,"十足、破表",86,0,0],["本地化",3,"在地化、道地",87,0,0],["端口",3,"通訊埠",88,0,0],["埠口",3,"通訊埠",89,0,0],["拉滿",16,"十足、爆表",90,0,0],["絲滑",16,"順滑、流暢、順口",91,0,0],["打印機",10,"列印機",92,0,0],["打印",3,"列印",93,0,0],["舉報",14,"檢舉",94,0,0],["慌得一批",13,"十分慌張",95,0,0],["牛子",15,"陰莖",96,2,0],["屌絲",5,"單身漢、人生輸家",97,2,0],["接地氣",16,"親民",98,0,0],["單身狗",5,"單身漢",99,0,0],["圖標",3,"圖示",100,0,0],["抖色",3,"遞色",101,0,0],["開盒",8,"肉搜",102,0,0],["芯片",10,"晶片",103,0,0],["杯具",16,"倒楣、慘了",104,0,0],["省流",8,"懶人包",105,0,0],["充能",14,"蓄能",106,0,0],["扯淡",14,"胡扯",107,0,0],["妹紙",5,"女生、正妹",108,0,0],["螺絲批",15,"螺絲起子",109,0,0],["貓膩",15,"內幕、隱情",110,0,0],["摩的",18,"機車",111,0,0],["公交車",18,"公車",112,0,0],["勾巴",15,"雞巴",113,2,0],["雞肋",16,"多餘、毫無意義",114,0,0],["電子陽痿",8,"失去興趣、提不起勁",115,0,0],["不科學",8,"不合理、違反原理、不直覺",116,0,0],["直觀",16,"直覺",117,0,0],["高亮",3,"醒目提示、螢光註記",118,0,0],["躺平",14,"擺爛、我就爛",119,0,0],["調用",3,"呼叫、執行、觸發",120,0,0],["內卷",14,"過度競爭、內鬥",121,0,0],["銳評",14,"一針見血、批評",122,0,0],["博客",8,"部落格",123,0,0],["立馬",17,"馬上、立刻",124,0,0],["套路",15,"手法、劇本、老梗",125,0,0],["充值",12,"儲值",126,0,0],["謎語人",5,"拐彎抹角、含糊不清",127,0,0],["毛玻璃",15,"磨砂玻璃",128,0,0],["CNM",1,"幹你娘",129,1,0],["傻逼",1,"白痴",130,1,0],["SB",1,"白痴",131,1,0],["咋的",17,"怎麼樣、不管怎樣",132,0,0],["艾特",8,"標註、提醒",133,0,0],["貌似",17,"似乎、好像",134,0,0],["集成圖形",10,"整合圖形",135,0,0],["二哈",4,"哈士奇",136,0,0],["AWSL",13,"幹我要死了、誰快幫我叫救護車、心臟快受不了",137,0,0],["NMSL",1,"幹你娘、你媽死了",138,1,0],["PY交易",12,"見不得人",139,2,0],["U盤",10,"USB 隨身碟",140,0,0],["YYDS",13,"令人崇拜、意淫大師、永遠單身",141,0,0],["丟失",14,"遺失",142,0,0],["中國台灣",7,"台灣",143,0,0],["也是醉了",13,"沒救了、無言",144,0,0],["二逼",1,"蠢蛋",145,1,0],["互噴",8,"互罵",146,0,0],["互聯網",8,"網際網路",147,0,0],["交互",14,"互動",148,0,0],["低端",16,"低級、低階",149,0,0],["傳感器",10,"感測器、感光元件",150,0,0],["優化",14,"最佳化、改進",151,0,0],["充電寶",10,"行動電源",152,0,0],["光刻機",10,"曝光機",153,0,0],["內存",10,"記憶體、內部儲存空間",154,0,0],["全家桶",15,"方案、套餐",155,0,0],["全屏",3,"全螢幕",156,0,0],["兼容",3,"相容",157,0,0],["分辨率",3,"解析度、取樣頻率",158,0,0],["刷新",3,"重新整理",159,0,0],["刷新率",3,"更新率",160,0,0],["創建",3,"新增、建立",161,0,0],["匹配",3,"配對、對應、吻合",162,0,0],["反饋",14,"反應、回饋",163,0,0],["吸引眼球",16,"引人矚目、目不轉睛",164,0,0],["回滾",3,"回溯、還原",165,0,0],["回車",3,"Enter",166,0,0],["固件",3,"韌體",167,0,0],["圈粉",8,"粉絲",168,0,0],["土豆",6,"馬鈴薯",169,0,0],["在線",8,"線上、在線上",170,0,0],["塑料",15,"塑膠、塑膠微粒",171,0,0],["大佬",5,"高手、大大",172,0,0],["套娃",14,"巢狀、模仿",173,0,0],["宏",3,"巨集",174,0,0],["實打實",16,"穩紮穩打、實實在在",175,0,0],["實時",16,"即時",176,0,0],["實錘",13,"證實",177,0,0],["封禁",8,"封鎖",178,0,0],["小區",7,"社區",179,0,0],["小姊姊",5,"正妹",180,0,0],["尿性",16,"個性、德性",181,0,0],["屏幕",10,"螢幕",182,0,0],["嵌套",3,"巢狀",183,0,0],["帖子",8,"貼文、文章",184,0,0],["帶節奏",8,"帶風向",185,0,0],["快進",11,"快轉、跳到",186,0,0],["恰飯",12,"工商、業配",187,0,0],["悲摧",16,"催淚、悲傷",188,0,0],["我司",5,"本公司",189,0,0],["我日",1,"哇靠",190,1,0],["手辦",15,"模型、公仔、黏土人",191,0,0],["手雷",9,"手榴彈",192,0,0],["打醬油",13,"湊熱鬧、偶然路過",193,0,0],["打錢",12,"轉帳、匯款",194,0,0],["拉胯",16,"糟糕、不理想",195,0,0],["掉線",16,"斷線、分心、智商太低",196,0,0],["摳圖",3,"去背",197,0,0],["撿漏",14,"重新利用",198,0,0],["操作系統",3,"作業系統",199,0,0],["攝像頭",10,"相機、鏡頭",200,0,0],["教程",11,"教學",201,0,0],["數據庫",3,"資料庫",202,0,0],["早上好",13,"早安",203,0,0],["晚上好",13,"晚安",204,0,0],["有一說一",13,"平心而論、實話實說、說真的",205,0,0],["查找",14,"搜尋、尋找",206,0,0],["樂子人",5,"唯恐天下不亂、愉悅犯",207,0,0],["模塊",3,"模組",208,0,0],["海量",16,"大量、眾多",209,0,0],["渲染",3,"彩現、算繪",210,0,0],["渲染管線",3,"彩現方式",211,0,0],["演示",14,"範例",212,0,0],["潤",14,"移民、快逃",213,0,0],["激活",14,"打開、啟用",214,0,0],["激活碼",3,"啟動序號",215,0,0],["無節操",16,"不道德、不堪入目",216,0,0],["爆款",16,"人氣",217,0,0],["狗子",4,"狗、朋友",218,0,0],["發光二極管",10,"發光二極體",219,0,0],["直白",16,"直接、明確",220,0,0],["硬件",10,"硬體",221,0,0],["硬傷",15,"致命傷、痛點",222,0,0],["社牛",5,"熱情",223,0,0],["積分",12,"點數、分數、紅利",224,0,0],["積攢",14,"累積",225,0,0],["站著說話不腰疼",13,"風涼話、高談闊論",226,0,0],["紋理",15,"紋路、材質",227,0,0],["組件",3,"元件",228,0,0],["給力",16,"可靠、厲害",229,0,0],["編程語言",3,"程式語言",230,0,0],["臥槽",1,"哇靠",231,1,0],["自定義",3,"自訂、客製化",232,0,0],["自帶",14,"附屬、預載、本身",233,0,0],["萌新",5,"新手",234,0,0],["蛋疼",16,"頭疼、傷腦筋",235,0,0],["補丁",3,"修補程式、破解工具",236,0,0],["視頻",11,"影片、視頻",237,0,0],["記憶棒",10,"MS 記憶卡",238,0,0],["變量",3,"變數、變因",239,0,0],["負一屏",3,"資訊主頁",240,0,0],["贏麻",14,"穩贏",241,0,0],["走心",14,"在意",242,0,0],["車間",7,"生產線、倉庫",243,0,0],["軟件",3,"軟體",244,0,0],["辣眼睛",16,"慘不忍睹",245,0,0],["返現",12,"回饋、現金回饋",246,0,0],["運行",3,"執行",247,0,0],["適配",16,"符合",248,0,0],["適配器",10,"變壓器",249,0,0],["酸奶",6,"優格",250,0,0],["集成",14,"整合、彙整",251,0,0],["集成電路",10,"積體電路",252,0,0],["音頻",11,"音訊",253,0,0],["領導",5,"主管、總統",254,0,0],["顏值",15,"很帥、很好看",255,0,0],["高玩",2,"高手",256,0,0],["高端",16,"高級、高階",257,0,0],["魔怔",16,"著魔、走火入魔",258,0,0],["魚塘局",2,"新手場",259,0,0],["黃油",6,"奶油",260,0,0],["鼠標",3,"游標",261,0,0],["龍傲天",5,"開掛仔",262,0,0]]