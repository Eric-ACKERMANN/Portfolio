import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navigator from "./components/Navigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navSmall: false
    };
  }

  handleClickNavSmall = e => {
    this.setState({ navSmall: !this.state.navSmall });
  };
  render() {
    return (
      <Router>
        <Navigator
          navSmall={this.state.navSmall}
          setNavSmall={this.handleClickNavSmall}
        />
        <Switch>
          <Route
            exact={true}
            path="/"
            render={props => {
              return <Home />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
