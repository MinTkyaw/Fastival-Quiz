// questions.js
const questions = [
  {
    question: "駐車場",
    options: ["しゅうしゃじょう", "しゅしゃじょ", "ちゅうしゃしょ", "ちゅうしゃじょう"],
    image: "img/chuushajou.jpg",
    correctAnswer: "ちゅうしゃじょう"
  },
  {
    question: "断る",
    options: ["こどわる", "ごとれる", "こどれる", "ことわる"],
    image: "img/kotowaru.png",
    correctAnswer: "ことわる"
  },
  {
    question: "認める",
    options: ["みどめる", "みとめる", "まとめる", "みとまる"],
    image: "img/mitomeru.png",
    correctAnswer: "みとめる"
  },
  {
    question: "非常口",
    options: ["ひしょうくち", "ひじょうぐち", "ひしょぐち", "びじようぐち"],
    image: "img/hijouguchi.png",
    correctAnswer: "ひじょうぐち"
  },
  {
    question: "過去",
    options: ["すごこ", "かこ", "かっこ", "けっこ"],
    image: "img/kako.jpg",
    correctAnswer: "かこ"
  },
  {
    question: "窓側",
    options: ["まどかわ", "まどがわ", "まどがれ", "そらがわ"],
    image: "img/madogawa.jpg",
    correctAnswer: "まどがわ"
  },
  {
    question: "座席",
    options: ["すわせき", "ざせき", "ざぜき", "ざざき"],
    image: "img/zaseki.jpg",
    correctAnswer: "ざせき"
  },
  {
    question: "禁煙",
    options: ["きんしえん", "いんえん", "きえん", "きんえん"],
    image: "img/kinen.webp",
    correctAnswer: "きんえん"
  },
  {
    question: "動物園",
    options: ["どうふつえん", "どうぶつうん", "どうふすえん", "どうぶつえん"],
    image: "img/doubutsuen.jpg",
    correctAnswer: "どうぶつえん"
  },
  {
    question: "神様",
    options: ["かみざま", "きみさま", "かみさま", "がみさま"],
    image: "img/kamisama.jpg",
    correctAnswer: "かみさま"
  },
  {
    question: "薬局",
    options: ["くすりきょく", "やくきょく", "やっきやく", "やっきょく"],
    image: "img/yakkyoku.jpg",
    correctAnswer: "やっきょく"
  },
  {
    question: "科学",
    options: ["かかく", "がかく", "かけく", "かがく"],
    image: "img/kagaku.jpg",
    correctAnswer: "かがく"
  },
  {
    question: "人形",
    options: ["にんきょう", "にきょう", "にんぎょう", "にんきゃ"],
    image: "img/ningyou.webp",
    correctAnswer: "にんぎょう"
  },
  {
    question: "骨折",
    options: ["こせつ", "こっせつ", "こっさつ", "こつせつ"],
    image: "img/kossetsu.webp",
    correctAnswer: "こっせつ"
  },
  {
    question: "救急車",
    options: ["きゅうきゅうしょ", "きゅうきゅうしゃ", "ぎゅうきゅうしゃ", "きゅうきゅしゃ"],
    image: "img/kyuukyuusha.jpeg",
    correctAnswer: "きゅうきゅうしゃ"
  },
  {
    question: "防ぐ",
    options: ["ぶせぐ", "ふせぐ", "ふぜぐ", "ふさぐ"],
    image: "img/fusegu.webp",
    correctAnswer: "ふせぐ"
  },
  {
    question: "花束",
    options: ["はたたば", "はなたば", "はたなば", "ばたたば"],
    image: "img/hanataba.jpg",
    correctAnswer: "はなたば"
  },
  {
    question: "冷蔵庫",
    options: ["らいぞうこ", "れいそうこ", "れいそこう", "れいぞうこ"],
    image: "img/reizouko.jpg",
    correctAnswer: "れいぞうこ"
  },
  {
    question: "現在",
    options: ["げんざい", "げんさい", "けんざい", "げんさ"],
    image: "img/genzai.jpg",
    correctAnswer: "げんざい"
  },
  {
    question: "提案",
    options: ["ていあん", "ちょうあん", "ていなん", "じょうあん"],
    image: "img/teian.png",
    correctAnswer: "ていあん"
  },
  {
    question: "許可",
    options: ["きょか", "こうか", "きょく", "きょうか"],
    image: "img/kyoka.png",
    correctAnswer: "きょか"
  },
  {
    question: "混雑",
    options: ["こんさつ", "こんざつ", "こうざつ", "こざつ"],
    image: "img/konzatsu.png",
    correctAnswer: "こんざつ"
  },
  {
    question: "状況",
    options: ["じょうきょく", "じょうこう", "じょうきょう", "しょうきょう"],
    image: "img/joukyou.png",
    correctAnswer: "じょうきょう"
  },
  {
    question: "費用",
    options: ["ひよう", "ふよう", "へいよう", "ひりょう"],
    image: "img/hiyou.png",
    correctAnswer: "ひよう"
  },
  {
    question: "誤解",
    options: ["ごかい", "ごけい", "こかい", "ごきょう"],
    image: "img/gokai.png",
    correctAnswer: "ごかい"
  },
  {
    question: "増加",
    options: ["そうか", "ぞうが", "ぞうか", "しょうか"],
    image: "img/zouka.png",
    correctAnswer: "ぞうか"
  },
  {
    question: "流行",
    options: ["りゅうこう", "りゅうごう", "りゅうかん", "りゅうこうう"],
    image: "img/ryuukou.png",
    correctAnswer: "りゅうこう"
  },
  {
    question: "面接",
    options: ["めんせつ", "めんしつ", "めんせい", "もんせつ"],
    image: "img/mensetsu.png",
    correctAnswer: "めんせつ"
  },
  {
    question: "判断",
    options: ["はんてん", "はんだん", "ばんだん", "はんどん"],
    image: "img/handan.jpg",
    correctAnswer: "はんだん"
  },
  {
    question: "笑顔",
    options: ["えんかお", "えかお", "えがお", "えんがお"],
    image: "img/egao.png",
    correctAnswer: "えがお"
  }
];
