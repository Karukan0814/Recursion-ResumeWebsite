import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h2 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-y px-8 text-white mx-5">
      1
    </h2>
  ),
  2: <InfoBox text="about me" link="/about" btnText="testBtn" />,
  3: <InfoBox text="projects" link="/projects" btnText="testBtn" />,
  4: <InfoBox text="conatct" link="/contact" btnText="testBtn" />,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage];
};

export default HomeInfo;
