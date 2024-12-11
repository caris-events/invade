
			var db_item_codes = ["pwb-play","news-market","mundfish","xd-network","netease","hao123","gaijin-entertainment","fonglei-technology","efun-tw","dcard","changyou","tangren-media","sony","bungie","btg-home-inns","boltrend-games","bluepoch","mrbeast","ikulaoshi","bilibili","baidu","youthdew","mc-hotdog","thebox-vtuber","boton","qihoo-360","tower-of-fantasy","smilegate","meridian-project","cover-corporation","asus","mamba-interactive","taiwan-peoples-party","stove","soundcloud","game-beans","dhgames","mahjong-meta","rolling-dice-labs","gamepanda","playcrab","qingci-games","sea","douyu","zte","fun-hope","reverse-1999","wanda-group","jd","alibaba","kuomintang","hololive","bytedance","37-interactive-entertainment","4399","cheetah_mobile","chillyroom","ctrip","dpstorm","dragonest","eskyfun","forgame","funplus","g-bits","habby","huayi-brothers-media","kingsoft","kuro-games","lilith-games","martian-game","midea","mobvista","nanshan-capital","ourpalm","pandada-studio","paper-games","perfect-world","r2-games","roshow","shimmer-games","shiyue-joy","sjhuatong","sohu","tencent","xingyou","yokaverse","gaea","meng52","babeltime","mover-games","172tt","baitian","bstation","btg","central-military-commission","chinese-academy-of-sciences","chinese-communist-party","drodo-studio","efun","funplus-phoenix","gamedreamer","gamesparcs","garena","hainan-chuqing","hearts-net","hero-games","huawei","inch-interactive-entertainment","iqiyi","iwplay-world","jieyou","kingdowin","kingsgroup","koimi-studio","komoe-game","kuka","long-cheng","mobimon","moonton","national-university-of-defense-technology","new-margin","orient-enterprise","orient-international","original-games","paradise-entertainment","peiyu-digital","poseidon-games","riot-games","rog","sequoia-capital","sequoia-china","shenqu-games","skymoons","sony-interactive-entertainment","spgame","supercell","tiktok","timi-studio","trip-com","walmart","wanda-cinemas-games","zlon-game"]
			var db_items      = [[0,-1,2,"品玩邦藝術","PWB Play",1,1,0,1],[1,-1,11,"上下游新聞","News\u0026Market",1,1,1,2],[2,-1,2,"Mundfish","",4,1,3,3],[3,-1,2,"心動網路","X.D. Network",3,1,4,4],[4,-1,7,"網易","Netease",3,1,4,5],[5,20,3,"Hao123","",3,1,4,6],[6,86,2,"Gaijin Entertainment","",4,1,4,7],[7,-1,2,"風雷科技","Fonglei Technology",1,1,0,8],[8,107,2,"Efun遊戲平台","efuntw",1,5,4,9],[9,-1,3,"Dcard","",1,1,2,10],[10,82,2,"暢遊時代","Changyou",3,1,4,11],[11,-1,2,"唐人影視","Tangren Media",3,1,4,12],[12,-1,12,"索尼","Sony",4,1,0,13],[13,133,2,"Bungie","",4,1,1,14],[14,93,18,"首旅如家","BTG Home Inns",3,1,4,15],[15,4,2,"寶船遊戲","Boltrend Games",3,1,4,16],[16,-1,2,"深藍互動","Bluepoch",3,1,4,17],[17,-1,1,"MrBeast","",4,2,4,18],[18,-1,1,"Iku 老師","Ikulaoshi",4,2,1,19],[19,-1,11,"嗶哩嗶哩","Bilibili",3,1,4,20],[20,-1,3,"百度","Baidu",3,1,4,21],[21,-1,2,"朝露工作室","Youth Dew Games",3,1,4,22],[22,-1,1,"熱狗","MC HotDog",1,2,2,23],[23,-1,2,"箱箱 The Box","The Box",1,7,2,24],[24,-1,7,"寶通科技","Boton",3,1,4,25],[25,-1,7,"奇虎360","Qihoo 360",3,1,4,26],[26,76,9,"幻塔","Tower of Fantasy",3,6,4,27],[27,-1,2,"微笑之門","SmileGate",4,1,4,28],[28,-1,2,"子午計畫","Meridian Project",1,7,2,29],[29,-1,7,"Cover 株式會社","Cover Corporation",4,1,4,30],[30,-1,7,"華碩電腦","ASUSTeK Computer",1,1,4,31],[31,58,2,"曼巴互娛","Mamba Interactive",1,1,4,32],[32,-1,10,"台灣民眾黨","Taiwan People's Party",1,3,0,33],[33,27,2,"Stove","",4,5,4,34],[34,-1,11,"SoundCloud","",4,1,4,35],[35,141,2,"遊戲種子","Game Beans",1,1,4,36],[36,-1,2,"卓杭科技","DHGames",3,1,4,37],[37,38,9,"Mahjong Meta","",4,6,4,38],[38,-1,2,"Rolling Dice Labs","",4,1,3,39],[39,88,2,"熊貓遊戲","Game Panda",1,1,4,40],[40,73,2,"玩蟹科技","Playcrab",3,1,4,41],[41,-1,2,"青瓷數碼","Qingci Games",3,1,4,42],[42,-1,6,"冬海集團","Sea Limited",4,1,3,43],[43,-1,2,"鬥魚","Douyu",3,1,4,44],[44,-1,5,"中興通訊","ZTE",3,1,4,45],[45,15,2,"峰禾科技","FunHope",1,1,4,46],[46,16,9,"重返未來：1999","Reverse: 1999",3,6,4,47],[47,-1,6,"萬達集團","Wanda Group",3,1,4,48],[48,-1,14,"京東","JD.com",3,1,4,49],[49,-1,3,"阿里巴巴","Alibaba Group",3,1,4,50],[50,-1,10,"中國國民黨","Kuomintang",1,3,0,51],[51,29,2,"Hololive Production","",4,3,4,52],[52,-1,7,"字節跳動","ByteDance",3,1,4,53],[53,-1,2,"三七互娛","37 Games",3,1,4,54],[54,-1,2,"四三九九網路","4399",3,1,4,55],[55,66,7,"獵豹移動","Cheetah Mobile",3,1,4,56],[56,-1,2,"涼屋遊戲","ChillyRoom",3,1,4,57],[57,-1,0,"攜程旅行","Ctrip",3,1,4,58],[58,-1,2,"龍拳風暴","DP.STORM",3,1,4,59],[59,-1,2,"龍淵網路","Dragonest",3,1,4,60],[60,-1,2,"天游網路","Eskyfun",3,1,4,61],[61,-1,2,"雲遊控股","Forgame",3,1,4,62],[62,-1,2,"趣加科技","FunPlus",3,1,4,63],[63,-1,2,"吉比特","G-bits",3,1,4,64],[64,-1,2,"海彼網路","Habby",3,1,4,65],[65,-1,11,"華誼兄弟","Huayi Brothers Media",3,1,4,66],[66,-1,7,"金山軟件","Kingsoft",3,1,4,67],[67,-1,2,"庫洛遊戲","Kuro Games",3,1,4,68],[68,-1,2,"莉莉絲遊戲","Lilith Games",3,1,4,69],[69,-1,2,"火星人互動娛樂","Martian Game",3,1,4,70],[70,-1,16,"美的集團","Midea Group",3,1,4,71],[71,-1,7,"匯量科技","Mobvista",3,1,4,72],[72,-1,17,"南山資本","Nanshan Capital",3,1,4,73],[73,-1,2,"掌趣科技","Ourpalm",3,1,4,74],[74,-1,2,"炎魂網路","Pandada Studio",3,1,4,75],[75,-1,2,"疊紙遊戲","Paper Games",3,1,4,76],[76,-1,2,"完美世界","Perfect World",3,1,4,77],[77,-1,2,"燦和兄弟","R2 Games",3,1,4,78],[78,-1,15,"露笑集團","Roshow",3,1,4,79],[79,-1,2,"微光互動","Shimmer Games",3,1,4,80],[80,53,2,"詩悅網路","ShiYue Joy",3,1,4,81],[81,-1,2,"世紀華通","CHT",3,1,4,82],[82,-1,3,"搜狐","Sohu",3,1,4,83],[83,-1,3,"騰訊","Tencent",3,1,4,84],[84,-1,2,"星遊科技","XingYou",3,1,4,85],[85,-1,2,"游卡網路","Yokaverse",3,1,4,86],[86,-1,2,"蓋婭互娛","GAEA",3,1,4,87],[87,-1,2,"萌我愛網路","Meng52",3,1,4,88],[88,-1,2,"巴別時代","Babeltime",3,1,4,89],[89,83,2,"魔塊遊戲","Mover Games",1,1,4,90],[90,91,2,"天梯互娛","172TT",3,1,4,91],[91,-1,2,"百奧家庭互動","Baitian",3,1,4,92],[92,19,11,"Bstation","",3,5,4,93],[93,96,18,"首旅集團","Beijing Tourism Group",3,3,4,94],[94,96,10,"中央軍事委員會","CMC",3,3,4,95],[95,96,7,"中國科學院","Chinese Academy Of Sciences",3,3,4,96],[96,-1,10,"中國共產黨","CCP",3,3,4,97],[97,59,2,"巨鳥多多工作室","Drodo Studio",3,3,4,98],[98,24,2,"易幻網路","Efun",3,1,4,99],[99,62,2,"FPX 電子競技俱樂部","FunPlus Phoneix",3,3,4,100],[100,101,2,"晶綺科技","GameDreamer",1,1,0,101],[101,-1,2,"隆中網路","GameSparcs",1,1,0,102],[102,42,2,"競舞娛樂","Garena",4,1,3,103],[103,80,2,"海南初晴","Hainan Chuqing",3,1,4,104],[104,132,2,"紅心網路","Hearts Net",1,1,4,105],[105,-1,2,"英雄遊戲","Hero Games",3,1,4,106],[106,-1,5,"華為","Huawei",3,1,4,107],[107,98,2,"英旗互動娛樂","Inch",1,1,4,108],[108,20,2,"愛奇藝","iQiyi",3,1,4,109],[109,76,2,"艾玩天地","Iwplay World",1,1,4,110],[110,61,2,"捷遊軟件","Jieyou",3,1,4,111],[111,-1,2,"筋斗雲遊戲","",3,1,4,112],[112,62,2,"王者在線","KingsGroup",3,1,4,113],[113,90,2,"箜羽工作室","Koimi Studio",3,3,4,114],[114,19,2,"小萌科技","Komoe Game",1,1,4,115],[115,70,15,"庫卡","KUKA AG",4,1,4,116],[116,3,2,"龍成網路","Long Cheng",1,1,4,117],[117,131,2,"移動怪獸","MobiMon",1,1,4,118],[118,52,2,"沐瞳科技","Moonton",3,1,4,119],[119,94,13,"國防科技大學","NUDT",3,3,4,120],[120,-1,17,"聯創永宣","New Margin",3,1,4,121],[121,122,17,"東方創業","Orient Enterprise",3,1,4,122],[122,96,6,"東方國際","Orient International",3,1,4,123],[123,68,2,"奧瑞吉","Original Games",1,1,4,124],[124,-1,2,"匯彩控股","Paradise Entertainment",2,1,0,125],[125,-1,2,"沛羽數位","Peiyu Digital",1,1,0,126],[126,101,2,"海淯遊戲","Poseidon Games",1,1,0,127],[127,83,2,"拳頭遊戲","Riot Games",4,1,4,128],[128,30,4,"玩家國度","Republic of Games",1,7,4,129],[129,-1,17,"紅杉資本","Sequoia Capital",4,1,0,130],[130,129,17,"紅杉中國","Sequoia China",3,1,4,131],[131,81,2,"盛趣遊戲","Shenqu Games",3,1,4,132],[132,108,2,"天象互動","Skymoons",3,1,4,133],[133,12,2,"索尼互動娛樂","Sony Interactive Entertainment",4,1,0,134],[134,132,2,"成都露珠","Spring Game",3,1,4,135],[135,83,2,"超級細胞","Supercell Oy",4,1,4,136],[136,52,11,"抖音","TikTok",3,5,4,137],[137,83,2,"天美工作室","TiMi Studio Group",3,1,4,138],[138,57,18,"Trip.com","",3,1,4,139],[139,-1,14,"沃爾瑪","Walmart",4,1,0,140],[140,47,2,"萬達院線遊戲","Wanda Cinemas Games",3,1,4,141],[141,-1,2,"紫龍遊戲","Zlon Game",3,1,4,142]]