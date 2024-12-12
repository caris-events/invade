
			var db_item_codes = ["guillemot-brothers","ubisoft","techtronic-industries","milwaukee-tool","capital-group","thebox-vtuber","nexon","rog","blue-archive","hypergryph","arknights","long-cheng","yostar","sunborn","darkwinter-software","girls-frontline","hero-games","pwb-play","news-market","mundfish","xd-network","netease","hao123","gaijin-entertainment","fonglei-technology","efun-tw","dcard","changyou","tangren-media","sony","bungie","btg-home-inns","boltrend-games","bluepoch","mrbeast","ikulaoshi","bilibili","baidu","youthdew","mc-hotdog","boton","qihoo-360","tower-of-fantasy","smilegate","meridian-project","cover-corporation","asus","mamba-interactive","taiwan-peoples-party","stove","soundcloud","game-beans","dhgames","mahjong-meta","rolling-dice-labs","gamepanda","playcrab","qingci-games","sea","douyu","zte","fun-hope","reverse-1999","wanda-group","jd","alibaba","kuomintang","hololive","bytedance","37-interactive-entertainment","4399","cheetah_mobile","chillyroom","ctrip","dpstorm","dragonest","eskyfun","forgame","funplus","g-bits","habby","huayi-brothers-media","kingsoft","kuro-games","lilith-games","martian-game","midea","mobvista","nanshan-capital","ourpalm","pandada-studio","paper-games","perfect-world","r2-games","roshow","shimmer-games","shiyue-joy","sjhuatong","sohu","tencent","xingyou","yokaverse","gaea","meng52","babeltime","mover-games","172tt","baitian","bstation","btg","central-military-commission","chinese-academy-of-sciences","chinese-communist-party","drodo-studio","efun","funplus-phoenix","gamedreamer","gamesparcs","garena","hainan-chuqing","hearts-net","huawei","inch-interactive-entertainment","iqiyi","iwplay-world","jieyou","kingdowin","kingsgroup","koimi-studio","komoe-game","kuka","mobimon","moonton","national-university-of-defense-technology","new-margin","orient-enterprise","orient-international","original-games","paradise-entertainment","peiyu-digital","poseidon-games","riot-games","sequoia-capital","sequoia-china","shenqu-games","skymoons","sony-interactive-entertainment","spgame","supercell","tiktok","timi-studio","trip-com","walmart","wanda-cinemas-games","zlon-game"]
			var db_items      = [[0,-1,6,"Guillemot 家族","Guillemot Brothers",4,1,0,1],[1,0,2,"育碧娛樂","Ubisoft Entertainment SA",4,1,4,2],[2,-1,15,"創科實業","Techtronic Industries",2,1,0,3],[3,2,16,"美沃奇","Milwaukee Tool",4,1,4,4],[4,-1,17,"資本集團","Capital Group",4,1,0,5],[5,-1,2,"箱箱 The Box","",1,7,2,6],[6,-1,2,"樂線","Nexon",4,1,4,7],[7,46,4,"玩家國度","Republic of Gamers",1,7,4,8],[8,6,9,"蔚藍檔案","Blue Archive",4,6,4,9],[9,-1,2,"鷹角網絡","HYPERGRYPH",3,1,3,10],[10,9,9,"明日方舟","Arknights",3,6,3,11],[11,20,2,"龍成網路","Long Cheng",1,1,3,12],[12,-1,2,"悠星網路","Yostar",3,1,3,13],[13,-1,2,"散爆網路","Sunborn Network Technology",3,1,3,14],[14,13,2,"暗冬網路","Darkwinter Software",3,1,3,15],[15,13,9,"少女前線","Girls' Frontline",3,6,3,16],[16,-1,2,"英雄遊戲","Hero Games",3,1,3,17],[17,-1,2,"品玩邦藝術","PWB Play",1,1,0,18],[18,-1,11,"上下游新聞","News\u0026Market",1,1,1,19],[19,-1,2,"Mundfish","",4,1,3,20],[20,-1,2,"心動網路","X.D. Network",3,1,3,21],[21,-1,7,"網易","Netease",3,1,3,22],[22,37,3,"Hao123","",3,1,3,23],[23,102,2,"Gaijin Entertainment","",4,1,4,24],[24,-1,2,"風雷科技","Fonglei Technology",1,1,0,25],[25,122,2,"Efun遊戲平台","efuntw",1,5,3,26],[26,-1,3,"Dcard","",1,1,2,27],[27,98,2,"暢遊時代","Changyou",3,1,3,28],[28,-1,2,"唐人影視","Tangren Media",3,1,3,29],[29,-1,12,"索尼","Sony",4,1,0,30],[30,146,2,"Bungie","",4,1,1,31],[31,109,18,"首旅如家","BTG Home Inns",3,1,4,32],[32,21,2,"寶船遊戲","Boltrend Games",3,1,3,33],[33,-1,2,"深藍互動","Bluepoch",3,1,3,34],[34,-1,1,"MrBeast","",4,2,4,35],[35,-1,1,"Iku 老師","Ikulaoshi",4,2,1,36],[36,-1,11,"嗶哩嗶哩","Bilibili",3,1,4,37],[37,-1,3,"百度","Baidu",3,1,3,38],[38,-1,2,"朝露工作室","Youth Dew Games",3,1,3,39],[39,-1,1,"熱狗","MC HotDog",1,2,2,40],[40,-1,7,"寶通科技","Boton",3,1,3,41],[41,-1,7,"奇虎360","Qihoo 360",3,1,3,42],[42,92,9,"幻塔","Tower of Fantasy",3,6,3,43],[43,-1,2,"微笑之門","SmileGate",4,1,4,44],[44,-1,2,"子午計畫","Meridian Project",1,7,2,45],[45,-1,7,"Cover 株式會社","Cover Corporation",4,1,4,46],[46,-1,7,"華碩電腦","ASUSTeK Computer",1,1,4,47],[47,74,2,"曼巴互娛","Mamba Interactive",1,1,3,48],[48,-1,10,"台灣民眾黨","Taiwan People's Party",1,3,0,49],[49,43,2,"Stove","",4,5,4,50],[50,-1,11,"SoundCloud","",4,1,4,51],[51,154,2,"遊戲種子","Game Beans",1,1,4,52],[52,-1,2,"卓杭科技","DHGames",3,1,3,53],[53,54,9,"Mahjong Meta","",4,6,4,54],[54,-1,2,"Rolling Dice Labs","",4,1,3,55],[55,104,2,"熊貓遊戲","Game Panda",1,1,3,56],[56,89,2,"玩蟹科技","Playcrab",3,1,3,57],[57,-1,2,"青瓷數碼","Qingci Games",3,1,3,58],[58,-1,6,"冬海集團","Sea Limited",4,1,3,59],[59,-1,2,"鬥魚","Douyu",3,1,3,60],[60,-1,5,"中興通訊","ZTE",3,1,3,61],[61,32,2,"峰禾科技","FunHope",1,1,3,62],[62,33,9,"重返未來：1999","Reverse: 1999",3,6,3,63],[63,-1,6,"萬達集團","Wanda Group",3,1,3,64],[64,-1,14,"京東","JD.com",3,1,3,65],[65,-1,3,"阿里巴巴","Alibaba Group",3,1,3,66],[66,-1,10,"中國國民黨","Kuomintang",1,3,0,67],[67,45,2,"Hololive Production","",4,3,4,68],[68,-1,7,"字節跳動","ByteDance",3,1,3,69],[69,-1,2,"三七互娛","37 Games",3,1,3,70],[70,-1,2,"四三九九網路","4399",3,1,3,71],[71,82,7,"獵豹移動","Cheetah Mobile",3,1,3,72],[72,-1,2,"涼屋遊戲","ChillyRoom",3,1,3,73],[73,-1,0,"攜程旅行","Ctrip",3,1,3,74],[74,-1,2,"龍拳風暴","DP.STORM",3,1,3,75],[75,-1,2,"龍淵網路","Dragonest",3,1,3,76],[76,-1,2,"天游網路","Eskyfun",3,1,3,77],[77,-1,2,"雲遊控股","Forgame",3,1,3,78],[78,-1,2,"趣加科技","FunPlus",3,1,3,79],[79,-1,2,"吉比特","G-bits",3,1,3,80],[80,-1,2,"海彼網路","Habby",3,1,3,81],[81,-1,11,"華誼兄弟","Huayi Brothers Media",3,1,3,82],[82,-1,7,"金山軟件","Kingsoft",3,1,3,83],[83,-1,2,"庫洛遊戲","Kuro Games",3,1,3,84],[84,-1,2,"莉莉絲遊戲","Lilith Games",3,1,3,85],[85,-1,2,"火星人互動娛樂","Martian Game",3,1,3,86],[86,-1,16,"美的集團","Midea Group",3,1,3,87],[87,-1,7,"匯量科技","Mobvista",3,1,3,88],[88,-1,17,"南山資本","Nanshan Capital",3,1,3,89],[89,-1,2,"掌趣科技","Ourpalm",3,1,3,90],[90,-1,2,"炎魂網路","Pandada Studio",3,1,3,91],[91,-1,2,"疊紙遊戲","Paper Games",3,1,3,92],[92,-1,2,"完美世界","Perfect World",3,1,3,93],[93,-1,2,"燦和兄弟","R2 Games",3,1,3,94],[94,-1,15,"露笑集團","Roshow",3,1,3,95],[95,-1,2,"微光互動","Shimmer Games",3,1,3,96],[96,69,2,"詩悅網路","ShiYue Joy",3,1,3,97],[97,-1,2,"世紀華通","CHT",3,1,3,98],[98,-1,3,"搜狐","Sohu",3,1,3,99],[99,-1,3,"騰訊","Tencent",3,1,3,100],[100,-1,2,"星遊科技","XingYou",3,1,3,101],[101,-1,2,"游卡網路","Yokaverse",3,1,3,102],[102,-1,2,"蓋婭互娛","GAEA",3,1,3,103],[103,-1,2,"萌我愛網路","Meng52",3,1,3,104],[104,-1,2,"巴別時代","Babeltime",3,1,3,105],[105,99,2,"魔塊遊戲","Mover Games",1,1,3,106],[106,107,2,"天梯互娛","172TT",3,1,3,107],[107,-1,2,"百奧家庭互動","Baitian",3,1,3,108],[108,36,11,"Bstation","",3,5,4,109],[109,112,18,"首旅集團","Beijing Tourism Group",3,3,4,110],[110,112,10,"中央軍事委員會","CMC",3,3,4,111],[111,112,7,"中國科學院","Chinese Academy Of Sciences",3,3,4,112],[112,-1,10,"中國共產黨","CCP",3,3,4,113],[113,75,2,"巨鳥多多工作室","Drodo Studio",3,3,3,114],[114,40,2,"易幻網路","Efun",3,1,3,115],[115,78,2,"FPX 電子競技俱樂部","FunPlus Phoneix",3,3,3,116],[116,117,2,"晶綺科技","GameDreamer",1,1,0,117],[117,-1,2,"隆中網路","GameSparcs",1,1,0,118],[118,58,2,"競舞娛樂","Garena",4,1,3,119],[119,96,2,"海南初晴","Hainan Chuqing",3,1,3,120],[120,145,2,"紅心網路","Hearts Net",1,1,3,121],[121,-1,5,"華為","Huawei",3,1,3,122],[122,114,2,"英旗互動娛樂","Inch",1,1,3,123],[123,37,2,"愛奇藝","iQiyi",3,1,3,124],[124,92,2,"艾玩天地","Iwplay World",1,1,3,125],[125,77,2,"捷遊軟件","Jieyou",3,1,3,126],[126,-1,2,"筋斗雲遊戲","",3,1,3,127],[127,78,2,"王者在線","KingsGroup",3,1,3,128],[128,106,2,"箜羽工作室","Koimi Studio",3,3,3,129],[129,36,2,"小萌科技","Komoe Game",1,1,4,130],[130,86,15,"庫卡","KUKA AG",4,1,4,131],[131,144,2,"移動怪獸","MobiMon",1,1,3,132],[132,68,2,"沐瞳科技","Moonton",3,1,3,133],[133,110,13,"國防科技大學","NUDT",3,3,4,134],[134,-1,17,"聯創永宣","New Margin",3,1,3,135],[135,136,17,"東方創業","Orient Enterprise",3,1,4,136],[136,112,6,"東方國際","Orient International",3,1,4,137],[137,84,2,"奧瑞吉","Original Games",1,1,3,138],[138,-1,2,"匯彩控股","Paradise Entertainment",2,1,0,139],[139,-1,2,"沛羽數位","Peiyu Digital",1,1,0,140],[140,117,2,"海淯遊戲","Poseidon Games",1,1,0,141],[141,99,2,"拳頭遊戲","Riot Games",4,1,3,142],[142,-1,17,"紅杉資本","Sequoia Capital",4,1,0,143],[143,142,17,"紅杉中國","Sequoia China",3,1,3,144],[144,97,2,"盛趣遊戲","Shenqu Games",3,1,3,145],[145,123,2,"天象互動","Skymoons",3,1,3,146],[146,29,2,"索尼互動娛樂","Sony Interactive Entertainment",4,1,0,147],[147,145,2,"成都露珠","Spring Game",3,1,3,148],[148,99,2,"超級細胞","Supercell Oy",4,1,3,149],[149,68,11,"抖音","TikTok",3,5,3,150],[150,99,2,"天美工作室","TiMi Studio Group",3,1,3,151],[151,73,18,"Trip.com","",3,1,3,152],[152,-1,14,"沃爾瑪","Walmart",4,1,0,153],[153,63,2,"萬達院線遊戲","Wanda Cinemas Games",3,1,3,154],[154,-1,2,"紫龍遊戲","Zlon Game",3,1,3,155]]