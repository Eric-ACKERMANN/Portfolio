import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Router>
        <Navigator />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => {
              return <Home />;
            }}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
