
			var db_item_codes = ["meoof","princess-cant-defend","legend-of-phantom-beast-m","spgame","huobi","about-captial-management","greenwoods-asset-management","smilegate","msi","ikulaoshi","game-tree","ingco-tools","total-tools","amatsuki-mahjong","game-beans","soul-of-dragon","shopee","sea","lotus-cars","geely","volvo","john-cena","sunnyhills","rayark","tamano-kedama","the-walt-disney-company","marvel-games","marvel-rivals","disney-interactive","disney-plus","netease","hot-star-large-fried-chicken","microsoft","zenless-zone-zero","harmonyos","weibo","genshin-impact","synnex","hewlett-packard","oppo","xiaomi","vnet","tiktok","mihoyo","bbk","21vianet-bluecloud","unity","tuanjie-engine","cognosphere","hoyoverse","dcard","asus","cover-corporation","vivo","openatom-foundation","sina","bing","linkedin","honor","openharmony","pci-technology","china-mobile","thebox-vtuber","joker081888","blue-archive","peroperogames","greenpeace","nexon","xd-network","muse-dash","volkswagen","lamborghini","porsche","audi","garmin","muang-thai-chiang-mai-marathon","muang-thai-life-assurance","embark-studios","miside","indieark","electronic-arts","mirrors-edge-catalyst","ea-dice","imserious","marathon-game","the-finals","arc-raiders","kartrider-drift","want-want","cti-news","mover-games","hana-healthy","wupaochun","85-cafe","set-news","matea-tea","htc","united-daily-news","want-want-china-times-group","china-times","far-eastern-group","heavy-rain","detroit-become-human","quantic-dream","arknights-endfield","gryphline","ananta","naked-rain","pixel-overlord","starwave-networks","magic-house-interactive-entertainment","stargazer-games","stella-sora","neverness-to-everness","habby","cheetah-mobile","rapoo","ubisoft","trip-com","guillemot-brothers","techtronic-industries","milwaukee-tool","capital-group","rog","hypergryph","arknights","long-cheng","yostar","sunborn","darkwinter-software","girls-frontline","hero-games","pwb-play","news-market","mundfish","hao123","gaijin-entertainment","fonglei-technology","efun-tw","changyou","tangren-media","sony","bungie","btg-home-inns","boltrend-games","bluepoch","mrbeast","bilibili","baidu","youthdew","mc-hotdog","boton","qihoo-360","tower-of-fantasy","meridian-project","mamba-interactive","taiwan-peoples-party","stove","soundcloud","dhgames","mahjong-meta","rolling-dice-labs","gamepanda","playcrab","qingci-games","douyu","zte","fun-hope","reverse-1999","wanda-group","jd","alibaba","kuomintang","hololive","bytedance","37-interactive-entertainment","4399","chillyroom","ctrip","dpstorm","dragonest","eskyfun","forgame","funplus","g-bits","huayi-brothers-media","kingsoft","kuro-games","lilith-games","martian-game","midea","mobvista","nanshan-capital","ourpalm","pandada-studio","paper-games","perfect-world","r2-games","roshow","shimmer-games","shiyue-joy","sjhuatong","sohu","tencent","xingyou","yokaverse","gaea","meng52","babeltime","172tt","baitian","bstation","btg","central-military-commission","chinese-academy-of-sciences","chinese-communist-party","drodo-studio","efun","funplus-phoenix","gamedreamer","gamesparcs","garena","hainan-chuqing","hearts-net","huawei","inch-interactive-entertainment","iqiyi","iwplay-world","jieyou","kingdowin","kingsgroup","koimi-studio","komoe-game","kuka","mobimon","moonton","national-university-of-defense-technology","new-margin","orient-enterprise","orient-international","original-games","paradise-entertainment","peiyu-digital","poseidon-games","riot-games","sequoia-capital","sequoia-china","shenqu-games","skymoons","sony-interactive-entertainment","supercell","timi-studio","walmart","wanda-cinemas-games","zlon-game"]
			var db_items      = [[0,-1,16,"覓凹","meoof",3,1,3,1],[1,-1,9,"公主守不了","Princess Can't Defend",3,6,3,2],[2,3,9,"幻獸傳說 M","Legend of Phantom Beast M",3,6,3,3],[3,248,2,"成都露珠","Spring Game",3,1,3,4],[4,5,17,"火幣","Huobi",3,1,4,5],[5,-1,17,"百域資本","About Capital Management",2,1,0,6],[6,-1,17,"景林資產","Greenwoods Asset Management Limited",3,1,3,7],[7,-1,2,"微笑之門","SmileGate",4,1,4,8],[8,-1,4,"微星科技","MSI",1,1,4,9],[9,-1,1,"Iku 老師","Ikulaoshi",4,2,1,10],[10,254,2,"亦樹遊戲","Game Tree",1,1,3,11],[11,-1,15,"盈合工具","INGCO Tools",3,1,4,12],[12,11,15,"TOTAL 工具","TOTAL Tools",3,1,4,13],[13,-1,9,"天月麻雀","Amatsuki Mahjong",3,6,3,14],[14,254,2,"遊戲種子","Game Beans",2,1,3,15],[15,254,9,"龍魂旅人","Soul of Dragon",3,6,3,16],[16,17,14,"蝦皮購物","Shopee",4,5,3,17],[17,-1,6,"冬海集團","Sea Limited",4,1,3,18],[18,19,22,"蓮花汽車","Lotus Cars",4,1,4,19],[19,-1,22,"吉利汽車","Geely Automobile",3,1,4,20],[20,19,22,"Volvo","富豪汽車",4,1,4,21],[21,-1,1,"John Cena","約翰·希南",4,2,1,22],[22,-1,19,"微熱山丘","SunnyHills",1,1,4,23],[23,-1,2,"雷亞遊戲","Rayark Inc.",1,1,3,24],[24,-1,1,"玉之けだま","毛玉牛乳",4,2,4,25],[25,-1,2,"華特迪士尼","The Walt Disney Company",4,1,4,26],[26,28,9,"漫威遊戲","Marvel Games",4,1,4,27],[27,30,9,"漫威爭鋒","Marvel Rivals",3,6,3,28],[28,25,2,"迪士尼互動","Disney Interactive",4,1,4,29],[29,25,2,"Disney+","迪士尼+",4,5,4,30],[30,-1,7,"網易","Netease",3,1,3,31],[31,-1,19,"豪大大雞排","HOT-STAR Large Fried Chicken",1,1,4,32],[32,-1,7,"微軟","Microsoft",4,1,2,33],[33,43,9,"絕區零","Zenless Zone Zero",3,6,3,34],[34,224,8,"鴻蒙","HarmonyOS",3,4,3,35],[35,55,3,"微博","Weibo",3,5,3,36],[36,43,9,"原神","Genshin Impact",3,6,3,37],[37,-1,7,"聯強國際","Synnex",1,1,2,38],[38,-1,7,"HP","惠普",4,1,1,39],[39,-1,4,"OPPO","歐珀",3,1,3,40],[40,-1,4,"小米","Xiaomi",3,1,3,41],[41,-1,3,"世紀互聯","VNET",3,1,3,42],[42,174,11,"抖音","TikTok",3,5,3,43],[43,-1,2,"米哈遊","miHoYo",3,1,3,44],[44,-1,4,"步步高","BBK",3,1,3,45],[45,41,3,"世紀互聯藍雲","21Vianet BlueCloud",3,1,3,46],[46,-1,7,"Unity","",4,1,4,47],[47,46,8,"團結引擎","Tuanjie Engine",3,4,4,48],[48,43,2,"Cognosphere","識隙之城",4,1,3,49],[49,43,3,"HoYoverse","",3,5,3,50],[50,-1,3,"Dcard","",1,1,2,51],[51,-1,7,"華碩電腦","ASUSTeK Computer",1,1,4,52],[52,-1,7,"Cover 株式會社","Cover Corporation",4,1,4,53],[53,-1,4,"vivo","維沃",3,1,3,54],[54,-1,7,"開放原子開源基金會","OpenAtom Foundation",3,3,3,55],[55,-1,3,"新浪","Sina",3,1,3,56],[56,32,3,"Bing","必應",4,5,2,57],[57,32,3,"LinkedIn","領英",4,5,2,58],[58,215,4,"榮耀","Honor",3,1,4,59],[59,54,7,"OpenHarmony","",3,3,3,60],[60,-1,7,"佳都科技","PCI Technology",3,1,3,61],[61,-1,5,"中國移動","China Mobile",3,1,4,62],[62,-1,2,"箱箱 The Box","",1,7,2,63],[63,-1,1,"勾起你心中的惡","勾惡",1,2,1,64],[64,67,9,"蔚藍檔案","Blue Archive",4,6,4,65],[65,-1,2,"呸嘍呸嘍","PeroPeroGames",3,1,4,66],[66,-1,20,"綠色和平","Greenpeace",4,3,4,67],[67,-1,2,"樂線","Nexon",4,1,4,68],[68,-1,2,"心動網路","X.D. Network",3,1,4,69],[69,65,9,"喵斯快跑","Muse Dash",3,6,4,70],[70,-1,22,"福斯汽車","Volkswagen",4,1,0,71],[71,70,22,"藍寶堅尼","Lamborghini",4,1,4,72],[72,70,22,"保時捷","Porsche",4,1,1,73],[73,70,22,"奧迪","Audi",4,1,0,74],[74,-1,7,"台灣國際航電","Garmin",4,1,4,75],[75,-1,21,"清邁馬拉松","Chiang Mai Marathon",4,3,1,76],[76,-1,17,"泰國人壽保險公司","Muang Thai Life Assurance",4,1,0,77],[77,67,2,"Embark Studios","",4,1,4,78],[78,-1,9,"MiSide","",4,6,0,79],[79,-1,2,"獨立方舟","IndieArk",3,1,3,80],[80,-1,2,"美商藝電","Electronic Arts",4,1,1,81],[81,82,2,"靚影特務：關鍵催化","Mirror's Edge Catalyst",4,6,1,82],[82,80,2,"EA DICE","",4,1,1,83],[83,-1,1,"超認真少年","I'm Serious",1,2,1,84],[84,142,9,"馬拉松","Marathon",4,6,1,85],[85,77,9,"最終決戰","THE FINALS",4,6,4,86],[86,77,9,"ARC Raiders","",4,6,4,87],[87,67,9,"跑跑卡丁車：飄移","KartRider: Drift",4,6,4,88],[88,-1,19,"旺旺集團","Want Want",1,1,4,89],[89,98,11,"中天新聞","CTI News Channel",1,1,4,90],[90,-1,2,"魔塊遊戲","Mover Games",1,1,0,91],[91,-1,2,"花守海露希","花守へるし",1,2,1,92],[92,-1,19,"吳寶春麥方店","",1,1,4,93],[93,-1,19,"85度C","85C Daily Cafe",1,1,4,94],[94,-1,11,"三立新聞","SET News",1,1,2,95],[95,-1,19,"麻六茶","MATEA",1,1,4,96],[96,-1,7,"宏達電","HTC Corporation",1,1,4,97],[97,-1,11,"聯合報","United Daily News",1,1,0,98],[98,88,11,"旺旺中時媒體集團","Want Want China Times Group",1,1,4,99],[99,98,11,"中時新聞網","China Times",1,1,4,100],[100,-1,12,"遠東集團","Far Eastern Group",1,1,4,101],[101,103,9,"暴雨殺機","Heavy Rain",4,6,3,102],[102,103,9,"底特律：化身為人","Detroit: Become Human",4,6,3,103],[103,203,2,"Quantic Dream","",4,1,3,104],[104,124,9,"明日方舟：終末地","Arknights: Endfield",3,6,3,105],[105,124,2,"獅鷲邊境","GRYPHLINE",4,1,3,106],[106,107,9,"代號：無限大","ANANTA",3,6,3,107],[107,30,2,"Naked Rain","",3,3,3,108],[108,109,9,"魔王我不累","Pixel Overlord",3,6,0,109],[109,-1,2,"STARWAVE NET","",3,1,0,110],[110,-1,2,"魔法屋互動娛樂","Magic House Interactive Entertainment",1,1,2,111],[111,127,2,"Stargazer Games","",3,1,3,112],[112,111,9,"星塔旅人","Stella Sora",3,6,3,113],[113,196,9,"異環","Neverness to Everness",3,6,3,114],[114,-1,2,"海彼網路","Habby",3,1,3,115],[115,186,7,"獵豹移動","Cheetah Mobile",3,1,3,116],[116,-1,4,"雷柏科技","RAPOO",3,1,4,117],[117,119,2,"育碧娛樂","Ubisoft Entertainment SA",4,1,4,118],[118,178,18,"Trip.com","",3,5,3,119],[119,-1,6,"Guillemot 家族","Guillemot Brothers",4,1,0,120],[120,-1,15,"創科實業","Techtronic Industries",2,1,0,121],[121,120,16,"美沃奇","Milwaukee Tool",4,1,4,122],[122,-1,17,"資本集團","Capital Group",4,1,0,123],[123,51,4,"玩家國度","Republic of Gamers",1,7,4,124],[124,-1,2,"鷹角網絡","HYPERGRYPH",3,1,3,125],[125,124,9,"明日方舟","Arknights",3,6,3,126],[126,68,2,"龍成網路","Long Cheng",1,1,4,127],[127,-1,2,"悠星網路","Yostar",3,1,3,128],[128,-1,2,"散爆網路","Sunborn Network Technology",3,1,3,129],[129,128,2,"暗冬網路","Darkwinter Software",3,1,3,130],[130,128,9,"少女前線","Girls' Frontline",3,6,3,131],[131,-1,2,"英雄遊戲","Hero Games",3,1,3,132],[132,-1,2,"品玩邦藝術","PWB Play",1,1,0,133],[133,-1,11,"上下游新聞","News\u0026Market",1,1,1,134],[134,-1,2,"Mundfish","",4,1,3,135],[135,148,3,"Hao123","",3,1,3,136],[136,206,2,"Gaijin Entertainment","",4,1,4,137],[137,-1,2,"風雷科技","Fonglei Technology",1,1,0,138],[138,225,2,"Efun遊戲平台","efuntw",1,5,3,139],[139,202,2,"暢遊時代","Changyou",3,1,3,140],[140,-1,2,"唐人影視","Tangren Media",3,1,3,141],[141,-1,12,"索尼","Sony",4,1,0,142],[142,249,2,"Bungie","",4,1,1,143],[143,212,18,"首旅如家","BTG Home Inns",3,1,4,144],[144,30,2,"寶船遊戲","Boltrend Games",3,1,3,145],[145,-1,2,"深藍互動","Bluepoch",3,1,3,146],[146,-1,1,"MrBeast","",4,2,4,147],[147,-1,11,"嗶哩嗶哩","Bilibili",3,1,4,148],[148,-1,3,"百度","Baidu",3,1,3,149],[149,-1,2,"朝露工作室","Youth Dew Games",3,1,3,150],[150,-1,1,"熱狗","MC HotDog",1,2,2,151],[151,-1,7,"寶通科技","Boton",3,1,3,152],[152,-1,7,"奇虎360","Qihoo 360",3,1,3,153],[153,196,9,"幻塔","Tower of Fantasy",3,6,3,154],[154,-1,2,"子午計畫","Meridian Project",1,7,2,155],[155,179,2,"曼巴互娛","Mamba Interactive",1,1,3,156],[156,-1,10,"台灣民眾黨","Taiwan People's Party",1,3,0,157],[157,7,2,"Stove","",4,5,4,158],[158,-1,11,"SoundCloud","",4,1,4,159],[159,-1,2,"卓杭科技","DHGames",3,1,3,160],[160,161,9,"Mahjong Meta","",4,6,4,161],[161,-1,2,"Rolling Dice Labs","",4,1,3,162],[162,208,2,"熊貓遊戲","Game Panda",1,1,3,163],[163,193,2,"玩蟹科技","Playcrab",3,1,3,164],[164,-1,2,"青瓷數碼","Qingci Games",3,1,3,165],[165,-1,2,"鬥魚","Douyu",3,1,3,166],[166,-1,5,"中興通訊","ZTE",3,1,3,167],[167,144,2,"峰禾科技","FunHope",1,1,3,168],[168,145,9,"重返未來：1999","Reverse: 1999",3,6,3,169],[169,-1,6,"萬達集團","Wanda Group",3,1,3,170],[170,-1,14,"京東","JD.com",3,1,3,171],[171,-1,3,"阿里巴巴","Alibaba Group",3,1,3,172],[172,-1,10,"中國國民黨","Kuomintang",1,3,0,173],[173,52,2,"Hololive Production","",4,3,4,174],[174,-1,7,"字節跳動","ByteDance",3,1,3,175],[175,-1,2,"三七互娛","37 Games",3,1,3,176],[176,-1,2,"四三九九網路","4399",3,1,3,177],[177,-1,2,"涼屋遊戲","ChillyRoom",3,1,3,178],[178,-1,0,"攜程旅行","Ctrip",3,1,3,179],[179,-1,2,"龍拳風暴","DP.STORM",3,1,3,180],[180,-1,2,"龍淵網路","Dragonest",3,1,3,181],[181,-1,2,"天游網路","Eskyfun",3,1,3,182],[182,-1,2,"雲遊控股","Forgame",3,1,3,183],[183,-1,2,"趣加科技","FunPlus",3,1,3,184],[184,-1,2,"吉比特","G-bits",3,1,3,185],[185,-1,11,"華誼兄弟","Huayi Brothers Media",3,1,3,186],[186,-1,7,"金山軟件","Kingsoft",3,1,3,187],[187,-1,2,"庫洛遊戲","Kuro Games",3,1,3,188],[188,-1,2,"莉莉絲遊戲","Lilith Games",3,1,3,189],[189,-1,2,"火星人互動娛樂","Martian Game",3,1,3,190],[190,-1,16,"美的集團","Midea Group",3,1,3,191],[191,-1,7,"匯量科技","Mobvista",3,1,3,192],[192,-1,17,"南山資本","Nanshan Capital",3,1,3,193],[193,-1,2,"掌趣科技","Ourpalm",3,1,3,194],[194,-1,2,"炎魂網路","Pandada Studio",3,1,3,195],[195,-1,2,"疊紙遊戲","Paper Games",3,1,3,196],[196,-1,2,"完美世界","Perfect World",3,1,3,197],[197,-1,2,"燦和兄弟","R2 Games",3,1,3,198],[198,-1,15,"露笑集團","Roshow",3,1,3,199],[199,-1,2,"微光互動","Shimmer Games",3,1,3,200],[200,175,2,"詩悅網路","ShiYue Joy",3,1,3,201],[201,-1,2,"世紀華通","CHT",3,1,3,202],[202,-1,3,"搜狐","Sohu",3,1,3,203],[203,-1,3,"騰訊","Tencent",3,1,3,204],[204,-1,2,"星遊科技","XingYou",3,1,3,205],[205,-1,2,"游卡網路","Yokaverse",3,1,3,206],[206,-1,2,"蓋婭互娛","GAEA",3,1,3,207],[207,-1,2,"萌我愛網路","Meng52",3,1,3,208],[208,-1,2,"巴別時代","Babeltime",3,1,3,209],[209,210,2,"天梯互娛","172TT",3,1,3,210],[210,-1,2,"百奧家庭互動","Baitian",3,1,3,211],[211,147,11,"Bstation","",3,5,4,212],[212,215,18,"首旅集團","Beijing Tourism Group",3,3,4,213],[213,215,10,"中央軍事委員會","CMC",3,3,4,214],[214,215,7,"中國科學院","Chinese Academy Of Sciences",3,3,4,215],[215,-1,10,"中國共產黨","CCP",3,3,4,216],[216,180,2,"巨鳥多多工作室","Drodo Studio",3,3,3,217],[217,151,2,"易幻網路","Efun",3,1,3,218],[218,183,2,"FPX 電子競技俱樂部","FunPlus Phoneix",3,3,3,219],[219,220,2,"晶綺科技","GameDreamer",1,1,0,220],[220,-1,2,"隆中網路","GameSparcs",1,1,0,221],[221,17,2,"競舞娛樂","Garena",4,1,3,222],[222,200,2,"海南初晴","Hainan Chuqing",3,1,3,223],[223,248,2,"紅心網路","Hearts Net",1,1,3,224],[224,-1,5,"華為","Huawei",3,1,3,225],[225,217,2,"英旗互動娛樂","Inch",1,1,3,226],[226,148,2,"愛奇藝","iQiyi",3,1,3,227],[227,196,2,"艾玩天地","Iwplay World",1,1,3,228],[228,182,2,"捷遊軟件","Jieyou",3,1,3,229],[229,-1,2,"筋斗雲遊戲","",3,1,3,230],[230,183,2,"王者在線","KingsGroup",3,1,3,231],[231,209,2,"箜羽工作室","Koimi Studio",3,3,3,232],[232,147,2,"小萌科技","Komoe Game",1,1,4,233],[233,190,15,"庫卡","KUKA AG",4,1,4,234],[234,247,2,"移動怪獸","MobiMon",1,1,3,235],[235,174,2,"沐瞳科技","Moonton",3,1,3,236],[236,213,13,"國防科技大學","NUDT",3,3,4,237],[237,-1,17,"聯創永宣","New Margin",3,1,3,238],[238,239,17,"東方創業","Orient Enterprise",3,1,4,239],[239,215,6,"東方國際","Orient International",3,1,4,240],[240,188,2,"奧瑞吉","Original Games",1,1,3,241],[241,-1,2,"匯彩控股","Paradise Entertainment",2,1,0,242],[242,-1,2,"沛羽數位","Peiyu Digital",1,1,0,243],[243,220,2,"海淯遊戲","Poseidon Games",1,1,0,244],[244,203,2,"拳頭遊戲","Riot Games",4,1,3,245],[245,-1,17,"紅杉資本","Sequoia Capital",4,1,0,246],[246,245,17,"紅杉中國","Sequoia China",3,1,3,247],[247,201,2,"盛趣遊戲","Shenqu Games",3,1,3,248],[248,226,2,"天象互動","Skymoons",3,1,3,249],[249,141,2,"索尼互動娛樂","Sony Interactive Entertainment",4,1,0,250],[250,203,2,"超級細胞","Supercell Oy",4,1,3,251],[251,203,2,"天美工作室","TiMi Studio Group",3,1,3,252],[252,-1,14,"沃爾瑪","Walmart",4,1,0,253],[253,169,2,"萬達院線遊戲","Wanda Cinemas Games",3,1,3,254],[254,-1,2,"紫龍遊戲","Zlon Game",3,1,3,255]]