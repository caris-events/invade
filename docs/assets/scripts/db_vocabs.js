var db_vocabs = [["通過",16,"透過",1,0,0],["反安裝",3,"移除",2,0,0],["卸載",3,"移除",3,0,0],["服務員",5,"服務生、店員",4,0,0],["網民",8,"網友",5,0,0],["三觀",15,"價值觀",6,0,0],["大面積",16,"大範圍",7,0,0],["誤區",15,"錯誤觀念、迷思、誤解、盲點",8,0,0],["沒可能",13,"不可能",9,0,0],["破口",15,"漏洞",10,0,0],["合同",15,"合約",11,0,0],["內存",10,"記憶體",12,0,0],["估計",14,"可能、大概、預估",13,0,0],["登錄",3,"登入",14,0,0],["檔次",16,"級、級別",15,0,0],["常量",3,"常數",16,0,0],["協議",3,"協定",17,0,0],["字符串",3,"字串",18,0,0],["死機",3,"當機",19,0,0],["光標",3,"游標",20,0,0],["文檔",3,"文件、說明書",21,0,0],["程序員",5,"程式設計師",22,0,0],["藍屏",3,"藍色畫面錯誤、當機",23,0,0],["光盤",11,"光碟",24,0,0],["激光",3,"雷射",25,0,0],["聲霸",10,"電視音響、家庭劇院",26,0,0],["小電驢",18,"電動自行車",27,0,0],["啞光",16,"霧面",28,0,0],["信息素",15,"費洛蒙",29,0,0],["微交易",12,"小額付費",30,0,0],["狼性",16,"野心",31,0,0],["現實很骨感",13,"現實很殘酷",32,0,0],["繃不住",16,"忍不住",33,0,0],["難繃",16,"難受",34,0,0],["抑鬱症",15,"憂鬱症",35,0,0],["學渣",5,"吊車尾、後段班",36,0,0],["學霸",5,"資優生",37,0,0],["絲滑",16,"順滑、流暢、順口",38,0,0],["屏蔽",14,"隱藏、封鎖、遮蔽",39,0,0],["高亮",3,"發光、標記、亮部",40,0,0],["質量",15,"品質、素質、數值",41,0,0],["插眼",8,"之後再看",42,0,0],["單身狗",5,"單身漢",43,0,0],["擴展塢",10,"擴充埠",44,0,0],["嘴替",5,"代言人、發聲筒",45,0,0],["嘎了",13,"死了",46,0,0],["預製菜",6,"調理包、微波食品、冷凍食品",47,0,0],["長臉",13,"給面子、出風頭",48,0,0],["線下",16,"現場、實體",49,0,0],["矢量",15,"向量",50,0,0],["信息",15,"訊息、資訊",51,0,0],["吧唧",15,"胸章",52,0,0],["線程",3,"執行緒",53,0,0],["刷手機",14,"滑手機",54,0,0],["民政局",7,"戶政事務所",55,0,0],["視頻電話",3,"視訊電話",56,0,0],["尋思",14,"想說、深思熟慮",57,0,0],["監控",10,"監視器",58,0,0],["大概率",17,"大概、有機率",59,0,0],["模板",15,"樣板、範本",60,0,0],["字節",3,"位元組",61,0,0],["字符",3,"字元",62,0,0],["幾個意思",13,"什麼意思",63,0,0],["當前",17,"目前",64,0,0],["跳閘",14,"跳電",65,0,0],["浴霸",10,"浴室暖風機",66,0,0],["計算機",10,"電腦",67,0,1],["科普",14,"講解、分享、小常識",68,0,0],["奇葩",16,"怪胎",69,0,0],["程序",3,"程式",70,0,0],["性能",3,"效能、性能",71,0,0],["掙錢",12,"賺錢",72,0,0],["進程",3,"程序",73,0,0],["操你媽",1,"幹你娘",74,1,0],["佈局",15,"格局",75,0,0],["寄",16,"完蛋了、GG",76,0,0],["小號",8,"分身帳號",77,0,0],["很好的",13,"妥善地",78,0,0],["支持",3,"支援",79,0,0],["文件",3,"資料、檔案",80,0,0],["新建",3,"新增、建立",81,0,0],["智能",3,"智慧",82,0,0],["水平",15,"水準",83,0,0],["沙雕",1,"無腦",84,1,0],["炸魚",2,"碾壓、虐菜、欺負新手",85,0,0],["真香",16,"真棒、被打臉、嘴巴說不要，身體卻很誠實",86,0,0],["菜單",3,"選單",87,0,0],["過渡",3,"轉場",88,0,0],["電機",10,"馬達",89,0,0],["項目",15,"專案、選項",90,0,0],["默認",3,"預設、原本",91,0,0],["高清",11,"高畫質、高音質",92,0,0],["高大上",16,"高貴、有氣質",93,0,0],["憋屈",16,"敢怒不敢言、委屈、有苦難言、彆扭",94,0,0],["逼格",15,"格調、情懷、氣質",95,0,0],["懵逼",16,"不明所以、困惑",96,0,0],["國企",5,"國營事業",97,0,0],["硬盤",10,"硬碟",98,0,0],["緩存",3,"快取",99,0,0],["奧術魔刃",15,"ASMR",100,0,0],["平替",15,"替代",101,0,0],["全局",3,"全域",102,0,0],["尬黑",8,"抹黑、家醜外揚",103,0,0],["渠道",15,"管道、通路",104,0,0],["打車",14,"叫車",105,0,0],["沒誰了",13,"無人能敵、敗給你、天兵",106,0,0],["文本",15,"文字、劇本、劇情、文案",107,0,0],["草泥馬",4,"羊駝",108,0,0],["破防",16,"深受打擊、玻璃心碎滿地、被說中了",109,0,0],["管飽",16,"份量大、充裕、十足",110,0,0],["網吧",7,"網咖",111,0,0],["四愛",8,"女攻男受",112,0,0],["老鐵",5,"哥們",113,0,0],["媽生",16,"好膚質、好看",114,0,0],["拉黑",8,"封鎖",115,0,0],["萌萌噠",8,"很可愛",116,0,0],["前方高能",8,"注意",117,0,0],["含金量",16,"知識含量、潛在價值、內涵",118,0,0],["長知識",14,"學到了",119,0,0],["糾心",16,"心疼、心寒",120,0,0],["糾結",16,"執著、惦記",121,0,0],["腦洞大開",13,"異想天開、出其不意",122,0,0],["美刀",15,"美金",123,0,0],["河蟹",8,"審查",124,0,0],["白給",2,"送頭",125,0,0],["白嫖",14,"免費拿、白吃白喝",126,0,0],["靠譜",16,"可靠",127,0,0],["實屬",17,"確實",128,0,0],["碰瓷",14,"假車禍、敲竹槓",129,0,0],["牛逼",16,"厲害",130,0,0],["蹭熱度",8,"跟風、跟隨潮流",131,0,0],["踩一捧一",13,"自抬身價",132,0,0],["勞逸結合",13,"適時休息",133,0,0],["踩屎感拖鞋",16,"發泡拖鞋",134,0,0],["雷管",9,"管狀炸彈",135,0,0],["爆棚",16,"十足、破表",136,0,0],["本地化",3,"在地化、道地",137,0,0],["端口",3,"通訊埠",138,0,0],["埠口",3,"通訊埠",139,0,0],["拉滿",16,"十足、爆表",140,0,0],["打印機",10,"列印機",141,0,0],["打印",3,"列印",142,0,0],["舉報",14,"檢舉",143,0,0],["慌得一批",13,"十分慌張",144,0,0],["牛子",15,"陰莖",145,2,0],["屌絲",5,"單身漢、人生輸家",146,2,0],["接地氣",16,"親民",147,0,0],["圖標",3,"圖示",148,0,0],["抖色",3,"遞色",149,0,0],["開盒",8,"肉搜",150,0,0],["芯片",10,"晶片",151,0,0],["杯具",16,"倒楣、慘了",152,0,0],["省流",8,"懶人包",153,0,0],["充能",14,"蓄能",154,0,0],["扯淡",14,"胡扯",155,0,0],["妹紙",5,"女生、正妹",156,0,0],["螺絲批",15,"螺絲起子",157,0,0],["貓膩",15,"內幕、隱情",158,0,0],["摩的",18,"機車",159,0,0],["公交車",18,"公車",160,0,0],["勾巴",15,"雞巴",161,2,0],["雞肋",16,"多餘、毫無意義",162,0,0],["電子陽痿",8,"失去興趣、提不起勁",163,0,0],["不科學",8,"不合理、違反原理、不直覺",164,0,0],["直觀",16,"直覺",165,0,0],["躺平",14,"擺爛、我就爛",166,0,0],["調用",3,"呼叫、執行、觸發",167,0,0],["內卷",14,"過度競爭、內鬥",168,0,0],["銳評",14,"一針見血、批評",169,0,0],["博客",8,"部落格",170,0,0],["立馬",17,"馬上、立刻",171,0,0],["套路",15,"手法、劇本、老梗",172,0,0],["充值",12,"儲值",173,0,0],["謎語人",5,"拐彎抹角、含糊不清",174,0,0],["毛玻璃",15,"磨砂玻璃",175,0,0],["CNM",1,"幹你娘",176,1,0],["傻逼",1,"白痴",177,1,0],["SB",1,"白痴",178,1,0],["咋的",17,"怎麼樣、不管怎樣",179,0,0],["艾特",8,"標註、提醒",180,0,0],["貌似",17,"似乎、好像",181,0,0],["集成圖形",10,"整合圖形",182,0,0],["二哈",4,"哈士奇",183,0,0],["AWSL",13,"幹我要死了、誰快幫我叫救護車、心臟快受不了",184,0,0],["NMSL",1,"幹你娘、你媽死了",185,1,0],["PY交易",12,"見不得人",186,2,0],["U盤",10,"USB 隨身碟",187,0,0],["YYDS",13,"令人崇拜、意淫大師、永遠單身",188,0,0],["丟失",14,"遺失",189,0,0],["中國台灣",7,"台灣",190,0,0],["也是醉了",13,"沒救了、無言",191,0,0],["二逼",1,"蠢蛋",192,1,0],["互噴",8,"互罵",193,0,0],["互聯網",8,"網際網路",194,0,0],["交互",14,"互動",195,0,0],["低端",16,"低級、低階",196,0,0],["傳感器",10,"感測器、感光元件",197,0,0],["優化",14,"最佳化、改進",198,0,0],["充電寶",10,"行動電源",199,0,0],["光刻機",10,"曝光機",200,0,0],["全家桶",15,"方案、套餐",201,0,0],["全屏",3,"全螢幕",202,0,0],["兼容",3,"相容",203,0,0],["分辨率",3,"解析度、取樣頻率",204,0,0],["刷新",3,"重新整理",205,0,0],["刷新率",3,"更新率",206,0,0],["創建",3,"新增、建立",207,0,0],["匹配",3,"配對、對應、吻合",208,0,0],["反饋",14,"反應、回饋",209,0,0],["吸引眼球",16,"引人矚目、目不轉睛",210,0,0],["回滾",3,"回溯、還原",211,0,0],["回車",3,"Enter",212,0,0],["固件",3,"韌體",213,0,0],["圈粉",8,"粉絲",214,0,0],["土豆",6,"馬鈴薯",215,0,0],["在線",8,"線上、在線上",216,0,0],["塑料",15,"塑膠、塑膠微粒",217,0,0],["大佬",5,"高手、大大",218,0,0],["套娃",14,"巢狀、模仿",219,0,0],["宏",3,"巨集",220,0,0],["實打實",16,"穩紮穩打、實實在在",221,0,0],["實時",16,"即時",222,0,0],["實錘",13,"證實",223,0,0],["封禁",8,"封鎖",224,0,0],["小區",7,"社區",225,0,0],["小姊姊",5,"正妹",226,0,0],["尿性",16,"個性、德性",227,0,0],["屏幕",10,"螢幕",228,0,0],["嵌套",3,"巢狀",229,0,0],["帖子",8,"貼文、文章",230,0,0],["帶節奏",8,"帶風向",231,0,0],["快進",11,"快轉、跳到",232,0,0],["恰飯",12,"工商、業配",233,0,0],["悲摧",16,"催淚、悲傷",234,0,0],["我司",5,"本公司",235,0,0],["我日",1,"哇靠",236,1,0],["手辦",15,"模型、公仔、黏土人",237,0,0],["手雷",9,"手榴彈",238,0,0],["打醬油",13,"湊熱鬧、偶然路過",239,0,0],["打錢",12,"轉帳、匯款",240,0,0],["拉胯",16,"糟糕、不理想",241,0,0],["掉線",16,"斷線、分心、智商太低",242,0,0],["摳圖",3,"去背",243,0,0],["撿漏",14,"重新利用",244,0,0],["操作系統",3,"作業系統",245,0,0],["攝像頭",10,"相機、鏡頭",246,0,0],["教程",11,"教學",247,0,0],["數據庫",3,"資料庫",248,0,0],["早上好",13,"早安",249,0,0],["晚上好",13,"晚安",250,0,0],["有一說一",13,"平心而論、實話實說、說真的",251,0,0],["查找",14,"搜尋、尋找",252,0,0],["樂子人",5,"唯恐天下不亂、愉悅犯",253,0,0],["模塊",3,"模組",254,0,0],["海量",16,"大量、眾多",255,0,0],["渲染",3,"彩現、算繪",256,0,0],["渲染管線",3,"彩現方式",257,0,0],["演示",14,"範例",258,0,0],["潤",14,"移民、快逃",259,0,0],["激活",14,"打開、啟用",260,0,0],["激活碼",3,"啟動序號",261,0,0],["無節操",16,"不道德、不堪入目",262,0,0],["爆款",16,"人氣",263,0,0],["狗子",4,"狗、朋友",264,0,0],["發光二極管",10,"發光二極體",265,0,0],["直白",16,"直接、明確",266,0,0],["硬件",10,"硬體",267,0,0],["硬傷",15,"致命傷、痛點",268,0,0],["社牛",5,"熱情",269,0,0],["積分",12,"點數、分數、紅利",270,0,0],["積攢",14,"累積",271,0,0],["站著說話不腰疼",13,"風涼話、高談闊論",272,0,0],["紋理",15,"紋路、材質",273,0,0],["組件",3,"元件",274,0,0],["給力",16,"可靠、厲害",275,0,0],["編程語言",3,"程式語言",276,0,0],["臥槽",1,"哇靠",277,1,0],["自定義",3,"自訂、客製化",278,0,0],["自帶",14,"附屬、預載、本身",279,0,0],["萌新",5,"新手",280,0,0],["蛋疼",16,"頭疼、傷腦筋",281,0,0],["補丁",3,"修補程式、破解工具",282,0,0],["視頻",11,"影片、視頻",283,0,0],["記憶棒",10,"MS 記憶卡",284,0,0],["變量",3,"變數、變因",285,0,0],["負一屏",3,"資訊主頁",286,0,0],["贏麻",14,"穩贏",287,0,0],["走心",14,"在意",288,0,0],["車間",7,"生產線、倉庫",289,0,0],["軟件",3,"軟體",290,0,0],["辣眼睛",16,"慘不忍睹",291,0,0],["返現",12,"回饋、現金回饋",292,0,0],["運行",3,"執行",293,0,0],["適配",16,"符合",294,0,0],["適配器",10,"變壓器",295,0,0],["酸奶",6,"優格",296,0,0],["集成",14,"整合、彙整",297,0,0],["集成電路",10,"積體電路",298,0,0],["音頻",11,"音訊",299,0,0],["領導",5,"主管、總統",300,0,0],["顏值",15,"很帥、很好看",301,0,0],["高玩",2,"高手",302,0,0],["高端",16,"高級、高階",303,0,0],["魔怔",16,"著魔、走火入魔",304,0,0],["魚塘局",2,"新手場",305,0,0],["黃油",6,"奶油",306,0,0],["鼠標",3,"游標",307,0,0],["龍傲天",5,"開掛仔",308,0,0]]