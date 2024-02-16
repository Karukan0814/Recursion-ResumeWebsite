// import { CTA } from "../components";
import { experiences, qualifications, skills } from "../constants";

import QualificationItem from "../components/QualificationItem";
import ExperienceItem from "../components/ExperienceItem";
import SkillItem from "../components/SkillItem";
import Abstraction from "../components/Abstraction";

const About = () => {
  return (
    // <section className="w-full h-screen relative bg_ocean">
    <section className="max-container">
      <Abstraction />

      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text text-slate-700  ">My skills.</h3>

        <div className="mt-10 flex flex-wrap gap-8">
          {skills.map((skill, index) => (
            <SkillItem skill={skill} index={index} />
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text text-slate-700">
          Qualification.　　<span className="text-sm">資格</span>
        </h3>
        <div className="mt-3  flex flex-wrap gap-2 sm:gap-6">
          {qualifications.map((qualification, index) => {
            return (
              <QualificationItem qualification={qualification} index={index} />
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-slate-700">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 ">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex flex-col space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceItem experience={experience} index={index} />
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* <CTA /> */}
    </section>
  );
};

export default About;
