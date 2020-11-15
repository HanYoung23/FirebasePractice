import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = (isLoggedIn) => {
  const login = isLoggedIn.isLoggedIn;
  return (
    <Router>
      <Switch>
        {login ? (
          <Route exact path="/">
            <Home></Home>
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
