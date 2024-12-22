
			var db_item_codes = ["volkswagen","lamborghini","porsche","audi","garmin","greenpeace","muang-thai-chiang-mai-marathon","muang-thai-life-assurance","embark-studios","miside","indieark","electronic-arts","mirrors-edge-catalyst","ea-dice","imserious","marathon-game","the-finals","arc-raiders","kartrider-drift","want-want","cti-news","mover-games","hana-healthy","wupaochun","85-cafe","set-news","matea-tea","htc","united-daily-news","want-want-china-times-group","china-times","far-eastern-group","heavy-rain","detroit-become-human","quantic-dream","arknights-endfield","gryphline","ananta","naked-rain","pixel-overlord","starwave-networks","magic-house-interactive-entertainment","stargazer-games","stella-sora","neverness-to-everness","habby","cheetah-mobile","rayark","rapoo","ubisoft","trip-com","guillemot-brothers","techtronic-industries","milwaukee-tool","capital-group","thebox-vtuber","nexon","rog","blue-archive","hypergryph","arknights","long-cheng","yostar","sunborn","darkwinter-software","girls-frontline","hero-games","pwb-play","news-market","mundfish","xd-network","netease","hao123","gaijin-entertainment","fonglei-technology","efun-tw","dcard","changyou","tangren-media","sony","bungie","btg-home-inns","boltrend-games","bluepoch","mrbeast","ikulaoshi","bilibili","baidu","youthdew","mc-hotdog","boton","qihoo-360","tower-of-fantasy","smilegate","meridian-project","cover-corporation","asus","mamba-interactive","taiwan-peoples-party","stove","soundcloud","game-beans","dhgames","mahjong-meta","rolling-dice-labs","gamepanda","playcrab","qingci-games","sea","douyu","zte","fun-hope","reverse-1999","wanda-group","jd","alibaba","kuomintang","hololive","bytedance","37-interactive-entertainment","4399","chillyroom","ctrip","dpstorm","dragonest","eskyfun","forgame","funplus","g-bits","huayi-brothers-media","kingsoft","kuro-games","lilith-games","martian-game","midea","mobvista","nanshan-capital","ourpalm","pandada-studio","paper-games","perfect-world","r2-games","roshow","shimmer-games","shiyue-joy","sjhuatong","sohu","tencent","xingyou","yokaverse","gaea","meng52","babeltime","172tt","baitian","bstation","btg","central-military-commission","chinese-academy-of-sciences","chinese-communist-party","drodo-studio","efun","funplus-phoenix","gamedreamer","gamesparcs","garena","hainan-chuqing","hearts-net","huawei","inch-interactive-entertainment","iqiyi","iwplay-world","jieyou","kingdowin","kingsgroup","koimi-studio","komoe-game","kuka","mobimon","moonton","national-university-of-defense-technology","new-margin","orient-enterprise","orient-international","original-games","paradise-entertainment","peiyu-digital","poseidon-games","riot-games","sequoia-capital","sequoia-china","shenqu-games","skymoons","sony-interactive-entertainment","spgame","supercell","tiktok","timi-studio","walmart","wanda-cinemas-games","zlon-game"]
			var db_items      = [[0,-1,22,"福斯汽車","Volkswagen",4,1,0,1],[1,0,22,"藍寶堅尼","Lamborghini",4,1,4,2],[2,0,22,"保時捷","Porsche",4,1,1,3],[3,0,22,"奧迪","Audi",4,1,0,4],[4,-1,7,"台灣國際航電","Garmin",4,1,4,5],[5,-1,20,"綠色和平","Greenpeace",4,3,4,6],[6,-1,21,"清邁馬拉松","Chiang Mai Marathon",4,3,1,7],[7,-1,17,"泰國人壽保險公司","Muang Thai Life Assurance",4,1,0,8],[8,56,2,"Embark Studios","",4,1,4,9],[9,-1,9,"MiSide","",4,6,0,10],[10,-1,2,"獨立方舟","IndieArk",3,1,3,11],[11,-1,2,"美商藝電","Electronic Arts",4,1,1,12],[12,13,2,"靚影特務：關鍵催化","Mirror's Edge Catalyst",4,6,1,13],[13,11,2,"EA DICE","",4,1,1,14],[14,-1,1,"超認真少年","I'm Serious",1,2,1,15],[15,80,9,"馬拉松","Marathon",4,6,1,16],[16,8,9,"最終決戰","THE FINALS",4,6,4,17],[17,8,9,"ARC Raiders","",4,6,4,18],[18,56,9,"跑跑卡丁車：飄移","KartRider: Drift",4,6,4,19],[19,-1,19,"旺旺集團","Want Want",1,1,4,20],[20,29,11,"中天新聞","CTI News Channel",1,1,4,21],[21,-1,2,"魔塊遊戲","Mover Games",1,1,0,22],[22,-1,2,"花守海露希","花守へるし",1,2,1,23],[23,-1,19,"吳寶春麥方店","",1,1,4,24],[24,-1,19,"85度C","85C Daily Cafe",1,1,4,25],[25,-1,11,"三立新聞","SET News",1,1,2,26],[26,-1,19,"麻六茶","MATEA",1,1,4,27],[27,-1,7,"宏達電","HTC Corporation",1,1,4,28],[28,-1,11,"聯合報","United Daily News",1,1,0,29],[29,19,11,"旺旺中時媒體集團","Want Want China Times Group",1,1,4,30],[30,29,11,"中時新聞網","China Times",1,1,4,31],[31,-1,12,"遠東集團","Far Eastern Group",1,1,4,32],[32,34,9,"暴雨殺機","Heavy Rain",4,6,3,33],[33,34,9,"底特律：化身為人","Detroit: Become Human",4,6,3,34],[34,147,2,"Quantic Dream","",4,1,3,35],[35,59,9,"明日方舟：終末地","Arknights: Endfield",3,6,3,36],[36,59,2,"獅鷲邊境","GRYPHLINE",4,1,3,37],[37,38,9,"代號：無限大","ANANTA",3,6,3,38],[38,71,2,"Naked Rain","",3,3,3,39],[39,40,9,"魔王我不累","Pixel Overlord",3,6,0,40],[40,-1,2,"STARWAVE NET","",3,1,0,41],[41,-1,2,"魔法屋互動娛樂","Magic House Interactive Entertainment",1,1,2,42],[42,62,2,"Stargazer Games","",3,1,3,43],[43,42,9,"星塔旅人","Stella Sora",3,6,3,44],[44,140,9,"異環","Neverness to Everness",3,6,3,45],[45,-1,2,"海彼網路","Habby",3,1,3,46],[46,130,7,"獵豹移動","Cheetah Mobile",3,1,3,47],[47,-1,2,"雷亞遊戲","Rayark Inc.",1,1,3,48],[48,-1,4,"雷柏科技","RAPOO",3,1,4,49],[49,51,2,"育碧娛樂","Ubisoft Entertainment SA",4,1,4,50],[50,122,18,"Trip.com","",3,5,3,51],[51,-1,6,"Guillemot 家族","Guillemot Brothers",4,1,0,52],[52,-1,15,"創科實業","Techtronic Industries",2,1,0,53],[53,52,16,"美沃奇","Milwaukee Tool",4,1,4,54],[54,-1,17,"資本集團","Capital Group",4,1,0,55],[55,-1,2,"箱箱 The Box","",1,7,2,56],[56,-1,2,"樂線","Nexon",4,1,4,57],[57,96,4,"玩家國度","Republic of Gamers",1,7,4,58],[58,56,9,"蔚藍檔案","Blue Archive",4,6,4,59],[59,-1,2,"鷹角網絡","HYPERGRYPH",3,1,3,60],[60,59,9,"明日方舟","Arknights",3,6,3,61],[61,70,2,"龍成網路","Long Cheng",1,1,3,62],[62,-1,2,"悠星網路","Yostar",3,1,3,63],[63,-1,2,"散爆網路","Sunborn Network Technology",3,1,3,64],[64,63,2,"暗冬網路","Darkwinter Software",3,1,3,65],[65,63,9,"少女前線","Girls' Frontline",3,6,3,66],[66,-1,2,"英雄遊戲","Hero Games",3,1,3,67],[67,-1,2,"品玩邦藝術","PWB Play",1,1,0,68],[68,-1,11,"上下游新聞","News\u0026Market",1,1,1,69],[69,-1,2,"Mundfish","",4,1,3,70],[70,-1,2,"心動網路","X.D. Network",3,1,3,71],[71,-1,7,"網易","Netease",3,1,3,72],[72,87,3,"Hao123","",3,1,3,73],[73,150,2,"Gaijin Entertainment","",4,1,4,74],[74,-1,2,"風雷科技","Fonglei Technology",1,1,0,75],[75,169,2,"Efun遊戲平台","efuntw",1,5,3,76],[76,-1,3,"Dcard","",1,1,2,77],[77,146,2,"暢遊時代","Changyou",3,1,3,78],[78,-1,2,"唐人影視","Tangren Media",3,1,3,79],[79,-1,12,"索尼","Sony",4,1,0,80],[80,193,2,"Bungie","",4,1,1,81],[81,156,18,"首旅如家","BTG Home Inns",3,1,4,82],[82,71,2,"寶船遊戲","Boltrend Games",3,1,3,83],[83,-1,2,"深藍互動","Bluepoch",3,1,3,84],[84,-1,1,"MrBeast","",4,2,4,85],[85,-1,1,"Iku 老師","Ikulaoshi",4,2,1,86],[86,-1,11,"嗶哩嗶哩","Bilibili",3,1,4,87],[87,-1,3,"百度","Baidu",3,1,3,88],[88,-1,2,"朝露工作室","Youth Dew Games",3,1,3,89],[89,-1,1,"熱狗","MC HotDog",1,2,2,90],[90,-1,7,"寶通科技","Boton",3,1,3,91],[91,-1,7,"奇虎360","Qihoo 360",3,1,3,92],[92,140,9,"幻塔","Tower of Fantasy",3,6,3,93],[93,-1,2,"微笑之門","SmileGate",4,1,4,94],[94,-1,2,"子午計畫","Meridian Project",1,7,2,95],[95,-1,7,"Cover 株式會社","Cover Corporation",4,1,4,96],[96,-1,7,"華碩電腦","ASUSTeK Computer",1,1,4,97],[97,123,2,"曼巴互娛","Mamba Interactive",1,1,3,98],[98,-1,10,"台灣民眾黨","Taiwan People's Party",1,3,0,99],[99,93,2,"Stove","",4,5,4,100],[100,-1,11,"SoundCloud","",4,1,4,101],[101,200,2,"遊戲種子","Game Beans",1,1,4,102],[102,-1,2,"卓杭科技","DHGames",3,1,3,103],[103,104,9,"Mahjong Meta","",4,6,4,104],[104,-1,2,"Rolling Dice Labs","",4,1,3,105],[105,152,2,"熊貓遊戲","Game Panda",1,1,3,106],[106,137,2,"玩蟹科技","Playcrab",3,1,3,107],[107,-1,2,"青瓷數碼","Qingci Games",3,1,3,108],[108,-1,6,"冬海集團","Sea Limited",4,1,3,109],[109,-1,2,"鬥魚","Douyu",3,1,3,110],[110,-1,5,"中興通訊","ZTE",3,1,3,111],[111,82,2,"峰禾科技","FunHope",1,1,3,112],[112,83,9,"重返未來：1999","Reverse: 1999",3,6,3,113],[113,-1,6,"萬達集團","Wanda Group",3,1,3,114],[114,-1,14,"京東","JD.com",3,1,3,115],[115,-1,3,"阿里巴巴","Alibaba Group",3,1,3,116],[116,-1,10,"中國國民黨","Kuomintang",1,3,0,117],[117,95,2,"Hololive Production","",4,3,4,118],[118,-1,7,"字節跳動","ByteDance",3,1,3,119],[119,-1,2,"三七互娛","37 Games",3,1,3,120],[120,-1,2,"四三九九網路","4399",3,1,3,121],[121,-1,2,"涼屋遊戲","ChillyRoom",3,1,3,122],[122,-1,0,"攜程旅行","Ctrip",3,1,3,123],[123,-1,2,"龍拳風暴","DP.STORM",3,1,3,124],[124,-1,2,"龍淵網路","Dragonest",3,1,3,125],[125,-1,2,"天游網路","Eskyfun",3,1,3,126],[126,-1,2,"雲遊控股","Forgame",3,1,3,127],[127,-1,2,"趣加科技","FunPlus",3,1,3,128],[128,-1,2,"吉比特","G-bits",3,1,3,129],[129,-1,11,"華誼兄弟","Huayi Brothers Media",3,1,3,130],[130,-1,7,"金山軟件","Kingsoft",3,1,3,131],[131,-1,2,"庫洛遊戲","Kuro Games",3,1,3,132],[132,-1,2,"莉莉絲遊戲","Lilith Games",3,1,3,133],[133,-1,2,"火星人互動娛樂","Martian Game",3,1,3,134],[134,-1,16,"美的集團","Midea Group",3,1,3,135],[135,-1,7,"匯量科技","Mobvista",3,1,3,136],[136,-1,17,"南山資本","Nanshan Capital",3,1,3,137],[137,-1,2,"掌趣科技","Ourpalm",3,1,3,138],[138,-1,2,"炎魂網路","Pandada Studio",3,1,3,139],[139,-1,2,"疊紙遊戲","Paper Games",3,1,3,140],[140,-1,2,"完美世界","Perfect World",3,1,3,141],[141,-1,2,"燦和兄弟","R2 Games",3,1,3,142],[142,-1,15,"露笑集團","Roshow",3,1,3,143],[143,-1,2,"微光互動","Shimmer Games",3,1,3,144],[144,119,2,"詩悅網路","ShiYue Joy",3,1,3,145],[145,-1,2,"世紀華通","CHT",3,1,3,146],[146,-1,3,"搜狐","Sohu",3,1,3,147],[147,-1,3,"騰訊","Tencent",3,1,3,148],[148,-1,2,"星遊科技","XingYou",3,1,3,149],[149,-1,2,"游卡網路","Yokaverse",3,1,3,150],[150,-1,2,"蓋婭互娛","GAEA",3,1,3,151],[151,-1,2,"萌我愛網路","Meng52",3,1,3,152],[152,-1,2,"巴別時代","Babeltime",3,1,3,153],[153,154,2,"天梯互娛","172TT",3,1,3,154],[154,-1,2,"百奧家庭互動","Baitian",3,1,3,155],[155,86,11,"Bstation","",3,5,4,156],[156,159,18,"首旅集團","Beijing Tourism Group",3,3,4,157],[157,159,10,"中央軍事委員會","CMC",3,3,4,158],[158,159,7,"中國科學院","Chinese Academy Of Sciences",3,3,4,159],[159,-1,10,"中國共產黨","CCP",3,3,4,160],[160,124,2,"巨鳥多多工作室","Drodo Studio",3,3,3,161],[161,90,2,"易幻網路","Efun",3,1,3,162],[162,127,2,"FPX 電子競技俱樂部","FunPlus Phoneix",3,3,3,163],[163,164,2,"晶綺科技","GameDreamer",1,1,0,164],[164,-1,2,"隆中網路","GameSparcs",1,1,0,165],[165,108,2,"競舞娛樂","Garena",4,1,3,166],[166,144,2,"海南初晴","Hainan Chuqing",3,1,3,167],[167,192,2,"紅心網路","Hearts Net",1,1,3,168],[168,-1,5,"華為","Huawei",3,1,3,169],[169,161,2,"英旗互動娛樂","Inch",1,1,3,170],[170,87,2,"愛奇藝","iQiyi",3,1,3,171],[171,140,2,"艾玩天地","Iwplay World",1,1,3,172],[172,126,2,"捷遊軟件","Jieyou",3,1,3,173],[173,-1,2,"筋斗雲遊戲","",3,1,3,174],[174,127,2,"王者在線","KingsGroup",3,1,3,175],[175,153,2,"箜羽工作室","Koimi Studio",3,3,3,176],[176,86,2,"小萌科技","Komoe Game",1,1,4,177],[177,134,15,"庫卡","KUKA AG",4,1,4,178],[178,191,2,"移動怪獸","MobiMon",1,1,3,179],[179,118,2,"沐瞳科技","Moonton",3,1,3,180],[180,157,13,"國防科技大學","NUDT",3,3,4,181],[181,-1,17,"聯創永宣","New Margin",3,1,3,182],[182,183,17,"東方創業","Orient Enterprise",3,1,4,183],[183,159,6,"東方國際","Orient International",3,1,4,184],[184,132,2,"奧瑞吉","Original Games",1,1,3,185],[185,-1,2,"匯彩控股","Paradise Entertainment",2,1,0,186],[186,-1,2,"沛羽數位","Peiyu Digital",1,1,0,187],[187,164,2,"海淯遊戲","Poseidon Games",1,1,0,188],[188,147,2,"拳頭遊戲","Riot Games",4,1,3,189],[189,-1,17,"紅杉資本","Sequoia Capital",4,1,0,190],[190,189,17,"紅杉中國","Sequoia China",3,1,3,191],[191,145,2,"盛趣遊戲","Shenqu Games",3,1,3,192],[192,170,2,"天象互動","Skymoons",3,1,3,193],[193,79,2,"索尼互動娛樂","Sony Interactive Entertainment",4,1,0,194],[194,192,2,"成都露珠","Spring Game",3,1,3,195],[195,147,2,"超級細胞","Supercell Oy",4,1,3,196],[196,118,11,"抖音","TikTok",3,5,3,197],[197,147,2,"天美工作室","TiMi Studio Group",3,1,3,198],[198,-1,14,"沃爾瑪","Walmart",4,1,0,199],[199,113,2,"萬達院線遊戲","Wanda Cinemas Games",3,1,3,200],[200,-1,2,"紫龍遊戲","Zlon Game",3,1,3,201]]