import React from "react";
import "./index.css";
import Skill from "../Skill";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="container skills">
        <h2>Skills</h2>
        <div>
          <Skill
            logo={<i className="fab fa-html5 fa-4x" />}
            text="HTML"
            className="skill"
          />
          <Skill
            logo={<i className="fab fa-css3-alt fa-4x" />}
            text="CSS"
            className="skill"
          />
          <Skill
            logo={<i className="fab fa-js-square fa-4x" />}
            text="JavaScript"
            className="skill"
          />
          <Skill
            logo={<i className="fab fa-node-js fa-4x" />}
            text="NodeJs"
            className="skill"
          />
          <Skill
            logo={<i className="fab fa-react fa-4x" />}
            text="ReactJs"
            className="skill"
          />
          <Skill
            logo={<i className="fab fa-react fa-4x" />}
            text="React Nativ"
            className="skill"
          />
        </div>
      </div>
    );
  }
}
