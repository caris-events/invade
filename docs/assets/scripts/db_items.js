
			var db_item_codes = ["super-soco","aihuanhuan","gogoro","yadea","haojue","dachangjiang-group","kymco","gogoro-network","ionex","ducati","vmoto","louisa-coffee","fubon-financial-holding","shunwei-capital","hoto","udn-com","united-daily-news","united-daily-news-group","world-journal","taiwan-fixed-network","taiwan-mobile","momo","world-health-organization","united-nations","hsushiyuan","hana-healthy","path-of-exile-2","grinding-gear-games","path-of-exile","high-flyer","deepseek","cover-corporation","mk-power","yingsin-win","milwaukee-tool","funyours-technology","gwebtop","wind-fantasy-destiny","wind-fantasy-nexus","contract-of-fate","mover-games","woobest","g-bits","nexon","anker-innovations","soundcore","eufy","ingco-tools","aga-expo","starwave-networks","acerpure","acer","ht-tactical-industrial","game-beans","game-tree","tvbs","htc","set-news","igalia","lava-music","nestle","nespresso","paypal","mozilla-servo","mozilla","kaiyuanshe","str-network","huawei-cloud","tencent-cloud","milksha","mojang-studio","minecraft","jollibee-foods-corporation","shuangjiang","inkism-international","yifang-taiwan-fruit-tea","fukang-lianmeng-dang","meoof","princess-cant-defend","legend-of-phantom-beast-m","spgame","huobi","about-captial-management","greenwoods-asset-management","smilegate","msi","ikulaoshi","total-tools","amatsuki-mahjong","soul-of-dragon","shopee","sea","lotus-cars","geely","volvo","john-cena","sunnyhills","rayark","tamano-kedama","the-walt-disney-company","marvel-games","marvel-rivals","disney-interactive","disney-plus","netease","hot-star-large-fried-chicken","microsoft","zenless-zone-zero","harmonyos","weibo","genshin-impact","synnex","hewlett-packard","oppo","xiaomi","vnet","tiktok","mihoyo","bbk","21vianet-bluecloud","unity","tuanjie-engine","cognosphere","hoyoverse","dcard","asus","vivo","openatom-foundation","sina","bing","linkedin","honor","openharmony","pci-technology","china-mobile","thebox-vtuber","joker081888","blue-archive","peroperogames","greenpeace","xd-network","muse-dash","volkswagen","lamborghini","porsche","audi","garmin","muang-thai-chiang-mai-marathon","muang-thai-life-assurance","embark-studios","miside","indieark","electronic-arts","mirrors-edge-catalyst","ea-dice","imserious","marathon-game","the-finals","arc-raiders","kartrider-drift","want-want","cti-news","wupaochun","85-cafe","matea-tea","want-want-china-times-group","china-times","far-eastern-group","heavy-rain","detroit-become-human","quantic-dream","arknights-endfield","gryphline","ananta","naked-rain","pixel-overlord","magic-house-interactive-entertainment","stargazer-games","stella-sora","neverness-to-everness","habby","cheetah-mobile","rapoo","ubisoft","trip-com","guillemot-brothers","techtronic-industries","capital-group","rog","hypergryph","arknights","long-cheng","yostar","sunborn","darkwinter-software","girls-frontline","hero-games","pwb-play","news-market","mundfish","hao123","gaijin-entertainment","fonglei-technology","efun-tw","changyou","tangren-media","sony","bungie","btg-home-inns","boltrend-games","bluepoch","mrbeast","bilibili","baidu","youthdew","mc-hotdog","boton","qihoo-360","tower-of-fantasy","meridian-project","mamba-interactive","taiwan-peoples-party","stove","soundcloud","dhgames","mahjong-meta","rolling-dice-labs","gamepanda","playcrab","qingci-games","douyu","zte","fun-hope","reverse-1999","wanda-group","jd","alibaba","kuomintang","hololive","bytedance","37-interactive-entertainment","4399","chillyroom","ctrip","dpstorm","dragonest","eskyfun","forgame","funplus","huayi-brothers-media","kingsoft","kuro-games","lilith-games","martian-game","midea","mobvista","nanshan-capital","ourpalm","pandada-studio","paper-games","perfect-world","r2-games","roshow","shimmer-games","shiyue-joy","sjhuatong","sohu","tencent","xingyou","yokaverse","gaea","meng52","babeltime","172tt","baitian","bstation","btg","central-military-commission","chinese-academy-of-sciences","chinese-communist-party","drodo-studio","efun","funplus-phoenix","gamedreamer","gamesparcs","garena","hainan-chuqing","hearts-net","huawei","inch-interactive-entertainment","iqiyi","iwplay-world","jieyou","kingdowin","kingsgroup","koimi-studio","komoe-game","kuka","mobimon","moonton","national-university-of-defense-technology","new-margin","orient-enterprise","orient-international","original-games","paradise-entertainment","peiyu-digital","poseidon-games","riot-games","sequoia-capital","sequoia-china","shenqu-games","skymoons","sony-interactive-entertainment","supercell","timi-studio","walmart","wanda-cinemas-games","zlon-game"]
			var db_items      = [[0,-1,22,"Super Soco","速珂",3,1,3,1],[1,5,22,"換換","",3,1,3,2],[2,-1,22,"Gogoro","",1,1,2,3],[3,-1,22,"雅迪","Yadea",3,1,3,4],[4,-1,22,"豪爵","Haojue",3,1,3,5],[5,4,22,"大長江集團","",3,1,3,6],[6,-1,22,"KYMCO","光陽機車",1,1,2,7],[7,2,22,"Gogoro Network","",1,7,2,8],[8,6,22,"Ionex","",1,7,2,9],[9,145,22,"Ducati","杜卡迪",4,1,2,10],[10,-1,22,"Vmoto","",4,1,2,11],[11,-1,19,"路易莎咖啡","Louisa Coffee",1,1,0,12],[12,-1,17,"富邦金控","Fubon Financial Holding",1,1,2,13],[13,-1,17,"順為資本","Shunwei Capital",3,1,3,14],[14,-1,15,"小猴科技","HOTO",3,1,3,15],[15,16,11,"聯合新聞網","udn.com",1,1,1,16],[16,17,11,"聯合報","United Daily News",1,1,1,17],[17,-1,11,"聯合報系","United Daily News Group",1,1,1,18],[18,17,11,"世界日報","World Journal",1,1,1,19],[19,20,5,"台灣固網","Taiwan Fixed Network",1,1,2,20],[20,12,5,"台灣大哥大","Taiwan Mobile",1,1,2,21],[21,12,14,"MOMO","富邦媒體科技股份有限公司",1,1,2,22],[22,23,10,"世界衛生組織","World Health Organization",4,3,4,23],[23,-1,10,"聯合國","United Nations",4,3,4,24],[24,-1,1,"徐熙媛","大S",1,2,2,25],[25,-1,1,"花守海露希","花守へるし",1,2,1,26],[26,27,9,"流亡黯道 2","Path of Exile 2",4,6,3,27],[27,267,2,"Grinding Gear Games","",4,1,3,28],[28,27,9,"流亡黯道","Path of Exile",4,6,3,29],[29,-1,17,"幻方量化","High-Flyer Quant",3,1,4,30],[30,29,7,"深度求索","DeepSeek",3,1,4,31],[31,-1,7,"Cover 株式會社","Cover Corporation",4,1,4,32],[32,33,15,"MK-POWER","",1,7,2,33],[33,-1,15,"盈新五金","",1,1,2,34],[34,186,15,"美沃奇","Milwaukee Tool",4,1,4,35],[35,-1,2,"弘煜科技","FUNYOURS TECHNOLOGY",1,1,2,36],[36,196,2,"暢游雲端","GwebTop",3,1,3,37],[37,196,9,"風色幻想：命運傳說","Wind Fantasy: Destiny",3,6,3,38],[38,35,9,"風色幻想：NeXus","Wind Fantasy: NeXus",1,6,2,39],[39,41,9,"命運聖契","Contract of Fate",3,6,3,40],[40,-1,2,"魔塊遊戲","Mover Games",1,1,2,41],[41,-1,9,"極致遊戲","Woobest",3,1,3,42],[42,-1,2,"吉比特","G-bits",3,1,3,43],[43,-1,2,"樂線","Nexon",4,1,4,44],[44,-1,4,"Anker","安克創新科技",3,1,4,45],[45,44,4,"Soundcore","聲闊",3,7,4,46],[46,44,16,"eufy","悠飛",3,7,4,47],[47,-1,15,"盈合工具","INGCO Tools",3,1,4,48],[48,-1,2,"AGA 成人動漫展","",1,3,1,49],[49,-1,2,"STARWAVE NET","",3,1,0,50],[50,51,16,"Acerpure","宏碁智新",1,1,2,51],[51,-1,4,"Acer","宏碁",1,1,0,52],[52,-1,15,"浤泰戰術工業","HT Tactical Industrial Co.",1,1,0,53],[53,318,2,"遊戲種子","Game Beans",2,1,3,54],[54,318,2,"亦樹遊戲","Game Tree",1,1,3,55],[55,-1,11,"TVBS","",1,1,2,56],[56,-1,7,"宏達電","HTC Corporation",1,1,4,57],[57,-1,11,"三立新聞","SET News",1,1,2,58],[58,-1,7,"Igalia","",4,1,0,59],[59,-1,23,"拿火音樂","LAVA MUSIC",3,1,3,60],[60,-1,19,"雀巢","Nestlé",4,1,2,61],[61,60,19,"Nespresso","",4,1,2,62],[62,-1,17,"PayPal","",4,1,4,63],[63,58,8,"Servo","",4,4,0,64],[64,-1,3,"Mozilla","",4,1,0,65],[65,-1,3,"開源社","Kaiyuanshe",3,3,4,66],[66,-1,2,"薩泰爾娛樂","STR Network",1,1,2,67],[67,288,3,"華為雲","Huawei Cloud",3,5,3,68],[68,267,3,"騰訊雲","Tencent Cloud",3,5,3,69],[69,72,19,"迷客夏","Milksha",1,1,4,70],[70,106,2,"Mojang Studios","",4,1,4,71],[71,70,9,"當個創世神","Minecraft",4,6,4,72],[72,-1,19,"快樂蜂","Jollibee Foods Corporation",4,1,0,73],[73,74,19,"霜江茶行","Shuangjiang",1,1,4,74],[74,-1,19,"墨力國際","Inkism",1,1,4,75],[75,74,19,"一芳台灣水果茶","Yifang Taiwan Fruit Tea",1,1,4,76],[76,-1,10,"復康聯盟黨","",1,3,4,77],[77,-1,16,"覓凹","meoof",3,1,3,78],[78,-1,9,"公主守不了","Princess Can't Defend",3,6,3,79],[79,80,9,"幻獸傳說 M","Legend of Phantom Beast M",3,6,3,80],[80,312,2,"成都露珠","Spring Game",3,1,3,81],[81,82,17,"火幣","Huobi",3,1,4,82],[82,-1,17,"百域資本","About Capital Management",2,1,0,83],[83,-1,17,"景林資產","Greenwoods Asset Management Limited",3,1,3,84],[84,-1,2,"微笑之門","SmileGate",4,1,4,85],[85,-1,4,"微星科技","MSI",1,1,4,86],[86,-1,1,"Iku 老師","Ikulaoshi",4,2,1,87],[87,47,15,"TOTAL 工具","TOTAL Tools",3,1,4,88],[88,-1,9,"天月麻雀","Amatsuki Mahjong",3,6,3,89],[89,318,9,"龍魂旅人","Soul of Dragon",3,6,3,90],[90,91,14,"蝦皮購物","Shopee",4,5,3,91],[91,-1,6,"冬海集團","Sea Limited",4,1,3,92],[92,93,22,"蓮花汽車","Lotus Cars",4,1,4,93],[93,-1,22,"吉利汽車","Geely Automobile",3,1,4,94],[94,93,22,"Volvo","富豪汽車",4,1,4,95],[95,-1,1,"John Cena","約翰·希南",4,2,1,96],[96,-1,19,"微熱山丘","SunnyHills",1,1,4,97],[97,-1,2,"雷亞遊戲","Rayark Inc.",1,1,3,98],[98,-1,1,"玉之けだま","毛玉牛乳",4,2,4,99],[99,-1,2,"華特迪士尼","The Walt Disney Company",4,1,4,100],[100,102,9,"漫威遊戲","Marvel Games",4,1,4,101],[101,104,9,"漫威爭鋒","Marvel Rivals",3,6,3,102],[102,99,2,"迪士尼互動","Disney Interactive",4,1,4,103],[103,99,2,"Disney+","迪士尼+",4,5,4,104],[104,-1,7,"網易","Netease",3,1,3,105],[105,-1,19,"豪大大雞排","HOT-STAR Large Fried Chicken",1,1,4,106],[106,-1,7,"微軟","Microsoft",4,1,2,107],[107,117,9,"絕區零","Zenless Zone Zero",3,6,3,108],[108,288,8,"鴻蒙","HarmonyOS",3,4,3,109],[109,128,3,"微博","Weibo",3,5,3,110],[110,117,9,"原神","Genshin Impact",3,6,3,111],[111,-1,7,"聯強國際","Synnex",1,1,2,112],[112,-1,7,"HP","惠普",4,1,1,113],[113,-1,4,"OPPO","歐珀",3,1,3,114],[114,-1,4,"小米","Xiaomi",3,1,3,115],[115,-1,3,"世紀互聯","VNET",3,1,3,116],[116,239,11,"抖音","TikTok",3,5,3,117],[117,-1,2,"米哈遊","miHoYo",3,1,3,118],[118,-1,4,"步步高","BBK",3,1,3,119],[119,115,3,"世紀互聯藍雲","21Vianet BlueCloud",3,1,3,120],[120,-1,7,"Unity","",4,1,4,121],[121,120,8,"團結引擎","Tuanjie Engine",3,4,4,122],[122,117,2,"Cognosphere","識隙之城",4,1,3,123],[123,117,3,"HoYoverse","",3,5,3,124],[124,-1,3,"Dcard","",1,1,2,125],[125,-1,7,"華碩電腦","ASUSTeK Computer",1,1,4,126],[126,-1,4,"vivo","維沃",3,1,3,127],[127,-1,7,"開放原子開源基金會","OpenAtom Foundation",3,3,3,128],[128,-1,3,"新浪","Sina",3,1,3,129],[129,106,3,"Bing","必應",4,5,2,130],[130,106,3,"LinkedIn","領英",4,5,2,131],[131,279,4,"榮耀","Honor",3,1,4,132],[132,127,7,"OpenHarmony","",3,3,3,133],[133,-1,7,"佳都科技","PCI Technology",3,1,3,134],[134,-1,5,"中國移動","China Mobile",3,1,4,135],[135,-1,2,"箱箱 The Box","",1,7,2,136],[136,-1,1,"勾起你心中的惡","勾惡",1,2,1,137],[137,43,9,"蔚藍檔案","Blue Archive",4,6,4,138],[138,-1,2,"呸嘍呸嘍","PeroPeroGames",3,1,4,139],[139,-1,20,"綠色和平","Greenpeace",4,3,4,140],[140,-1,2,"心動網路","X.D. Network",3,1,4,141],[141,138,9,"喵斯快跑","Muse Dash",3,6,4,142],[142,-1,22,"福斯汽車","Volkswagen",4,1,0,143],[143,142,22,"藍寶堅尼","Lamborghini",4,1,4,144],[144,142,22,"保時捷","Porsche",4,1,1,145],[145,142,22,"奧迪","Audi",4,1,0,146],[146,-1,7,"台灣國際航電","Garmin",4,1,4,147],[147,-1,21,"清邁馬拉松","Chiang Mai Marathon",4,3,1,148],[148,-1,17,"泰國人壽保險公司","Muang Thai Life Assurance",4,1,0,149],[149,43,2,"Embark Studios","",4,1,4,150],[150,-1,9,"MiSide","",4,6,0,151],[151,-1,2,"獨立方舟","IndieArk",3,1,3,152],[152,-1,2,"美商藝電","Electronic Arts",4,1,1,153],[153,154,2,"靚影特務：關鍵催化","Mirror's Edge Catalyst",4,6,1,154],[154,152,2,"EA DICE","",4,1,1,155],[155,-1,1,"超認真少年","I'm Serious",1,2,1,156],[156,207,9,"馬拉松","Marathon",4,6,1,157],[157,149,9,"最終決戰","THE FINALS",4,6,4,158],[158,149,9,"ARC Raiders","",4,6,4,159],[159,43,9,"跑跑卡丁車：飄移","KartRider: Drift",4,6,4,160],[160,-1,19,"旺旺集團","Want Want",1,1,4,161],[161,165,11,"中天新聞","CTI News Channel",1,1,4,162],[162,-1,19,"吳寶春麥方店","",1,1,4,163],[163,-1,19,"85度C","85C Daily Cafe",1,1,4,164],[164,-1,19,"麻六茶","MATEA",1,1,4,165],[165,160,11,"旺旺中時媒體集團","Want Want China Times Group",1,1,4,166],[166,165,11,"中時新聞網","China Times",1,1,4,167],[167,-1,12,"遠東集團","Far Eastern Group",1,1,4,168],[168,170,9,"暴雨殺機","Heavy Rain",4,6,3,169],[169,170,9,"底特律：化身為人","Detroit: Become Human",4,6,3,170],[170,267,2,"Quantic Dream","",4,1,3,171],[171,189,9,"明日方舟：終末地","Arknights: Endfield",3,6,3,172],[172,189,2,"獅鷲邊境","GRYPHLINE",4,1,3,173],[173,174,9,"代號：無限大","ANANTA",3,6,3,174],[174,104,2,"Naked Rain","",3,3,3,175],[175,49,9,"魔王我不累","Pixel Overlord",3,6,0,176],[176,-1,2,"魔法屋互動娛樂","Magic House Interactive Entertainment",1,1,2,177],[177,192,2,"Stargazer Games","",3,1,3,178],[178,177,9,"星塔旅人","Stella Sora",3,6,3,179],[179,260,9,"異環","Neverness to Everness",3,6,3,180],[180,-1,2,"海彼網路","Habby",3,1,3,181],[181,250,7,"獵豹移動","Cheetah Mobile",3,1,3,182],[182,-1,4,"雷柏科技","RAPOO",3,1,4,183],[183,185,2,"育碧娛樂","Ubisoft Entertainment SA",4,1,4,184],[184,243,18,"Trip.com","",3,5,3,185],[185,-1,6,"Guillemot 家族","Guillemot Brothers",4,1,0,186],[186,-1,15,"創科實業","Techtronic Industries",2,1,0,187],[187,-1,17,"資本集團","Capital Group",4,1,0,188],[188,125,4,"玩家國度","Republic of Gamers",1,7,4,189],[189,-1,2,"鷹角網絡","HYPERGRYPH",3,1,3,190],[190,189,9,"明日方舟","Arknights",3,6,3,191],[191,140,2,"龍成網路","Long Cheng",1,1,4,192],[192,-1,2,"悠星網路","Yostar",3,1,3,193],[193,-1,2,"散爆網路","Sunborn Network Technology",3,1,3,194],[194,193,2,"暗冬網路","Darkwinter Software",3,1,3,195],[195,193,9,"少女前線","Girls' Frontline",3,6,3,196],[196,-1,2,"英雄遊戲","Hero Games",3,1,3,197],[197,-1,2,"品玩邦藝術","PWB Play",1,1,0,198],[198,-1,11,"上下游新聞","News\u0026Market",1,1,1,199],[199,-1,2,"Mundfish","",4,1,3,200],[200,213,3,"Hao123","",3,1,3,201],[201,270,2,"Gaijin Entertainment","",4,1,4,202],[202,-1,2,"風雷科技","Fonglei Technology",1,1,0,203],[203,289,2,"Efun遊戲平台","efuntw",1,5,3,204],[204,266,2,"暢遊時代","Changyou",3,1,3,205],[205,-1,2,"唐人影視","Tangren Media",3,1,3,206],[206,-1,12,"索尼","Sony",4,1,0,207],[207,313,2,"Bungie","",4,1,1,208],[208,276,18,"首旅如家","BTG Home Inns",3,1,4,209],[209,104,2,"寶船遊戲","Boltrend Games",3,1,3,210],[210,-1,2,"深藍互動","Bluepoch",3,1,3,211],[211,-1,1,"MrBeast","",4,2,4,212],[212,-1,11,"嗶哩嗶哩","Bilibili",3,1,4,213],[213,-1,3,"百度","Baidu",3,1,3,214],[214,-1,2,"朝露工作室","Youth Dew Games",3,1,3,215],[215,-1,1,"熱狗","MC HotDog",1,2,2,216],[216,-1,7,"寶通科技","Boton",3,1,3,217],[217,-1,7,"奇虎360","Qihoo 360",3,1,3,218],[218,260,9,"幻塔","Tower of Fantasy",3,6,3,219],[219,-1,2,"子午計畫","Meridian Project",1,7,2,220],[220,244,2,"曼巴互娛","Mamba Interactive",1,1,3,221],[221,-1,10,"台灣民眾黨","Taiwan People's Party",1,3,0,222],[222,84,2,"Stove","",4,5,4,223],[223,-1,11,"SoundCloud","",4,1,4,224],[224,-1,2,"卓杭科技","DHGames",3,1,3,225],[225,226,9,"Mahjong Meta","",4,6,4,226],[226,-1,2,"Rolling Dice Labs","",4,1,3,227],[227,272,2,"熊貓遊戲","Game Panda",1,1,3,228],[228,257,2,"玩蟹科技","Playcrab",3,1,3,229],[229,-1,2,"青瓷數碼","Qingci Games",3,1,3,230],[230,-1,2,"鬥魚","Douyu",3,1,3,231],[231,-1,5,"中興通訊","ZTE",3,1,3,232],[232,209,2,"峰禾科技","FunHope",1,1,3,233],[233,210,9,"重返未來：1999","Reverse: 1999",3,6,3,234],[234,-1,6,"萬達集團","Wanda Group",3,1,3,235],[235,-1,14,"京東","JD.com",3,1,3,236],[236,-1,3,"阿里巴巴","Alibaba Group",3,1,3,237],[237,-1,10,"中國國民黨","Kuomintang",1,3,0,238],[238,31,2,"Hololive Production","",4,3,4,239],[239,-1,7,"字節跳動","ByteDance",3,1,3,240],[240,-1,2,"三七互娛","37 Games",3,1,3,241],[241,-1,2,"四三九九網路","4399",3,1,3,242],[242,-1,2,"涼屋遊戲","ChillyRoom",3,1,3,243],[243,-1,0,"攜程旅行","Ctrip",3,1,3,244],[244,-1,2,"龍拳風暴","DP.STORM",3,1,3,245],[245,-1,2,"龍淵網路","Dragonest",3,1,3,246],[246,-1,2,"天游網路","Eskyfun",3,1,3,247],[247,-1,2,"雲遊控股","Forgame",3,1,3,248],[248,-1,2,"趣加科技","FunPlus",3,1,3,249],[249,-1,11,"華誼兄弟","Huayi Brothers Media",3,1,3,250],[250,-1,7,"金山軟件","Kingsoft",3,1,3,251],[251,-1,2,"庫洛遊戲","Kuro Games",3,1,3,252],[252,-1,2,"莉莉絲遊戲","Lilith Games",3,1,3,253],[253,-1,2,"火星人互動娛樂","Martian Game",3,1,3,254],[254,-1,16,"美的集團","Midea Group",3,1,3,255],[255,-1,7,"匯量科技","Mobvista",3,1,3,256],[256,-1,17,"南山資本","Nanshan Capital",3,1,3,257],[257,-1,2,"掌趣科技","Ourpalm",3,1,3,258],[258,-1,2,"炎魂網路","Pandada Studio",3,1,3,259],[259,-1,2,"疊紙遊戲","Paper Games",3,1,3,260],[260,-1,2,"完美世界","Perfect World",3,1,3,261],[261,-1,2,"燦和兄弟","R2 Games",3,1,3,262],[262,-1,15,"露笑集團","Roshow",3,1,3,263],[263,-1,2,"微光互動","Shimmer Games",3,1,3,264],[264,240,2,"詩悅網路","ShiYue Joy",3,1,3,265],[265,-1,2,"世紀華通","CHT",3,1,3,266],[266,-1,3,"搜狐","Sohu",3,1,3,267],[267,-1,3,"騰訊","Tencent",3,1,3,268],[268,-1,2,"星遊科技","XingYou",3,1,3,269],[269,-1,2,"游卡網路","Yokaverse",3,1,3,270],[270,-1,2,"蓋婭互娛","GAEA",3,1,3,271],[271,-1,2,"萌我愛網路","Meng52",3,1,3,272],[272,-1,2,"巴別時代","Babeltime",3,1,3,273],[273,274,2,"天梯互娛","172TT",3,1,3,274],[274,-1,2,"百奧家庭互動","Baitian",3,1,3,275],[275,212,11,"Bstation","",3,5,4,276],[276,279,18,"首旅集團","Beijing Tourism Group",3,3,4,277],[277,279,10,"中央軍事委員會","CMC",3,3,4,278],[278,279,7,"中國科學院","Chinese Academy Of Sciences",3,3,4,279],[279,-1,10,"中國共產黨","CCP",3,3,4,280],[280,245,2,"巨鳥多多工作室","Drodo Studio",3,3,3,281],[281,216,2,"易幻網路","Efun",3,1,3,282],[282,248,2,"FPX 電子競技俱樂部","FunPlus Phoneix",3,3,3,283],[283,284,2,"晶綺科技","GameDreamer",1,1,0,284],[284,-1,2,"隆中網路","GameSparcs",1,1,0,285],[285,91,2,"競舞娛樂","Garena",4,1,3,286],[286,264,2,"海南初晴","Hainan Chuqing",3,1,3,287],[287,312,2,"紅心網路","Hearts Net",1,1,3,288],[288,-1,5,"華為","Huawei",3,1,3,289],[289,281,2,"英旗互動娛樂","Inch",1,1,3,290],[290,213,2,"愛奇藝","iQiyi",3,1,3,291],[291,260,2,"艾玩天地","Iwplay World",1,1,3,292],[292,247,2,"捷遊軟件","Jieyou",3,1,3,293],[293,-1,2,"筋斗雲遊戲","",3,1,3,294],[294,248,2,"王者在線","KingsGroup",3,1,3,295],[295,273,2,"箜羽工作室","Koimi Studio",3,3,3,296],[296,212,2,"小萌科技","Komoe Game",1,1,4,297],[297,254,15,"庫卡","KUKA AG",4,1,4,298],[298,311,2,"移動怪獸","MobiMon",1,1,3,299],[299,239,2,"沐瞳科技","Moonton",3,1,3,300],[300,277,13,"國防科技大學","NUDT",3,3,4,301],[301,-1,17,"聯創永宣","New Margin",3,1,3,302],[302,303,17,"東方創業","Orient Enterprise",3,1,4,303],[303,279,6,"東方國際","Orient International",3,1,4,304],[304,252,2,"奧瑞吉","Original Games",1,1,3,305],[305,-1,2,"匯彩控股","Paradise Entertainment",2,1,0,306],[306,-1,2,"沛羽數位","Peiyu Digital",1,1,0,307],[307,284,2,"海淯遊戲","Poseidon Games",1,1,0,308],[308,267,2,"拳頭遊戲","Riot Games",4,1,3,309],[309,-1,17,"紅杉資本","Sequoia Capital",4,1,0,310],[310,309,17,"紅杉中國","Sequoia China",3,1,3,311],[311,265,2,"盛趣遊戲","Shenqu Games",3,1,3,312],[312,290,2,"天象互動","Skymoons",3,1,3,313],[313,206,2,"索尼互動娛樂","Sony Interactive Entertainment",4,1,0,314],[314,267,2,"超級細胞","Supercell Oy",4,1,3,315],[315,267,2,"天美工作室","TiMi Studio Group",3,1,3,316],[316,-1,14,"沃爾瑪","Walmart",4,1,0,317],[317,234,2,"萬達院線遊戲","Wanda Cinemas Games",3,1,3,318],[318,-1,2,"紫龍遊戲","Zlon Game",3,1,3,319]]