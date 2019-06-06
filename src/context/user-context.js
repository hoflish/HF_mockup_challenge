import React, { useEffect } from "react";
import { useFirebase } from "./firebase-context";

const UserContext = React.createContext();

function UserProvider(props) {
  const { user, setUser, firebase } = useFirebase();

  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged(authUser => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      listener();
    };
  });

  return <UserContext.Provider value={user} {...props} />;
}

function useUser() {
  const context = React.useContext(UserProvider);
  if (context === undefined) {
    throw new Error(`useFirebase must be used within a FirebaseProvider`);
  }
  return context;
}

export { UserProvider, useUser };
