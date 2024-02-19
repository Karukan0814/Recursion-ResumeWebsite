import React from "react";
import { Link } from "react-router-dom";
import { arrow, github } from "../assets/icons";

const ProjectCard = ({ project }) => {
  return (
    <div className=" px-3 py-2  lg:w-[400px] w-full card" key={project.name}>
      <div className="flex justify-between">
        <div className="text-blue-800 text-sm">
          {project.type.toUpperCase()}
        </div>
        <div className="flex justify-end space-x-1">
          {project.skills.map((skill, index) => (
            <div className="flex justify-center items-center">
              <img
                src={skill}
                alt={`skill${index}`}
                className="w-8 h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
        <p className="mt-2 text-slate-500">{project.description}</p>

        <div className="flex justify-between">
          <div className="mt-5 flex items-center gap-2 font-poppins">
            {project.link ? (
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Live Link
              </Link>
            ) : (
              <span className="font-semibold text-gray-400">Live Link</span>
            )}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </div>
          <Link to={project.github} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-center items-center">
              <img
                src={github}
                alt={`github${project.name}`}
                className="w-8 h-8 object-contain"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
