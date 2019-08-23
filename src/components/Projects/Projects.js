import React from "react";
import "./index.css";
import Project from "../Project";
import { projects } from "../../constantes/project";

export default function Projects({ props }) {
  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map(element => {
        return (
          <div className="projects-article">
            <Project project={element} />
          </div>
        );
      })}
    </div>
  );
}
