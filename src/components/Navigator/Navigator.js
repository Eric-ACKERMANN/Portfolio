import React from "react";
import "./index.css";

export default function Navigator(props) {
  return (
    <nav>
      <div className="container navigator">
        <ul>
          <li>Logo</li>
        </ul>
        <ul className="navigator-ul">
          <li>ABOUT ME</li>
          <li>PROJECTS</li>
          <li>SKILLS</li>
          <li>CONTACT ME</li>
          <li>FUN</li>
        </ul>
      </div>
    </nav>
  );
}
