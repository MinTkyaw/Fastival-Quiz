// questions.js
const questions = [
  {
    question: "Japan မှာကျင်းပလေ့ရှိတဲ့ ”Hanami” ဆိုတာဘာပွဲလဲ?",
    options: ["မီးရှူးမီးပန်းပွဲ ", "ချယ်ရီပန်းကြည့်ပွဲ", "ဂျပန်အစားအစာပြပွဲ", "လှေလှော်ပွဲ"],
    image: "img/hanami.webp",
    correctAnswer: "ချယ်ရီပန်းကြည့်ပွဲ"
  },
  {
    question: "ဂျပန်နိုင်ငံရဲ့ငွေစနစ်ကဘာလဲ?",
    options: ["Yen", "Dollar", "Euro", "Won"],
     image: "img/yen.webp",
    correctAnswer: "Yen"
  },
  {
    question: "Kimono” ဆိုတာဘာလဲ?",
    options: ["အိမ်အလှဆင်ပစ္စည်း", "ဟင်းလျာနာမည်", "ဂျပန်ရိုးရာဝတ်စုံ ", "အသုံးအဆောင်ပစ္စည်း"],
     image: "img/kimono.jpg",
    correctAnswer: "ဂျပန်ရိုးရာဝတ်စုံ "
  },
  {
    question: "တိုကျိုတာဝါ ကဘာနဲ့ဆင်တူလဲ?",
    options: ["အီဖယ်တာဝါ", "သံဗူးပုံစံ", "ဒိုရေမွန်နဖူး", "ရေဗူးပုံစံ"],
    image:"img/tokyoTower.jpg",
    correctAnswer: "အီဖယ်တာဝါ"
  },
  {
    question: "Japan နိုင်ငံရဲ့မြို့တော်ကဘာလဲ?",
    options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
    image:"img/tokyo.webp",
    correctAnswer: "Tokyo"
  },
  {
    question: "Sushiက ဘယ်နိုင်ငံရဲ့အစားစာလဲ?",
    options: ["Japan", "China", "Thailand", "Korea"],
    image:"img/sushi.jpeg",
    correctAnswer: "Japan"
  },
   {
    question: "Samurai ဆိုတာဘာလဲ?",
    options: ["သီချင်းနာမည်", "မင်းသားနာမည်", "ရှေးခေတ်စစ်သည်  ", "Anime ဇာတ်ကောင်နာမည်"],
    image:"img/samurai.jpg",
    correctAnswer: "ရှေးခေတ်စစ်သည်  "
  },
   {
    question: "Origami” ဆိုတာဘာလဲ?",
    options: ["စက္ကူခွဲခြမ်းစိတ်ဖြာခြင်း", "စက္ကူဖြင့်အနုပညာဖန်တီးခြင်း", "စက္ကူညှပ်ခြင်း ", "စက္ကူလိပ်ခြင်း"],
    image:"img/origami.jpg",
    correctAnswer: "စက္ကူဖြင့်အနုပညာဖန်တီးခြင်း"
  },
  {
    question: "'Manga' ဆိုတာဘာလဲ?",
    options: ["အမြန်ဖတ်ရတဲ့စာအုပ်", "ဂျပန်ရဲ့ Comic  Book", "Doraemon လုပ်ငန်းနာမည်", "ကွန်ပြူတာဗိုင်းရပ်အမျိုးအစား"],
    image:"img/manga.jpg",
    correctAnswer: "ဂျပန်ရဲ့ Comic  Book"
  },
  {
    question: "ဂျပန်တွေဘာလို့ ‘Mask’ ကို ဝတ်ဆင်လေ့ရှိကြတာလဲ? ",
    options: ["မျက်နှာကိုမမြင်စေရန်", "မိမိအားမမှတ်မိစေရန်", "မလှတာကိုမမြင်စေရန်", "ရောဂါပိုးမွှားမကူးစက်စေရန်"],
    image:"img/mask.jpg",
    correctAnswer: "ရောဂါပိုးမွှားမကူးစက်စေရန်"
  },
  {
    question: "ဂျပန်မှာဘယ်လိုအစားအစာကို ‘Bento’လို့ခေါ်လဲ?",
    options: ["အသင့်စားခေါက်ဆွဲ", "မုန့်ပဲသရေစာ", "စနစ်တကျထုတ်ပိုးထားသောထမင်းဗူး", "တစ်ခါသုံးပန်ကန်"],
    image:"img/bento.jpg",
    correctAnswer: "စနစ်တကျထုတ်ပိုးထားသောထမင်းဗူး"
  },
  {
    question: "‘Takoyaki’ ဆိုတာဘာလဲ?",
    options: ["Octopus ball", "ကြက်ဥ", "‌ရေခဲမုန့် ", "Fishball"],
    image:"img/takoyaki.jpg",
    correctAnswer: "Octopus ball"
  },
  {
    question: "ဂျပန်လူမျိုးတွေ ထမင်းစားရင် ဘယ်အရာကို အဓိကထားအသုံးပြုလဲ?",
    options: ["ဇွန်းခရင်း", "တူ", "လက် ", "ယောင်းမ "],
    image:"img/chopStick.jpg",
    correctAnswer: "တူ"
  },
  {
    question: "ဂျပန်မှာ အမြင့်ဆုံးတောင်က ဘယ်တောင်လဲ?",
    options: ["တာကာအိုတောင်", "အိုဆာကာတောင်", "ဖူဂျီတောင် ", "နစ်ကိုတောင် "],
    image:"img/fuji.jpg",
    correctAnswer: "ဖူဂျီတောင် "
  },
  {
    question: "ဂျပန်နိုင်ငံရဲ့  ‘kodomo no hi’ လို့ခေါ်တဲ့ ’ကလေးများနေ့’ ကို ဘယ်နေ့မှာကျင်းပကြပါသလဲ?",
    options: ["မေလ ၁၁ရက်", "ဇွန်လ ၁ရက်", "မေလ ၃ရက် ", "မေလ ၅ရက်"],
    image:"img/kid.webp",
    correctAnswer: "မေလ ၅ရက်"
  },
  {
    question: "ဂျပန်ရဲ့ အကြီးဆုံးကျွန်းနာမည်ကဘာလဲ?",
    options: ["Honshu", "Hokkaido", "Kyushu", "Shikoku"],
    image:"img/honshu.jpg",
    correctAnswer: "Honshu"
  },
  {
    question: "Sushi မှာအဓိကပါရမဲ့အရာကဘာလဲ?",
    options: ["ငါး", "ထမင်းချဥ်", "ရေညှိ", "Wasabi "],
    image:"img/sushi.jpeg",
    correctAnswer: "ထမင်းချဥ်"
  },
  {
    question: "Japan မှာ အများဆုံးသောက်ကြတဲ့ အရာကဘာလဲ?",
    options: ["Bubble Tea", "Green Tea", "Coca-Cola ", "Wasabi juice"],
    image:"img/tea.jpg",
    correctAnswer: "Green Tea"
  },
  {
    question: "Japan ဘာသာဖြင့် ”Kawaii”  ဆိုတာဘာကိုဆိုလိုတာလဲ?",
    options: ["ကြောက်စရာကောင်းသော", "ဝမ်းနည်းစရာကောင်းသော", "ချစ်စရာကောင်းသော ", "ပျော်ရွှင်စရာကောင်းသော"],
    image:"img/kawaii.jpg",
    correctAnswer: "ချစ်စရာကောင်းသော "
  },
  {
    question: "ဂျပန်နိုင်ငံက ထုတ်သော Car Brand မဟုတ်တဲ့အမည်ကိုရွေးပေးပါ?",
    options: ["Toyota", "Honda", "Nissan", "Hyundai"],
     image: "img/car.png",
    correctAnswer: "Hyundai"
  },
   {
    question: "တိုကျိုမြို့ရဲ့ မီးရထားတွေက ဘာလို့အမြဲအချိန်တိကျရတာလဲ?",
    options: ["ရထားမောင်းသမားတွေက နာရီကို အမြဲကြည့်နေလို့ ", "သူတို့မှာလျှို့ဝှက်နင်ဂျာတွေက ရထားလမ်းကို ရှင်းပေးလို့ ",
       "ရထားမောင်းနှင်တဲ့စက်ထဲမှာ program ရေးထားလို့", "လူတိုင်းက အချိန်ကိုတန်ဖိုးထားပြီး   စည်းကမ်းလိုက်နာလို့"],
    image: "img/shinkansen.jpg",
    correctAnswer: "လူတိုင်းက အချိန်ကိုတန်ဖိုးထားပြီး   စည်းကမ်းလိုက်နာလို့"
  },
  {
    question: "ဂျပန်လူမျိုးတွေက ရိုသေလေးစားမှု(respect) ကိုဘာလို့ အလေးထားကြတာလဲ?",
    options: ["လူတိုင်းက ဆာမူရိုင်းစိတ်ဓာတ်ရှိလို့", "ပွဲတော်တွေမှာ ရိုသေမှုပြရလို့", "ဘုရားကျောင်းတွေ အများကြီးရှိလို့", "လူမှုဘဝ သဟဇာတဖြစ်ဖို့အတွက် အရေးကြီးမှန်း နားလည်လို့"],
     image: "img/bow.jpg",
    correctAnswer: "လူမှုဘဝ သဟဇာတဖြစ်ဖို့အတွက် အရေးကြီးမှန်း နားလည်လို့"
  },
  {
    question: "ဂျပန်တွင် နာမည်တွေရဲ့နောက်မှာ ဘယ်လိုမျိုး ထည့်ပြီးခေါ်လေ့ရှိသလဲ?",
    options: ["Chan/Kun ", "San/Sama", "Sensei", "အထက်ပါအားလုံး"],
     image: "img/honor.jpg",
    correctAnswer: "အထက်ပါအားလုံး"
  },
  {
    question: "ဂျပန်မှာ ဆာကူရာပန်းတွေက ဘာလို့‌နွေဦးရောက်မှ ပွင့်ရတာလဲ?",
    options: ["အနွေဦးရဲ့နွေးထွေးတဲ့ ရာသီဥတုကို နှစ်သက်လို့", "အလှဆုံးအချိန်ဖြစ်လို့", "လူတွေက နွေဦးရာသီကို ကြိုက်ကြလို့  ", "တခြားပန်းတွေ မပွင့်လို့"],
    image:"img/spring.jpg",
    correctAnswer: "အနွေဦးရဲ့နွေးထွေးတဲ့ ရာသီဥတုကို နှစ်သက်လို့"
  },
  {
    question: "ဂျပန်နိုင်ငံမှာ မကြာခဏဖြစ်တဲ့ သဘာဝဘေးအန္တရာယ်က ဘာလဲ?",
    options: ["မိုးသည်းထန်မှု", "မြေငလျှင်", "မီးတောင်ပေါက်ကွဲမှု", "မြေပြိုမှု"],
    image:"img/earthquake.webp",
    correctAnswer: "မြေငလျှင်"
  },
  {
    question: "ဂျပန်မှာဘယ်သူတွေကို ‘Sensei’ (ဆန်းဆေး)လို့ခေါ်လဲ?",
    options: ["ရာထူးကြီးသူ", "သူငယ်ချင်း", "ကားမောင်းသူ", "ဆရာ/ပညာရှင်"],
    image:"img/sensei.jpeg",
    correctAnswer: "ဆရာ/ပညာရှင်"
  },
   {
    question: "ဂျပန်၏ ယဥ်ကျေးမှုဖြစ်သော လက်ဆောင်ပေးခြင်းတွင် ဘယ်အရာကို အလေးထားသင့်သနည်း?",
    options: ["တန်ဖိုးကြီးပစ္စည်းပေးခြင်း", "လှပစွာသေချာထုတ်ပိုးပြီးမှပေးခြင်း", "လက်ခံသူက ဘာလိုအပ်လဲဆိုတာမေးပြီးမှပေးခြင်း  ", "နာမည်နှင့်လိပ်စာထည့်ပေးခြင်း  "],
    image:"img/present.jpeg",
    correctAnswer: "လှပစွာသေချာထုတ်ပိုးပြီးမှပေးခြင်း"
  },
   {
    question: "ဂျပန်ရိုးရာလက်ဖက်ရည်သောက်ပွဲမှာ ဘာကိုအဓိက အသုံးပြုသလဲ?",
    options: ["ရိုးရာမုန့်", "နှပ်ထားသော လက်ဖက်ခြောက်", "မတ်ချာလို့ခေါ်သော အစိမ်းရောင်လက်ဖက်မှုန့်   ", "ရိုးရိုးလက်ဖက်ရည်"],
    image:"img/macha1.jpg",
    correctAnswer: "မတ်ချာလို့ခေါ်သော အစိမ်းရောင်လက်ဖက်မှုန့်   "
  },
  {
    question: "'ဂျပန်မှာ ‘Itadakimasu’ လို့ပြောတာက ဘယ်အချိန်လဲ?",
    options: ["အစာစားပြီးတဲ့အချိန်", "အစာမစားခင်", "ဟင်းချက်နေတဲ့အချိန် ", "အိမ်မှမထွက်ခင်"],
    image:"img/itadakimasu.jpg",
    correctAnswer: "အစာမစားခင်"
  },
  {
    question: "ဂျပန်မှာအဓိက အသုံးပြုတဲ့ဘာသာစကားကဘာလဲ?",
    options: ["အင်္ဂလိပ်", "တရုတ်", "ရုရှား", "ဂျပန်"],
    image:"img/japanese.jpg",
    correctAnswer: "ဂျပန်"
  },
  {
    question: "ဂျပန်ရိုးရာ ကိုယ်ခံပညာဖြစ်တဲ့ ‘ဆူမို’ မှာပြိုင်ပွဲဝင်တွေကို ဘယ်လိုခေါ်သလဲ?",
    options: ["ဆာမူရိုင်း", "ရီခိရှိ", "နင်ဂျာ", "ရှိုရွန်"],
    image:"img/rikishi.webp",
    correctAnswer: "ရီခိရှိ"
  },
  {
    question: "ဂျပန်လို ‘Sayonara’ ဆိုတာ ဘာအဓိပ္ပါယ်လဲ?",
    options: ["မင်္ဂလာပါ", "ပြန်ရောက်ပါပြီ ", "တာ့တာ ", "ထမင်းစားပြီးပြီလား"],
    image:"img/sayonara.jpg",
    correctAnswer: "တာ့တာ "
  },
  {
    question: "Wasabi ကို ဘာအတွက်သုံးလဲ?",
    options: ["ဟင်းချိုအရသာဖြည့်စွက်ရန်", "ကော်ဖီတွင်‌ရောစပ်‌သောက်သုံးရန်", "ဆူရှီ၊ဆာရှိမိတို့နှင့် တွဲဖက်စားသုံးရန် ", "အချိုပွဲများပြုလုပ်ရန် "],
    image:"img/wasabi.webp",
    correctAnswer: "ဆူရှီ၊ဆာရှိမိတို့နှင့် တွဲဖက်စားသုံးရန် "
  },
  {
    question: "ဒုတိယကမ္ဘာစစ်တုန်းက nuclear bomb အကျဲခံရတဲ့မြို့က ဘယ်မြို့လဲ?",
    options: ["အိုဘဲ", "အိုဆာကာ", "နာဆာကာ", "ဟီရိုရှီးမား "],
    image:"img/hiroshima.webp",
    correctAnswer: "ဟီရိုရှီးမား "
  },
  {
    question: "ဂျပန်နိုင်ငံကို ကိုယ်စားပြုတဲ့ ပန်းအမည်က ဘာလဲ?",
    options: ["လီလီပန်း", "ကျူးလစ်ပန်း", "ချယ်ရီပန်း", "နေကြာပန်း"],
    image:"img/cherry.jpg",
    correctAnswer: "ချယ်ရီပန်း"
  },
  {
    question: "ဂျပန်အလံတွင် အသုံးပြုထားသော အရောင်များသည် မည်သည့်အရောင်များ ဖြစ်သလဲ?",
    options: ["အဖြူနှင့်ပန်းရောင်", "အဖြူနှင့်အနီ", "ခဲရောင်နှင့်အနီ", "အဖြူနှင့်လိမ္မော်"],
    image:"img/flag.jpg",
    correctAnswer: "အဖြူနှင့်အနီ"
  },
  {
    question: "ဂျပန်နိုင်ငံရဲ့ National Sport ကဘာလဲ?",
    options: ["Football", "Baseball", "Boxing", "Sumo"],
    image:"img/national.webp",
    correctAnswer: "Sumo"
  },
  {
    question: "အောက်ပါအဖြေများအနက် မည်သည့်အဖြေသည် ဂျပန်နိုင်ငံကို ကိုယ်စားပြုသလဲ?",
    options: ["Land of the rising sun", "Land of the great wall", "The place near the ocean", "The place near the lake"],
    image:"img/sun.jpg",
    correctAnswer: "Land of the rising sun"
  },
  {
    question: "ဂျပန်တွင် ‘O-bon’ ပွဲတော်ကို ဘယ်ရာသီမှာကျင်းပသလဲ? ",
    options: ["နွေရာသီ", "နွေဦးရာသီ", "ဆောင်းရာသီ", "ဆောင်းဦးရာသီ"],
    image:"img/obon.webp",
    correctAnswer: "နွေရာသီ"
  },
  {
    question: "‘Shinkensan’ ဆိုတာ ဘာလဲ? ",
    options: ["ပြည်တွင်းပျံသန်းလေယာဥ်", "အမြန်လမ်း", "ဘတ်စ်ကား", "အမြန်ရထား"],
     image: "img/transportation.jpg",
    correctAnswer: "အမြန်ရထား"
  }
];
