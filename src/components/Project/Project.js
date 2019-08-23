import React from "react";
import "./index.css";

export default function Project({ project }) {
  const { image, title, type, summary, linkToSite, linkToRoute } = project;
  return (
    <article className="project container">
      <div className="project-imageBlock">
        <img className="project-image" src={image} alt={title} />
      </div>
      <div className="project-description">
        <h4>
          {title}
          <span className="badge">{type}</span>
        </h4>
        <p>{summary}</p>
        <div>
          <button className="button-primary animated-button victoria-three">
            Learn More
          </button>
          <button className="button-secondary animated-button victoria-three">
            Visit Site
          </button>
        </div>
      </div>
    </article>
  );
}
