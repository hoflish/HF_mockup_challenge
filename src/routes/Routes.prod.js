import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "../views/Home";
import { Restaurant } from "../views/Restaurant";
import { SignUp } from "../views/SignUp";

const baseUrl = "/";
const aboutUrl = `${baseUrl}about/`;
const contactUrl = `${baseUrl}contact/`;
const accountUrl = `${baseUrl}account/`;
const loginUrl = `${baseUrl}login/`;
const signUpUrl = `${baseUrl}signup/`;
const restaurantsUrl = `${baseUrl}restaurants/:id/`;

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={baseUrl} component={Home} />
      <Route path={restaurantsUrl} component={Restaurant} />
      <Route path={aboutUrl} component={() => <div>about</div>} />
      <Route path={contactUrl} component={() => <div>contact</div>} />
      <Route path={accountUrl} component={() => <div>account</div>} />
      <Route path={loginUrl} component={() => <div>login</div>} />
      <Route path={signUpUrl} component={SignUp} />
      <Route component={() => <div>Not found</div>} />
    </Switch>
  </Router>
);

export default Routes;
