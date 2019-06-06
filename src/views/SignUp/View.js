import React from "react";
import { Redirect } from "react-router-dom";

import SignUpForm from "../../components/SignUpForm";
import { useFirebase } from "../../context/firebase-context";
import { baseUrl } from "../../routes/constants";

const View = () => {
  const { firebase, user, setUser } = useFirebase();
  if (user) {
    // TODO: redirect to previous autheticated path
    return <Redirect to={baseUrl} />;
  }
  return (
    <>
      <h1>SignUp</h1>
      <SignUpForm firebase={firebase} setUser={setUser} />
    </>
  );
};

export default View;
