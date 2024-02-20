import { Link } from "react-router-dom";

// import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed"></p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>

      <CTA />
    </section>
  );
};

export default Projects;
