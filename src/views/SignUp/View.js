import React from "react";
import { Redirect } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm";
import { useFirebase } from "../../context/firebase-context";
import { useUser } from "../../context/user-context";
import { baseUrl } from "../../routes/constants";
import { Loader } from "../../components";

const View = () => {
  const { firebase } = useFirebase();
  const { user, initializing } = useUser();

  if (initializing) {
    return <Loader />;
  }
  if (user) {
    return <Redirect to={baseUrl} />;
  }
  return (
    <section className="section">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
            <div className="column he-signup-form">
              <SignUpForm firebase={firebase} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default View;
