import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  sql,
  prisma,
  python,
  twitter,
  php,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },

  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Backend",
  },
  {
    imageUrl: prisma,
    name: "Prisma",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const qualifications = [
  {
    name: "応用情報技術者",
    date: "",
  },
  {
    name: "AWS SAA",
    date: "Sep 2023",
  },
  {
    name: "TOEIC 955",
    date: "",
  },
];

export const experiences = [
  {
    title: "Fullstack Web Developer",
    position: "member",

    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2015 - Jan 2016",
    points: [
      "5名チームのメンバーとして金融機関の業務システムの通知領域の詳細設計～開発～単体テスト～結合テストまで担当",
      "javascriptとjQueryでクライアントサイド、JavaとOracleでバックエンドの開発を行った。",
    ],
  },
  {
    title: "Fullstack Web developer",
    position: "sub leader",

    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Feb 2016 - Oct 2016",
    points: [
      "5名チームのサブリーダーとして金融機関の業務システムの採番機能の詳細設計～開発～単体テスト～結合テストまで担当",
      "javascriptとjQueryでクライアントサイド、JavaとOracleでバックエンドの開発を行った。",
    ],
  },
  {
    title: "Fullstack Web developer",
    position: "leader",

    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Nov 2016",
    points: [
      "10名チームのリーダーとして金融機関の業務システムの海外送金領域の結合テストを担当",
    ],
  },
  {
    title: "Fullstack Web developer",
    position: "leader",

    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Dec 2016 - Feb 2018",
    points: [
      "3名チームのリーダーとして金融機関の業務システムの顧客管理領域の詳細設計～開発～単体テスト～結合テストを担当",
      "javascriptとjQueryでクライアントサイド、JavaとOracleでバックエンドの開発を行った。",
    ],
  },
  {
    title: "Frontend Web developer",
    position: "sub leader",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Mar 2018 - Jun 2019",
    points: [
      "6名チームのサブリーダーとして金融機関のクレジットカード決済システムの基本設計を担当",
      "使用言語はTypescript。",
    ],
  },
  {
    title: "Frontend Web developer",
    position: "leader",

    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jul 2019 - Dec 2019",
    points: [
      "6名チームのリーダーとして金融機関のクレジットカード決済システムの詳細設計～開発を担当",
      "使用言語はTypescript。",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Karukan0814",
  },

  {
    name: "Twitter",
    iconUrl: twitter,
    link: "",
  },
];

export const projects = [
  {
    type: "fullstack",
    skills: [react, typescript, express, nodejs],
    name: "SocialNetworkingService",
    description:
      "KarukanSNS は Twitter に類似した機能を持つソーシャルネットワーキングアプリケーションです。 フロントはReact、バックはExpressを使用。",
    link: "https://karukan-practice.site/",
    github: "https://github.com/Karukan0814/Recursion-SocialNetworkingService",
  },

  {
    type: "fullstack",
    skills: [nextjs, typescript, express, nodejs],
    name: "Eat Fish - お魚喰えよ",
    description:
      "魚に関連したレシピ記事や魚屋・お取り寄せ先情報を魚種別に整理したデータベースサービス。フロントはNext.js、バックはExpressを使用。",
    link: "https://eatfish-psi.vercel.app/",
    github: "https://github.com/Karukan0814/EatFish_All",
  },
  {
    type: "front",
    skills: [nextjs, typescript],
    name: "Netflix Clone",
    description: "Youtube APIを利用してNetflixのクローンサイトを作成。Next.js",
    link: "https://netflix-clone-xi-green.vercel.app/",
    github: "https://github.com/Karukan0814/netflix-clone",
  },
  {
    type: "front",
    skills: [nextjs, typescript],
    name: "Descover Restaurants",
    description:
      "Next.js+Typescriptで作成したユーザーの現在地からGoogleMap APIで付近のレストランを表示するアプリケーション。ログイン、いいね、コメント機能付き。 また、マップに付近のレストランを表示する。",
    link: "https://discover-restaurants-sigma.vercel.app/",
    github: "https://github.com/Karukan0814/Discover-Restaurants",
  },

  {
    type: "front",
    skills: [react, typescript],
    name: "Poke Quiz",
    description:
      "React+Typescriptで作成したポケモンの英語名学習アプリケーション。ポケモンの情報はPokemonAPIからRestfulAPI形式で取得。クイズはReading, Listening, Spellingの3セクションからなる。 スコア記録機能つき。",
    link: "https://pokemonpj-95d18.web.app/",
    github: "https://github.com/Karukan0814/PokeQuiz",
  },
  {
    type: "backend",
    skills: [python],
    name: "File Manipulator Program",
    description:
      "ユーザーが入力したファイルを指定された方法で加工し、出力するプログラム。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-fileManipulator",
  },
  {
    type: "backend",
    skills: [python],
    name: "Markdown to HTML Converter",
    description: "マークダウン形式のテキストをHTMLに変換するプログラム。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-markdownConverter",
  },
  {
    type: "backend",
    skills: [python],
    name: "Local Chat Messenger",
    description:
      "ローカルネットワーク上でメッセージの送受信を行うチャットアプリケーション。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-localChatMessanger",
  },
  {
    type: "backend",
    skills: [python, javascript],
    name: "Remote Procedure Call",
    description:
      "異なる言語で書かれたクライアントとサーバが通信し、サーバ上の関数を実行できるRPCシステム。ソケットを使用し、JSON形式でリクエストとレスポンスをやり取りする。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-remoteProcedureCall",
  },
  {
    type: "backend",
    skills: [python],
    name: "Online Chat Messenger",
    description:
      "チャットメッセンジャーサービス。クライアントがCLIを通じてサーバに接続しチャットルームを作成または既存のルームに参加しメッセージを送信すると、それが当該チャットルームに参加している他のクライアントに配信される。サーバとクライアントはUDPソケットで通信。TCP接続でチャットルームの作成と接続が行われ、その後UDPでチャットが行われる。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-OnlineChatMessenger",
  },
  {
    type: "backend",
    skills: [python],
    name: "Video Compressor Service",
    description:
      "クライアントがCLIを通してmp4をサーバーにアップロードし、サーバーは指定された方法で圧縮・解像度変更・アスペクト変更等を行い、変更後のファイルを出力する。。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-VideoCompressor",
  },
  {
    type: "backend",
    skills: [php],
    name: "PlantUMLServer",
    description:
      "PHP+javascriptで作成したplantUML練習アプリ。 ユーザーが記述したplantUMLをリアルタイムで画像表示。画像の.png,.svg、コードの.txtダウンロード機能つき。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-PlantUMLServer",
  },
  {
    type: "backend",
    skills: [php],
    name: "PlantUMLServer",
    description:
      "ユーザーが画像やテキストコンテンツを投稿できるイメージボード Web アプリ。ユーザーがメインスレッドを開始し、他のユーザーがそれに返信できる。投稿にユーザーデータが添付されていないため、すべての投稿は匿名。 ユーザーは、画像と共にコンテンツを投稿することで新しいスレッドを作成できる。メインスレッドが作成されると、他のユーザーはテキストや画像を使ってそれに返信。",
    link: "",
    github: "https://github.com/Karukan0814/Recursion-Imageboard-Webapp",
  },
];
