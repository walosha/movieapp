import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import { Container } from "./component/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:movie" exact component={SingleMovie} />
        </Switch>
      </Router>
    );
  }
}

export default App;
