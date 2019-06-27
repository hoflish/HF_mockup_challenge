import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { baseUrl } from "../../routes/constants";
import { PasswordForgotForm, Spinner } from "../../components";
import { useFirebase } from "../../context/firebase-context";
import { useUser } from "../../context/user-context";

const View = () => {
  const [message, setMessage] = useState("");
  const { firebase } = useFirebase();
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
            <div className="column password-reset-form" style={styles.form}>
              {message ? (
                <div className="column box notify-msg">
                  <h1 className="title is-6 has-text-weight-semibold">
                    Check your email
                  </h1>
                  <p className="subtitle is-6">{message}</p>
                </div>
              ) : null}
              <div style={{ marginBottom: "20px" }}>
                <h1 className="is-size-4">Forgot your password?</h1>
                <p style={styles.text}>
                  Enter your email address to reset your password. You may need
                  to check your spam folder.
                </p>
              </div>
              <PasswordForgotForm
                firebase={firebase}
                onEmailSent={value => setMessage(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  form: { width: "500px", margin: "0 auto" },
  text: { fontSize: "13px", margin: "10px 0" }
};

export default View;
