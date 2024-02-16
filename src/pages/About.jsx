import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
import MySkills from "../components/MySkills";
import CircleIcons from "../components/SkillsCircle";
import { fish } from "../assets/icons";

const About = () => {
  return (
    // <section className="w-full h-screen relative bg_ocean">
    <section className="max-container">
      {/* <CircleIcons /> */}
      <div className="glassmorphism rounded-xl text-center px-5 py-10">
        <h1 className="head-text ">
          <span className="blue-gradient_text font-semibold drop-shadow">
            Welcome to Karukan's Portofolio!
          </span>{" "}
        </h1>
        {/* <h3 className="text-slate-600 mt-5 subhead-text">
          <span className="blue- font-semibold drop-shadow">かるかん</span>
          の自己紹介ページへようこそ！ 👋
        </h3> */}

        <div className="mt-10 flex flex-col gap-3 text-slate-500">
          <p>
            I am a full-stack engineer, mainly focusing on backend development,
            and currently based in Tokyo.
          </p>
          <p>
            "かるかん"は主に東京を拠点としているフルスタックエンジニアです。バックエンド指向。
          </p>
        </div>
      </div>

      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text text-slate-700  ">My skills.</h3>

        <div className="mt-10 flex flex-wrap gap-8">
          {skills.map((skill) => (
            <div
              className="block-container w-16 h-16 sm:w-20 sm:h-20"
              key={skill.name}
            >
              <div className="ball bubble flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">
          Qualification.　　<span className="text-sm">資格</span>
        </h3>
        <div className="block-container flex justify-center space-x-6">
          <div className=" block-container relative w-48 h-48 justify-center items-center">
            <img src={fish} alt={"test"} className="w-48 h-48 object-contain" />
            <span className="absolute flex text-xs sm:text-sm top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2">
              応用情報技術者
            </span>
          </div>
          <div className=" block-container relative w-48 h-48 justify-center items-center">
            <img src={fish} alt={"test"} className="w-48 h-48 object-contain" />
            <span className="absolute flex  text-xs sm:text-sm top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2">
              AWS SAA
            </span>
          </div>
          <div className=" block-container relative w-48 h-48 justify-center items-center">
            <img src={fish} alt={"test"} className="w-48 h-48 object-contain" />
            <span className="absolute flex text-xs sm:text-sm top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2">
              TOEIC 875
            </span>
          </div>
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 ">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex flex-col space-y-12">
          {experiences.map((experience, index) => (
            <div
              className={`flex flex-row w-full items-center justify-center space-x-1  ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              key={index}
            >
              <div
                className="block-container w-32 h-32 sm:w-48 sm:h-48 mx-6"
                key={index}
              >
                <div className="ball bubble flex justify-center items-center overflow-hidden text-center ">
                  <div className="flex-col ">
                    <h3 className="blue-gradient_text text-sm sm:text-xl font-poppins font-semibold my-2">
                      {experience.title}
                    </h3>

                    <p className="text-slate-600 text-xs font-poppins font-semibold">
                      {experience.position}
                    </p>

                    <p className="text-blue-600 text-xs font-poppins font-semibold">
                      {experience.date}
                    </p>

                    {/* <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>  */}
                  </div>
                </div>
              </div>
              <div className="block-container glassmorphism rounded-xl px-5 py-2  w-1/2  min-h-48 mx-6 flex items-center overflow-hidden">
                <ul className="list-disc space-y-2">
                  {experience.points.map((point, idx) => (
                    <li
                      key={`experience-point-${idx}`}
                      className="text-slate-700 font-normal text-sm "
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* {experiences.map((experience, index) => (
            <div
              className={`block-container w-full  ${
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="block-container w-48 h-48" key={index}>
                <div className="ball bubble flex justify-center items-center overflow-hidden text-center">
                  <div>
                    <h4 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h4>
                    {/* <p
                      className="text-black-500 font-medium text-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p> 
                  </div>
                </div>
              </div>
              <div className="block-container glassmorphism rounded-xl px-5 py-3">
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* <CTA /> */}
    </section>
  );
};

export default About;
