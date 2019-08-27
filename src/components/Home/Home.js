import React from "react";
import "./index.css";

import Introduction from "../Introduction";
import AboutMe from "../AboutMe";
import Contact from "../Contact";

import Skills from "../Skills";
import Projects from "../Projects";

export default class Home extends React.Component {
  state = {
    form: { name: "", email: "", message: "" },
    navSmall: false
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.formValue);
  };

  handleChangeForm = (e, key) => {
    let form = { ...this.state.form };
    form[key] = e;
    this.setState({ form: form });
  };

  render() {
    return (
      <div className="home">
        <section id="introduction">
          <Introduction />
        </section>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact
            formValue={this.state.form}
            handleSubmit={this.handleSubmit}
            setForm={this.handleChangeForm}
          />
        </section>
        {/* <section>
          <Hobby />
        </section> */}
      </div>
    );
  }
}
