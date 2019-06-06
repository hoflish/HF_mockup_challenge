import React from "react";

import Firebase from "../firebase";

const FirebaseContext = React.createContext();

function FirebaseProvider(props) {
  const [user, setUser] = React.useState(null);

  return (
    <FirebaseContext.Provider value={[user, setUser, new Firebase()]} {...props} />
  );
}

function useFirebase() {
  const context = React.useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error(`useFirebase must be used within a FirebaseProvider`);
  }
  const [user, setUser, firebase] = context;

  return {
    user,
    setUser,
    firebase
  };
}

export { FirebaseProvider, useFirebase };
