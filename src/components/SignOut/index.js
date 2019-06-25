import React from "react";

import { useFirebase } from "../../context/firebase-context";

const SignOutButton = () => {
  const firebase = useFirebase();
  retrun(
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
