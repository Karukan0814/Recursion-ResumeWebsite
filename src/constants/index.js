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
    name: "TOEIC 875",
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
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
