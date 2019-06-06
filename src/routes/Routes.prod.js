import React from "react";
import { Route, Switch } from "react-router-dom";

const baseUrl = "/";
const aboutUrl = `${baseUrl}about/`;
const contactUrl = `${baseUrl}contact/`;
const accountUrl = `${baseUrl}account/`;
const loginUrl = `${baseUrl}login/`;
const registerUrl = `${baseUrl}register/`;

const Routes = () => (
  <Switch>
    <Route exact path={baseUrl} component={() => null} />
    <Route path={aboutUrl} component={() => null} />
    <Route path={contactUrl} component={() => null} />
    <Route path={accountUrl} component={() => null} />
    <Route path={loginUrl} component={() => null} />
    <Route path={registerUrl} component={() => null} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
