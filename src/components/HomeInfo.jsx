import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import Abstraction from "./Abstraction";

const InfoBox = ({ text, subText, link, btnText }) => (
  <div className="info-box thought">
    <p className="text-blue-900 font-medium sm:text-xl text-center mb-3">
      {text}
    </p>
    <p className="text-slate-500 text-xs sm:text-sm">{subText}</p>
    {btnText && (
      <Link to={link} className="neo-brutalism-blue neo-btn text-white ">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    )}
  </div>
);
const renderContent = {
  1: (
    <div className="block-container rounded-xl glassmorphism my-10">
      <div className="flex flex-col text-center px-5 py-10 items-center justify-center">
        {/* <AnimatedTextWord text={"Welcome to Karukan's Portofolio!"} /> */}

        <div className="text-center flex justify-center flex-wrap mb-3">
          <h1 className="blue-gradient_text font-semibold drop-shadow head-text">
            Welcome to Karukan's Portofolio!
          </h1>
        </div>

        <p className="text-slate-500 text-base sm:text-lg">
          WebDeveloper "かるかん" のポートフォリオにようこそ！
        </p>

        <p className="text-slate-500 text-base sm:text-lg">scroll to right</p>
      </div>
    </div>
  ),

  2: (
    <InfoBox
      text="Karukan is a Fullstack Web Developer in Japan, actively learning Web Development skills for a promising future!"
      subText="かるかんは日々ウェブ技術を学んでいるIT技術者のはしくれです。"
      link="/about"
      btnText="About me"
    />
  ),
  3: (
    <InfoBox
      text="I've created several projects during my learning process! Feel free to take a look!"
      subText="今まで作成したプロジェクトです"
      link="/projects"
      btnText="Projects"
    />
  ),
  4: (
    <InfoBox
      text="If you're interested in working with me, let's talk! You can contact me here!"
      subText="以下から連絡がとれます"
      link="/contact"
      btnText="Contact"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};

export default HomeInfo;
