
			var db_item_codes = ["msi","ikulaoshi","game-tree","ingco-tools","total-tools","amatsuki-mahjong","game-beans","soul-of-dragon","shopee","sea","lotus-cars","geely","volvo","john-cena","sunnyhills","rayark","tamano-kedama","the-walt-disney-company","marvel-games","marvel-rivals","disney-interactive","disney-plus","netease","hot-star-large-fried-chicken","microsoft","zenless-zone-zero","harmonyos","weibo","genshin-impact","synnex","hewlett-packard","oppo","xiaomi","vnet","tiktok","mihoyo","bbk","21vianet-bluecloud","unity","tuanjie-engine","cognosphere","hoyoverse","dcard","asus","cover-corporation","vivo","openatom-foundation","sina","bing","linkedin","honor","openharmony","pci-technology","china-mobile","thebox-vtuber","joker081888","blue-archive","peroperogames","greenpeace","nexon","xd-network","muse-dash","volkswagen","lamborghini","porsche","audi","garmin","muang-thai-chiang-mai-marathon","muang-thai-life-assurance","embark-studios","miside","indieark","electronic-arts","mirrors-edge-catalyst","ea-dice","imserious","marathon-game","the-finals","arc-raiders","kartrider-drift","want-want","cti-news","mover-games","hana-healthy","wupaochun","85-cafe","set-news","matea-tea","htc","united-daily-news","want-want-china-times-group","china-times","far-eastern-group","heavy-rain","detroit-become-human","quantic-dream","arknights-endfield","gryphline","ananta","naked-rain","pixel-overlord","starwave-networks","magic-house-interactive-entertainment","stargazer-games","stella-sora","neverness-to-everness","habby","cheetah-mobile","rapoo","ubisoft","trip-com","guillemot-brothers","techtronic-industries","milwaukee-tool","capital-group","rog","hypergryph","arknights","long-cheng","yostar","sunborn","darkwinter-software","girls-frontline","hero-games","pwb-play","news-market","mundfish","hao123","gaijin-entertainment","fonglei-technology","efun-tw","changyou","tangren-media","sony","bungie","btg-home-inns","boltrend-games","bluepoch","mrbeast","bilibili","baidu","youthdew","mc-hotdog","boton","qihoo-360","tower-of-fantasy","smilegate","meridian-project","mamba-interactive","taiwan-peoples-party","stove","soundcloud","dhgames","mahjong-meta","rolling-dice-labs","gamepanda","playcrab","qingci-games","douyu","zte","fun-hope","reverse-1999","wanda-group","jd","alibaba","kuomintang","hololive","bytedance","37-interactive-entertainment","4399","chillyroom","ctrip","dpstorm","dragonest","eskyfun","forgame","funplus","g-bits","huayi-brothers-media","kingsoft","kuro-games","lilith-games","martian-game","midea","mobvista","nanshan-capital","ourpalm","pandada-studio","paper-games","perfect-world","r2-games","roshow","shimmer-games","shiyue-joy","sjhuatong","sohu","tencent","xingyou","yokaverse","gaea","meng52","babeltime","172tt","baitian","bstation","btg","central-military-commission","chinese-academy-of-sciences","chinese-communist-party","drodo-studio","efun","funplus-phoenix","gamedreamer","gamesparcs","garena","hainan-chuqing","hearts-net","huawei","inch-interactive-entertainment","iqiyi","iwplay-world","jieyou","kingdowin","kingsgroup","koimi-studio","komoe-game","kuka","mobimon","moonton","national-university-of-defense-technology","new-margin","orient-enterprise","orient-international","original-games","paradise-entertainment","peiyu-digital","poseidon-games","riot-games","sequoia-capital","sequoia-china","shenqu-games","skymoons","sony-interactive-entertainment","spgame","supercell","timi-studio","walmart","wanda-cinemas-games","zlon-game"]
			var db_items      = [[0,-1,4,"微星科技","MSI",1,1,4,1],[1,-1,1,"Iku 老師","Ikulaoshi",4,2,1,2],[2,248,2,"亦樹遊戲","Game Tree",1,1,3,3],[3,-1,15,"盈合工具","INGCO Tools",3,1,4,4],[4,3,15,"TOTAL 工具","TOTAL Tools",3,1,4,5],[5,-1,9,"天月麻雀","Amatsuki Mahjong",3,6,3,6],[6,248,2,"遊戲種子","Game Beans",2,1,3,7],[7,248,9,"龍魂旅人","Soul of Dragon",3,6,3,8],[8,9,14,"蝦皮購物","Shopee",4,5,3,9],[9,-1,6,"冬海集團","Sea Limited",4,1,3,10],[10,11,22,"蓮花汽車","Lotus Cars",4,1,4,11],[11,-1,22,"吉利汽車","Geely Automobile",3,1,4,12],[12,11,22,"Volvo","富豪汽車",4,1,4,13],[13,-1,1,"John Cena","約翰·希南",4,2,1,14],[14,-1,19,"微熱山丘","SunnyHills",1,1,4,15],[15,-1,2,"雷亞遊戲","Rayark Inc.",1,1,3,16],[16,-1,1,"玉之けだま","毛玉牛乳",4,2,4,17],[17,-1,2,"華特迪士尼","The Walt Disney Company",4,1,4,18],[18,20,9,"漫威遊戲","Marvel Games",4,1,4,19],[19,22,9,"漫威爭鋒","Marvel Rivals",3,6,3,20],[20,17,2,"迪士尼互動","Disney Interactive",4,1,4,21],[21,17,2,"Disney+","迪士尼+",4,5,4,22],[22,-1,7,"網易","Netease",3,1,3,23],[23,-1,19,"豪大大雞排","HOT-STAR Large Fried Chicken",1,1,4,24],[24,-1,7,"微軟","Microsoft",4,1,2,25],[25,35,9,"絕區零","Zenless Zone Zero",3,6,3,26],[26,217,8,"鴻蒙","HarmonyOS",3,4,3,27],[27,47,3,"微博","Weibo",3,5,3,28],[28,35,9,"原神","Genshin Impact",3,6,3,29],[29,-1,7,"聯強國際","Synnex",1,1,2,30],[30,-1,7,"HP","惠普",4,1,1,31],[31,-1,4,"OPPO","歐珀",3,1,3,32],[32,-1,4,"小米","Xiaomi",3,1,3,33],[33,-1,3,"世紀互聯","VNET",3,1,3,34],[34,167,11,"抖音","TikTok",3,5,3,35],[35,-1,2,"米哈遊","miHoYo",3,1,3,36],[36,-1,4,"步步高","BBK",3,1,3,37],[37,33,3,"世紀互聯藍雲","21Vianet BlueCloud",3,1,3,38],[38,-1,7,"Unity","",4,1,4,39],[39,38,8,"團結引擎","Tuanjie Engine",3,4,4,40],[40,35,2,"Cognosphere","識隙之城",4,1,3,41],[41,35,3,"HoYoverse","",3,5,3,42],[42,-1,3,"Dcard","",1,1,2,43],[43,-1,7,"華碩電腦","ASUSTeK Computer",1,1,4,44],[44,-1,7,"Cover 株式會社","Cover Corporation",4,1,4,45],[45,-1,4,"vivo","維沃",3,1,3,46],[46,-1,7,"開放原子開源基金會","OpenAtom Foundation",3,3,3,47],[47,-1,3,"新浪","Sina",3,1,3,48],[48,24,3,"Bing","必應",4,5,2,49],[49,24,3,"LinkedIn","領英",4,5,2,50],[50,208,4,"榮耀","Honor",3,1,4,51],[51,46,7,"OpenHarmony","",3,3,3,52],[52,-1,7,"佳都科技","PCI Technology",3,1,3,53],[53,-1,5,"中國移動","China Mobile",3,1,4,54],[54,-1,2,"箱箱 The Box","",1,7,2,55],[55,-1,1,"勾起你心中的惡","勾惡",1,2,1,56],[56,59,9,"蔚藍檔案","Blue Archive",4,6,4,57],[57,-1,2,"呸嘍呸嘍","PeroPeroGames",3,1,4,58],[58,-1,20,"綠色和平","Greenpeace",4,3,4,59],[59,-1,2,"樂線","Nexon",4,1,4,60],[60,-1,2,"心動網路","X.D. Network",3,1,4,61],[61,57,9,"喵斯快跑","Muse Dash",3,6,4,62],[62,-1,22,"福斯汽車","Volkswagen",4,1,0,63],[63,62,22,"藍寶堅尼","Lamborghini",4,1,4,64],[64,62,22,"保時捷","Porsche",4,1,1,65],[65,62,22,"奧迪","Audi",4,1,0,66],[66,-1,7,"台灣國際航電","Garmin",4,1,4,67],[67,-1,21,"清邁馬拉松","Chiang Mai Marathon",4,3,1,68],[68,-1,17,"泰國人壽保險公司","Muang Thai Life Assurance",4,1,0,69],[69,59,2,"Embark Studios","",4,1,4,70],[70,-1,9,"MiSide","",4,6,0,71],[71,-1,2,"獨立方舟","IndieArk",3,1,3,72],[72,-1,2,"美商藝電","Electronic Arts",4,1,1,73],[73,74,2,"靚影特務：關鍵催化","Mirror's Edge Catalyst",4,6,1,74],[74,72,2,"EA DICE","",4,1,1,75],[75,-1,1,"超認真少年","I'm Serious",1,2,1,76],[76,134,9,"馬拉松","Marathon",4,6,1,77],[77,69,9,"最終決戰","THE FINALS",4,6,4,78],[78,69,9,"ARC Raiders","",4,6,4,79],[79,59,9,"跑跑卡丁車：飄移","KartRider: Drift",4,6,4,80],[80,-1,19,"旺旺集團","Want Want",1,1,4,81],[81,90,11,"中天新聞","CTI News Channel",1,1,4,82],[82,-1,2,"魔塊遊戲","Mover Games",1,1,0,83],[83,-1,2,"花守海露希","花守へるし",1,2,1,84],[84,-1,19,"吳寶春麥方店","",1,1,4,85],[85,-1,19,"85度C","85C Daily Cafe",1,1,4,86],[86,-1,11,"三立新聞","SET News",1,1,2,87],[87,-1,19,"麻六茶","MATEA",1,1,4,88],[88,-1,7,"宏達電","HTC Corporation",1,1,4,89],[89,-1,11,"聯合報","United Daily News",1,1,0,90],[90,80,11,"旺旺中時媒體集團","Want Want China Times Group",1,1,4,91],[91,90,11,"中時新聞網","China Times",1,1,4,92],[92,-1,12,"遠東集團","Far Eastern Group",1,1,4,93],[93,95,9,"暴雨殺機","Heavy Rain",4,6,3,94],[94,95,9,"底特律：化身為人","Detroit: Become Human",4,6,3,95],[95,196,2,"Quantic Dream","",4,1,3,96],[96,116,9,"明日方舟：終末地","Arknights: Endfield",3,6,3,97],[97,116,2,"獅鷲邊境","GRYPHLINE",4,1,3,98],[98,99,9,"代號：無限大","ANANTA",3,6,3,99],[99,22,2,"Naked Rain","",3,3,3,100],[100,101,9,"魔王我不累","Pixel Overlord",3,6,0,101],[101,-1,2,"STARWAVE NET","",3,1,0,102],[102,-1,2,"魔法屋互動娛樂","Magic House Interactive Entertainment",1,1,2,103],[103,119,2,"Stargazer Games","",3,1,3,104],[104,103,9,"星塔旅人","Stella Sora",3,6,3,105],[105,189,9,"異環","Neverness to Everness",3,6,3,106],[106,-1,2,"海彼網路","Habby",3,1,3,107],[107,179,7,"獵豹移動","Cheetah Mobile",3,1,3,108],[108,-1,4,"雷柏科技","RAPOO",3,1,4,109],[109,111,2,"育碧娛樂","Ubisoft Entertainment SA",4,1,4,110],[110,171,18,"Trip.com","",3,5,3,111],[111,-1,6,"Guillemot 家族","Guillemot Brothers",4,1,0,112],[112,-1,15,"創科實業","Techtronic Industries",2,1,0,113],[113,112,16,"美沃奇","Milwaukee Tool",4,1,4,114],[114,-1,17,"資本集團","Capital Group",4,1,0,115],[115,43,4,"玩家國度","Republic of Gamers",1,7,4,116],[116,-1,2,"鷹角網絡","HYPERGRYPH",3,1,3,117],[117,116,9,"明日方舟","Arknights",3,6,3,118],[118,60,2,"龍成網路","Long Cheng",1,1,4,119],[119,-1,2,"悠星網路","Yostar",3,1,3,120],[120,-1,2,"散爆網路","Sunborn Network Technology",3,1,3,121],[121,120,2,"暗冬網路","Darkwinter Software",3,1,3,122],[122,120,9,"少女前線","Girls' Frontline",3,6,3,123],[123,-1,2,"英雄遊戲","Hero Games",3,1,3,124],[124,-1,2,"品玩邦藝術","PWB Play",1,1,0,125],[125,-1,11,"上下游新聞","News\u0026Market",1,1,1,126],[126,-1,2,"Mundfish","",4,1,3,127],[127,140,3,"Hao123","",3,1,3,128],[128,199,2,"Gaijin Entertainment","",4,1,4,129],[129,-1,2,"風雷科技","Fonglei Technology",1,1,0,130],[130,218,2,"Efun遊戲平台","efuntw",1,5,3,131],[131,195,2,"暢遊時代","Changyou",3,1,3,132],[132,-1,2,"唐人影視","Tangren Media",3,1,3,133],[133,-1,12,"索尼","Sony",4,1,0,134],[134,242,2,"Bungie","",4,1,1,135],[135,205,18,"首旅如家","BTG Home Inns",3,1,4,136],[136,22,2,"寶船遊戲","Boltrend Games",3,1,3,137],[137,-1,2,"深藍互動","Bluepoch",3,1,3,138],[138,-1,1,"MrBeast","",4,2,4,139],[139,-1,11,"嗶哩嗶哩","Bilibili",3,1,4,140],[140,-1,3,"百度","Baidu",3,1,3,141],[141,-1,2,"朝露工作室","Youth Dew Games",3,1,3,142],[142,-1,1,"熱狗","MC HotDog",1,2,2,143],[143,-1,7,"寶通科技","Boton",3,1,3,144],[144,-1,7,"奇虎360","Qihoo 360",3,1,3,145],[145,189,9,"幻塔","Tower of Fantasy",3,6,3,146],[146,-1,2,"微笑之門","SmileGate",4,1,4,147],[147,-1,2,"子午計畫","Meridian Project",1,7,2,148],[148,172,2,"曼巴互娛","Mamba Interactive",1,1,3,149],[149,-1,10,"台灣民眾黨","Taiwan People's Party",1,3,0,150],[150,146,2,"Stove","",4,5,4,151],[151,-1,11,"SoundCloud","",4,1,4,152],[152,-1,2,"卓杭科技","DHGames",3,1,3,153],[153,154,9,"Mahjong Meta","",4,6,4,154],[154,-1,2,"Rolling Dice Labs","",4,1,3,155],[155,201,2,"熊貓遊戲","Game Panda",1,1,3,156],[156,186,2,"玩蟹科技","Playcrab",3,1,3,157],[157,-1,2,"青瓷數碼","Qingci Games",3,1,3,158],[158,-1,2,"鬥魚","Douyu",3,1,3,159],[159,-1,5,"中興通訊","ZTE",3,1,3,160],[160,136,2,"峰禾科技","FunHope",1,1,3,161],[161,137,9,"重返未來：1999","Reverse: 1999",3,6,3,162],[162,-1,6,"萬達集團","Wanda Group",3,1,3,163],[163,-1,14,"京東","JD.com",3,1,3,164],[164,-1,3,"阿里巴巴","Alibaba Group",3,1,3,165],[165,-1,10,"中國國民黨","Kuomintang",1,3,0,166],[166,44,2,"Hololive Production","",4,3,4,167],[167,-1,7,"字節跳動","ByteDance",3,1,3,168],[168,-1,2,"三七互娛","37 Games",3,1,3,169],[169,-1,2,"四三九九網路","4399",3,1,3,170],[170,-1,2,"涼屋遊戲","ChillyRoom",3,1,3,171],[171,-1,0,"攜程旅行","Ctrip",3,1,3,172],[172,-1,2,"龍拳風暴","DP.STORM",3,1,3,173],[173,-1,2,"龍淵網路","Dragonest",3,1,3,174],[174,-1,2,"天游網路","Eskyfun",3,1,3,175],[175,-1,2,"雲遊控股","Forgame",3,1,3,176],[176,-1,2,"趣加科技","FunPlus",3,1,3,177],[177,-1,2,"吉比特","G-bits",3,1,3,178],[178,-1,11,"華誼兄弟","Huayi Brothers Media",3,1,3,179],[179,-1,7,"金山軟件","Kingsoft",3,1,3,180],[180,-1,2,"庫洛遊戲","Kuro Games",3,1,3,181],[181,-1,2,"莉莉絲遊戲","Lilith Games",3,1,3,182],[182,-1,2,"火星人互動娛樂","Martian Game",3,1,3,183],[183,-1,16,"美的集團","Midea Group",3,1,3,184],[184,-1,7,"匯量科技","Mobvista",3,1,3,185],[185,-1,17,"南山資本","Nanshan Capital",3,1,3,186],[186,-1,2,"掌趣科技","Ourpalm",3,1,3,187],[187,-1,2,"炎魂網路","Pandada Studio",3,1,3,188],[188,-1,2,"疊紙遊戲","Paper Games",3,1,3,189],[189,-1,2,"完美世界","Perfect World",3,1,3,190],[190,-1,2,"燦和兄弟","R2 Games",3,1,3,191],[191,-1,15,"露笑集團","Roshow",3,1,3,192],[192,-1,2,"微光互動","Shimmer Games",3,1,3,193],[193,168,2,"詩悅網路","ShiYue Joy",3,1,3,194],[194,-1,2,"世紀華通","CHT",3,1,3,195],[195,-1,3,"搜狐","Sohu",3,1,3,196],[196,-1,3,"騰訊","Tencent",3,1,3,197],[197,-1,2,"星遊科技","XingYou",3,1,3,198],[198,-1,2,"游卡網路","Yokaverse",3,1,3,199],[199,-1,2,"蓋婭互娛","GAEA",3,1,3,200],[200,-1,2,"萌我愛網路","Meng52",3,1,3,201],[201,-1,2,"巴別時代","Babeltime",3,1,3,202],[202,203,2,"天梯互娛","172TT",3,1,3,203],[203,-1,2,"百奧家庭互動","Baitian",3,1,3,204],[204,139,11,"Bstation","",3,5,4,205],[205,208,18,"首旅集團","Beijing Tourism Group",3,3,4,206],[206,208,10,"中央軍事委員會","CMC",3,3,4,207],[207,208,7,"中國科學院","Chinese Academy Of Sciences",3,3,4,208],[208,-1,10,"中國共產黨","CCP",3,3,4,209],[209,173,2,"巨鳥多多工作室","Drodo Studio",3,3,3,210],[210,143,2,"易幻網路","Efun",3,1,3,211],[211,176,2,"FPX 電子競技俱樂部","FunPlus Phoneix",3,3,3,212],[212,213,2,"晶綺科技","GameDreamer",1,1,0,213],[213,-1,2,"隆中網路","GameSparcs",1,1,0,214],[214,9,2,"競舞娛樂","Garena",4,1,3,215],[215,193,2,"海南初晴","Hainan Chuqing",3,1,3,216],[216,241,2,"紅心網路","Hearts Net",1,1,3,217],[217,-1,5,"華為","Huawei",3,1,3,218],[218,210,2,"英旗互動娛樂","Inch",1,1,3,219],[219,140,2,"愛奇藝","iQiyi",3,1,3,220],[220,189,2,"艾玩天地","Iwplay World",1,1,3,221],[221,175,2,"捷遊軟件","Jieyou",3,1,3,222],[222,-1,2,"筋斗雲遊戲","",3,1,3,223],[223,176,2,"王者在線","KingsGroup",3,1,3,224],[224,202,2,"箜羽工作室","Koimi Studio",3,3,3,225],[225,139,2,"小萌科技","Komoe Game",1,1,4,226],[226,183,15,"庫卡","KUKA AG",4,1,4,227],[227,240,2,"移動怪獸","MobiMon",1,1,3,228],[228,167,2,"沐瞳科技","Moonton",3,1,3,229],[229,206,13,"國防科技大學","NUDT",3,3,4,230],[230,-1,17,"聯創永宣","New Margin",3,1,3,231],[231,232,17,"東方創業","Orient Enterprise",3,1,4,232],[232,208,6,"東方國際","Orient International",3,1,4,233],[233,181,2,"奧瑞吉","Original Games",1,1,3,234],[234,-1,2,"匯彩控股","Paradise Entertainment",2,1,0,235],[235,-1,2,"沛羽數位","Peiyu Digital",1,1,0,236],[236,213,2,"海淯遊戲","Poseidon Games",1,1,0,237],[237,196,2,"拳頭遊戲","Riot Games",4,1,3,238],[238,-1,17,"紅杉資本","Sequoia Capital",4,1,0,239],[239,238,17,"紅杉中國","Sequoia China",3,1,3,240],[240,194,2,"盛趣遊戲","Shenqu Games",3,1,3,241],[241,219,2,"天象互動","Skymoons",3,1,3,242],[242,133,2,"索尼互動娛樂","Sony Interactive Entertainment",4,1,0,243],[243,241,2,"成都露珠","Spring Game",3,1,3,244],[244,196,2,"超級細胞","Supercell Oy",4,1,3,245],[245,196,2,"天美工作室","TiMi Studio Group",3,1,3,246],[246,-1,14,"沃爾瑪","Walmart",4,1,0,247],[247,162,2,"萬達院線遊戲","Wanda Cinemas Games",3,1,3,248],[248,-1,2,"紫龍遊戲","Zlon Game",3,1,3,249]]