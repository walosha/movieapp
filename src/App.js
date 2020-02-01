import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import Error404 from "./pages/Error404";
import { Footer } from "./component/Footer";
import { Container } from "./component/GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genres/:id" exact component={Home} />
          <Route path="/:movie" exact component={SingleMovie} />
          <Route path="/" component={Error404} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
