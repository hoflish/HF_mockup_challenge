import React from "react";
import { NavLink, Redirect, Route } from "react-router-dom";

import { SettingsPassword, Spinner } from "../../components";
import { useFirebase } from "../../context/firebase-context";
import { useUser } from "../../context/user-context";
import { signInUrl } from "../../routes/constants";

// TODO: arrange routes into an array
const View = ({ match }) => {
  const { firebase } = useFirebase();
  const { user, initializing } = useUser();

  if (initializing) {
    return <Spinner />;
  }
  if (!user) {
    return <Redirect to={signInUrl} />;
  }
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-variable">
          <div className="column is-3">
            <div className="list is-hoverable">
              <NavLink
                to={`${match.url}/profile`}
                activeClassName={"is-active"}
                className="list-item"
              >
                Profile
              </NavLink>
              <NavLink
                to={`${match.url}/password`}
                activeClassName={"is-active"}
                className="list-item"
              >
                Password
              </NavLink>
              <NavLink
                to={`${match.url}/sessions`}
                activeClassName={"is-active"}
                className="list-item"
              >
                Sessions
              </NavLink>
            </div>
          </div>
          <div className="column is-9">
            <Route exact path={match.path}>
              {match.isExact ? <Redirect to={`${match.path}/profile`} /> : null}
            </Route>
            <Route exact path={`${match.path}/profile`} component={Profile} />
            <Route
              exact
              path={`${match.path}/password`}
              render={() => <SettingsPassword firebase={firebase} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function Profile({ match }) {
  return (
    <div>
      <h3>Profile</h3>
    </div>
  );
}

export default View;
