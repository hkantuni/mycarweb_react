import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Pagebig } from "./Pagebig";
import { Pagesmall } from "./Pagesmall";
import "./styles.css";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/large" exact component={Pagebig} />
        <Route path="/small" exact component={Pagesmall} />
      </Switch>
    </Router>
  );
}
