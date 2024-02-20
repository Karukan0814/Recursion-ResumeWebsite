// import { CTA } from "../components";
import { experiences, qualifications, skills } from "../constants";

import QualificationItem from "../components/QualificationItem";
import ExperienceItem from "../components/ExperienceItem";
import SkillItem from "../components/SkillItem";
import Abstraction from "../components/Abstraction";
import SubTitle from "../components/SubTitle";
import CTA from "../components/CTA";

const About = () => {
  return (
    // <section className="w-full h-screen relative bg_ocean">
    <section className="max-container">
      <Abstraction />

      <div className="py-16 flex flex-col my-10">
        <SubTitle title={"My skills."} subtitle={"使用技術"} />

        <div className="mt-10 flex flex-wrap gap-8">
          {skills.map((skill, index) => (
            <SkillItem skill={skill} index={index} />
          ))}
        </div>
      </div>

      <div className="py-16">
        <SubTitle title={"Qualification."} subtitle={"資格"} />

        <div className="mt-3  flex flex-wrap gap-2 sm:gap-6">
          {qualifications.map((qualification, index) => {
            return (
              <QualificationItem qualification={qualification} index={index} />
            );
          })}
        </div>
      </div>
      <div className="py-16 ">
        <SubTitle title={"Work Experience."} subtitle={"職歴"} />

        <div className="mt-5 flex flex-col gap-3 px-10 text-slate-700 ">
          <p>
            Experienced in system construction for financial institutions at an
            SIer, demonstrating leadership as both team leader and deputy.
            Skilled in overseeing projects from basic design to implementation."
          </p>
          <p>
            SIerにて金融機関向けシステム構築に従事。チームリーダーやサブリーダーとしてのリーダーシップを発揮し、基本設計から実装までのプロジェクトを推進
          </p>
        </div>

        <div className="mt-12 flex flex-col space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem experience={experience} index={index} />
          ))}
        </div>
      </div>

      {/* <hr className="border-slate-200" /> */}

      <CTA />
    </section>
  );
};

export default About;
