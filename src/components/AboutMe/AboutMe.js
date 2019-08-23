import React from "react";
import "./index.css";
import browser from "../../svg/browser-white(2).svg";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="container aboutme">
        <h2>About Me</h2>
        <section>
          <article>
            <div>
              <span>Present</span>
              <p>
                I finished my bootcamp training at Le Reacteur in Paris. It is a
                bootcamp focused on a fullstack formation using
                JS/Node.js/React/React Nativ/MongoDB. Making us able to deal the
                back end and the front end for a website/web app/mobil app using
                Javascript and particullary the library React and React Nativ.
              </p>
            </div>
            <div>
              <span>Past</span>
              <p>
                I graduated from schhol as civil engineer and worked for 6 years
                as a construction site manager. Planning, orchestring, checking
                how the construction goes everyday was my routine. I kind of
                felt that my growth had stopped, so I wanted to go back to the
                basics of my engineer skills, which is to solve logical problems
                everyday and keep learning everyday.
              </p>
            </div>
          </article>
          <article>
            <div>
              <i className="fas fa-hard-hat" />
              <i className="far fa-map" />
              <i className="fas fa-building" />
            </div>
            <div>
              <i className="fas fa-long-arrow-alt-right" />
            </div>
            <div>
              <i className="fas fa-user" />
              <i className="fas fa-laptop-code" />
              <img src={browser} alt="browser" />
            </div>
          </article>
        </section>
      </div>
    );
  }
}
