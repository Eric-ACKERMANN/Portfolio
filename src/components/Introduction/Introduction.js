import React from "react";
import photo from "../../img/photo.jpg";
import "./index.css";

export default class Introduction extends React.Component {
  render() {
    return (
      <div className="container introduction">
        <figure className="introduction-figure">
          <img src={photo} alt="Profil" className="introduction-img" />
        </figure>
        <article className="introduction-article">
          <h3>Hi, I'm Eric</h3>
          <h3>Web developer Fullstack based in Paris</h3>
        </article>
      </div>
    );
  }
}
