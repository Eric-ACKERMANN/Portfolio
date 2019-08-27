import React from "react";
import "./index.css";
import LinkSmooth from "../../reactComponent/Link";

export default function Navigator({ navSmall, setNavSmall }) {
  const listOfLink = (
    <ul className="navigator-ul navigator-lg">
      <li>
        <LinkSmooth id="aboutMe" position="start" behavior="smooth">
          ABOUT ME
        </LinkSmooth>
      </li>
      <li>
        <LinkSmooth id="projects" position="start" behavior="smooth">
          PROJECTS
        </LinkSmooth>
      </li>
      <li>
        <LinkSmooth id="skills" position="start" behavior="smooth">
          SKILLS
        </LinkSmooth>
      </li>
      <li>
        <LinkSmooth id="contact" position="start" behavior="smooth">
          CONTACT
        </LinkSmooth>
      </li>
    </ul>
  );

  console.log(window.innerWidth);
  return (
    <nav>
      <div className="container navigator">
        <ul className="navigator-ul navigator-lg">
          <li>
            <LinkSmooth id="aboutMe" position="start" behavior="smooth">
              ABOUT ME
            </LinkSmooth>
          </li>
          <li>
            <LinkSmooth id="projects" position="start" behavior="smooth">
              PROJECTS
            </LinkSmooth>
          </li>
          <li>
            <LinkSmooth id="skills" position="start" behavior="smooth">
              SKILLS
            </LinkSmooth>
          </li>
          <li>
            <LinkSmooth id="contact" position="start" behavior="smooth">
              CONTACT
            </LinkSmooth>
          </li>
        </ul>
        <ul className="navigator-ul navigator-sm">
          <li>
            <i
              className={navSmall ? "fas fa-times" : "fas fa-bars"}
              onClick={() => setNavSmall()}
            ></i>
          </li>
        </ul>
      </div>
      <div className={navSmall ? "navSmallVisible" : "navSmallInvisible"}>
        {listOfLink}
      </div>
      }
    </nav>
  );
}
