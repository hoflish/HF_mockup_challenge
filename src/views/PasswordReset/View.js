import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { baseUrl, signInUrl } from "../../routes/constants";
import { PasswordResetForm, Spinner } from "../../components";
import { useUser } from "../../context/user-context";

// TODO: use global notification

const View = () => {
  const [message, setMessage] = useState("");
  const { initializing, user } = useUser();

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
            <div className="column he-password-reset-form">
              {message ? (
                <div className="column box notify-msg">
                  <h1 className="title is-6 has-text-weight-semibold">
                    Check your email
                  </h1>
                  <p className="subtitle is-6">{message}</p>
                </div>
              ) : null}
              <div className="he-margin-bottom--lg">
                <h1 className="is-size-4">Forgot your password?</h1>
                <p className="is-size-6" style={{ margin: "8px 0" }}>
                  Enter your email address and we will send you a link to reset
                  your password.
                </p>
              </div>
              <div style={{ minHeight: "100px" }}>
                <PasswordResetForm onEmailSent={value => setMessage(value)} />
              </div>
              <p className="has-text-centered he-text-underline he-margin-top--sm">
                <Link to={signInUrl}>Back to sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
