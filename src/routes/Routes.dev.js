import React from "react";
import { Route, Switch } from "react-router-dom";

import DevTools from "../containers/DevTools";
import { Home } from "../views/Home";

const baseUrl = "/";
const aboutUrl = `${baseUrl}about/`;
const contactUrl = `${baseUrl}contact/`;
const accountUrl = `${baseUrl}account/`;
const loginUrl = `${baseUrl}login/`;
const registerUrl = `${baseUrl}register/`;

const Routes = () => (
  <Switch>
    <Route exact path={baseUrl} component={Home} />
    <Route path={aboutUrl} component={() => <div>about</div>} />
    <Route path={contactUrl} component={() => <div>contact</div>} />
    <Route path={accountUrl} component={() => <div>account</div>} />
    <Route path={loginUrl} component={() => <div>login</div>} />
    <Route path={registerUrl} component={() => <div>register</div>} />
    <Route component={() => <div>Not found</div>} />
    <DevTools />
  </Switch>
);

export default Routes;
