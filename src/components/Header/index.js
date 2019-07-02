import React from "react";
import { Link } from "react-router-dom";

import { signInUrl, signUpUrl, settingsUrl } from "../../routes/constants";
import { FirebaseConsumer } from "../../context/firebase-context";
import { Avatar, CircleLoader } from "..";

class Header extends React.Component {
  state = {
    isMobile: false
  };

  hideMobileMenu = () => {
    if (this.state.isMobile) {
      this.setState({ isMobile: false });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.hideMobileMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.hideMobileMenu);
  }

  toggleMobileMenu = () => {
    this.setState({ isMobile: !this.state.isMobile });
  };

  renderAuthButtons = context => {
    const { isMobile } = this.state;
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
          {!isMobile && <Avatar photoUrl={user.photoUrl} />}
          <div className="navbar-dropdown is-right">
            <Link to={settingsUrl} className="navbar-item">
              Settings
            </Link>

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
    const { isMobile } = this.state;
    return (
      <FirebaseConsumer>
        {context => (
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a
                onClick={this.toggleMobileMenu}
                role="button"
                className={`navbar-burger burger ${
                  isMobile ? "is-active" : ""
                }`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
              <a className="navbar-item" href="/">
                <img src="#" width="112" height="28" alt="IdeaDate" />
              </a>
            </div>

            <div
              id="navbarBasicExample"
              className={`navbar-menu ${isMobile ? "is-active" : ""}`}
            >
              <div className="navbar-start" />
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
