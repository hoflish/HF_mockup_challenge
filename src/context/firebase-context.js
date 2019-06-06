import React from "react";

import Firebase from "../firebase";

const FirebaseContext = React.createContext();

function FirebaseProvider(props) {
  return <FirebaseContext.Provider value={new Firebase()} {...props} />;
}

function useFirebase() {
  const context = React.useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error(`useFirebase must be used within a FirebaseProvider`);
  }
  return context;
}

export { FirebaseProvider, useFirebase };
