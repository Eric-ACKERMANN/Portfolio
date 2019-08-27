import React from "react";
import "./index.css";

export default function Project({ project }) {
  const { image, title, type, catchPhrase, linkToSite, linkToRoute } = project;
  return (
    <figure className="project">
      <img className="project-image" src={image} alt={title} />
      <figcaption>
        <h1>{catchPhrase}</h1>
        <span className="badge">{type}</span>
        <div>
          <button className="button-primary">
            <a href={linkToSite}>Link to the site</a>
          </button>
          <button className="button-secondary">
            <a href={linkToRoute}>Learn More..</a>
          </button>
        </div>
      </figcaption>
    </figure>
  );
}

// <article className="project container">
// <div className="project-imageBlock">
//   <img className="project-image" src={image} alt={title} />
// </div>
// <div className="project-description">
//   <h4>
//     {title}
//     <span className="badge">{type}</span>
//   </h4>
//   <p>{summary}</p>
//   <div>
//     <button className="button-primary">Learn More</button>
//     <button className="button-secondary">Visit Site</button>
//   </div>
// </div>
// </article>
