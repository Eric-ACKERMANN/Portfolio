import React from "react";
import "./index.css";

import Introduction from "../Introduction";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Hobby from "../Hobby";
import Skills from "../Skills";
import Projects from "../Projects";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section>
          <Introduction />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Hobby />
        </section>
      </div>
    );
  }
}
