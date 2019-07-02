import React from "react";
import { Route, Switch } from "react-router-dom";

import DevTools from "../containers/DevTools";
import * as ROUTES from "./constants";
import { Home } from "../views/Home";
import { SignUp } from "../views/SignUp";
import { SignIn } from "../views/SignIn";
import { PasswordReset } from "../views/PasswordReset";
import { Settings } from "../views/Settings";

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.baseUrl} component={Home} />
    {/*<Route path={ROUTES.restaurantsUrl} component={Restaurant} />*/}
    {/*<Route path={ROUTES.aboutUrl} component={() => <div>about</div>} />*/}
    {/*<Route path={ROUTES.contactUrl} component={() => <div>contact</div>} />*/}
    <Route path={ROUTES.settingsUrl} component={Settings} />
    <Route path={ROUTES.signInUrl} component={SignIn} />
    <Route path={ROUTES.signUpUrl} component={SignUp} />
    <Route path={ROUTES.passwordResetUrl} component={PasswordReset} />
    <Route component={() => <div>Not found</div>} />
    <DevTools />
  </Switch>
);

export default Routes;
