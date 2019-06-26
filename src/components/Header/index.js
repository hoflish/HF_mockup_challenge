import React from "react";
import { Link } from "react-router-dom";

import { signInUrl, signUpUrl } from "../../routes/constants";

import "./header.scss";
import { FirebaseConsumer } from "../../context/firebase-context";
import { Avatar } from "..";
import CircleLoader from "../CircleLoader";

class Header extends React.Component {
  renderAuthButtons = context => {
    const {
      state: { user, initializing },
      firebase
    } = context;

    if (initializing) {
      return <CircleLoader />;
    }
    if (user) {
      return (
        <div className="navbar-item has-dropdown is-hoverable">
          <a>
            <Avatar photoUrl={user.photoUrl} />
          </a>
          <div className="navbar-dropdown is-right">
            <a className="navbar-item">About</a>
            <a className="navbar-item">Jobs</a>
            <a className="navbar-item">Contact</a>
            <hr className="navbar-divider" />
            <button
              id="he-signout-button"
              className="navbar-item"
              onClick={firebase.doSignOut}
            >
              Sign out
            </button>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <Link className="button is-primary" to={signUpUrl}>
          <strong>Sign up</strong>
        </Link>
        <Link className="button is-light" to={signInUrl}>
          Sign in
        </Link>
      </React.Fragment>
    );
  };
  render() {
    return (
      <FirebaseConsumer>
        {context => (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="#" width="112" height="28" alt="IdeaDate" />
              </a>

              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>

                <a className="navbar-item">Documentation</a>

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">More</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Jobs</a>
                    <a className="navbar-item">Contact</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Report an issue</a>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    {this.renderAuthButtons(context)}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </FirebaseConsumer>
    );
  }
}

export default Header;
