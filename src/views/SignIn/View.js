import React from "react";

import SignInForm from "../../components/SignInForm";
import { useFirebase } from "../../context/firebase-context";

const View = () => {
  const { firebase } = useFirebase();
  return (
    <>
      <h1>SignIn</h1>
      <SignInForm firebase={firebase} />
    </>
  );
};

export default View;
