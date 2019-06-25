import React, { useEffect } from "react";

import Firebase from "../firebase";

const FirebaseContext = React.createContext();

function FirebaseProvider(props) {
  const firebase = new Firebase();
  const [state, setState] = React.useState(() => {
    const user = firebase.auth.currentUser;
    return {
      initializing: !user,
      user
    };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return <FirebaseContext.Provider value={[state, firebase]} {...props} />;
}

function useFirebase() {
  const context = React.useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error(`useFirebase must be used within a FirebaseProvider`);
  }
  const [state, firebase] = context;

  return {
    state,
    firebase
  };
}

export { FirebaseProvider, useFirebase };
