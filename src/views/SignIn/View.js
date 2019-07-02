import React from "react";
import { Link, Redirect } from "react-router-dom";

import { useFirebase } from "../../context/firebase-context";
import { useUser } from "../../context/user-context";
import { baseUrl, signUpUrl, passwordResetUrl } from "../../routes/constants";
import { Spinner, SignInForm } from "../../components";

const View = () => {
  const { firebase } = useFirebase();
  const { user, initializing } = useUser();

  if (initializing) {
    return <Spinner />;
  }
  if (user) {
    return <Redirect to={baseUrl} />;
  }
  return (
    <section className="section">
      <div className="hero-body">
        <div className="container">
          <div className="is-5-tablet is-4-desktop is-3-widescreen">
            <div className="column he-signup-form">
              <div style={{ marginBottom: "20px" }}>
                <h3 className="title is-3">Sign in</h3>
                <p className="subtitle is-6">
                  or <Link to={signUpUrl}>create an account</Link>
                </p>
              </div>
              <SignInForm firebase={firebase} />
              <p
                className="subtitle is-6 has-text-centered"
                style={{ marginTop: "16px" }}
              >
                <Link to={passwordResetUrl}>Forgot your password?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
