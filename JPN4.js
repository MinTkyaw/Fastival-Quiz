// questions.js
const questions = [
  {
    question: "上手な",
    options: ["しょうすな", "じょうずな", "じょうすな", "しょうずな"],
    image: "img/jouzu.png",
    correctAnswer: "じょうずな"
  },
  {
    question: "医者",
    options: ["ししゃ", "じしゃ", "いしゃ", "じじゃ"],
    image: "img/isha.png",
    correctAnswer: "いしゃ"
  },
  {
    question: "会社員",
    options: ["かいしゃしん", "かいしやいん", "かいしやしん", "かいしゃいん"],
    image: "img/kaishain.png",
    correctAnswer: "かいしゃいん"
  },
  {
    question: "銀行",
    options: ["ぎんこう", "きんこう", "ぎんごう", "がんこう"],
    image: "img/ginkou.png",
    correctAnswer: "ぎんこう"
  },
  {
    question: "海外",
    options: ["かいかい", "がいがい", "かいけい", "かいがい"],
    image: "img/kaigai.jpg",
    correctAnswer: "かいがい"
  },
  {
    question: "北海道",
    options: ["はっかいど", "ほっかいど", "ほっかいどう", "ほっかいとう"],
    image: "img/hokkaidou.jpeg",
    correctAnswer: "ほっかいどう"
  },
  {
    question: "東洋",
    options: ["どうよう", "とうりょう", "どうりょう", "とうよう"],
    image: "img/touyou.png",
    correctAnswer: "とうよう"
  },
  {
    question: "洋服",
    options: ["りょうふく", "ようふく", "りょうぶく", "ようぶく"],
    image: "img/youfuku.png",
    correctAnswer: "ようふく"
  },
  {
    question: "台所",
    options: ["ひろしょ", "たいところ", "だいどころ", "だいしょ"],
    image: "img/daidokoro.png",
    correctAnswer: "だいどころ"
  },
  {
    question: "夏祭り",
    options: ["なつばつり", "なづばつり", "なつまつり", "なづぼつり"],
    image: "img/matsuri.png",
    correctAnswer: "なつまつり"
  },
  {
    question: "夏服",
    options: ["なつぶく", "なづふく", "なつふうく", "なつふく"],
    image: "img/natsufuku.png",
    correctAnswer: "なつふく"
  },
  {
    question: "心配する",
    options: ["こころくばるする", "しんばいする", "しんぱいする", "じんぱいする"],
    image: "img/shinpai.png",
    correctAnswer: "しんぱいする"
  },
  {
    question: "声",
    options: ["ごえ", "いえ", "こうえ", "こえ"],
    image: "img/koe.png",
    correctAnswer: "こえ"
  },
  {
    question: "頭痛",
    options: ["あたまつう", "ずつ", "ずつう", "すづう"],
    image: "img/zutsuu.png",
    correctAnswer: "ずつう"
  },
  {
    question: "目薬",
    options: ["めやく", "めくすり", "めかつり", "めぐすり"],
    image: "img/me.png",
    correctAnswer: "めぐすり"
  },
  {
    question: "案内する",
    options: ["えんないする", "あんないする", "うんないする", "あんなする"],
    image: "img/annai.png",
    correctAnswer: "あんないする"
  },
  {
    question: "病院",
    options: ["ひょういん", "びょういん", "びよういん", "ひよういん"],
    image: "img/byouin.png",
    correctAnswer: "びょういん"
  },
  {
    question: "興味",
    options: ["きようみ", "きょうみ", "きゃうみ", "きょみ"],
    image: "img/kyoumi.png",
    correctAnswer: "きょうみ"
  },
  {
    question: "野菜",
    options: ["やさい", "やいさい", "やうさい", "やすい"],
    image: "img/yasai.png",
    correctAnswer: "やさい"
  },
  {
    question: "運動",
    options: ["えんどう", "うどう", "あんどう", "うんどう"],
    image: "img/undou.jpg",
    correctAnswer: "うんどう"
  },
  {
    question: "必要",
    options: ["ひつよう", "ひっしょ", "ひつよ", "ひっよう"],
    image: "img/hitsuyou.png",
    correctAnswer: "ひつよう"
  },
  {
    question: "場合",
    options: ["ばいごう", "ばいあい", "ばあい", "ばうい"],
    image: "img/baai.png",
    correctAnswer: "ばあい"
  },
  {
    question: "準備",
    options: ["じゅんび", "しゅんび", "じゅんぴ", "じんび"],
    image: "img/junbi.png",
    correctAnswer: "じゅんび"
  },
  {
    question: "最後",
    options: ["さいご", "さいこう", "しゅうご", "さいほ"],
    image: "img/saigo.avif",
    correctAnswer: "さいご"
  },
  {
    question: "最近",
    options: ["さいちか", "さいきん", "さいこん", "さっきん"],
    image: "img/saikin.png",
    correctAnswer: "さいきん"
  },
  {
    question: "交通",
    options: ["こうつう", "こうそう", "ごうつう", "こつう"],
    image: "img/koutsuu.png",
    correctAnswer: "こうつう"
  },
  {
    question: "安全",
    options: ["あんぜん", "あんせん", "おんぜん", "あんぜい"],
    image: "img/anzen.jpg",
    correctAnswer: "あんぜん"
  },
  {
    question: "必要な物",
    options: ["ひっようなもの", "ひつよなぶつ", "ひつようなもの", "ひつようなぶつ"],
    image: "img/hitsuyou_mono.jpg",
    correctAnswer: "ひつようなもの"
  },
  {
    question: "入学式",
    options: ["にゅうがくしき", "にゅうこうしき", "いりがくしき", "にゅうがくせき"],
    image: "img/nyuugakushiki.png",
    correctAnswer: "にゅうがくしき"
  },
  {
    question: "以上",
    options: ["いじょう", "いしょう", "いちょう", "いじょ"],
    image: "img/ijou.png",
    correctAnswer: "いじょう"
  }

];
