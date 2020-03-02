import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./containers/home";
import Dash from "./containers/dash";

import { RootProvider } from "./core/_root";

export default () => {
  return (
    <RootProvider>
      <Link to="home">Home</Link> |{"   "}
      <Link to="dash">Dashboard</Link>
      <Router>
        <Home path="home" />
        <Dash path="dash" />
      </Router>
    </RootProvider>
  );
};
