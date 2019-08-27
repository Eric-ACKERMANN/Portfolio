import React from "react";
import "./index.css";
import Project from "../Project";
import { projects } from "../../constantes/project";

export default function Projects({ props }) {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((element, index) => {
          return <Project project={element} key={index} />;
        })}
      </div>
    </div>
  );
}

// export default function Projects({ props }) {
//   return (
//     <div className="projects container">
//       <h2>Projects</h2>
//       {projects.map((element, index) => {
//         return (
//           <div key={index} className="projects-article">
//             <Project project={element} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
