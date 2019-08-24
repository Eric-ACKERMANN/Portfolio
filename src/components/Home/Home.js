import React from "react";
import "./index.css";

import Introduction from "../Introduction";
import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Hobby from "../Hobby";
import Skills from "../Skills";
import Projects from "../Projects";

export default class Home extends React.Component {
  state = {
    formName: "",
    formEmail: "",
    formMessage: ""
  };
  handleSubmit = () => {
    console.log(this.state.formValue);
  };

  handleChangeName = e => {
    this.setState({ formName: e });
  };
  handleChangeEmail = e => {
    this.setState({ formEmail: e });
  };
  handleChangeMessage = e => {
    this.setState({ formMessage: e });
  };
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
          <Contact
            name={this.state.formName}
            email={this.state.formEmail}
            message={this.state.formMessage}
            handleSubmit={this.handleSubmit}
            setName={this.handleChangeName}
            setEmail={this.handleChangeEmail}
            setMessage={this.handleChangeMessage}
          />
        </section>
        <section>
          <Hobby />
        </section>
      </div>
    );
  }
}
