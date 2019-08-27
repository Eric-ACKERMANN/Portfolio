import React from "react";

export default class LinkSmooth extends React.Component {
  state = {};

  scrollingMethod = (id, position, behavior) => {
    let linkHTML = document.getElementById(id);
    if (linkHTML) {
      linkHTML.scrollIntoView({ block: position, behavior: behavior });
    }
  };

  handleClick = (event, id, position, behavior) => {
    this.scrollingMethod(id, position, behavior);
    event.preventDefault();
  };

  render() {
    const { id, position, behavior } = this.props;
    return (
      <a
        href={`#${id}`}
        onClick={event => this.handleClick(event, id, position, behavior)}
      >
        {this.props.children}
      </a>
    );
  }
}
