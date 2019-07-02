import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.auth = firebase.auth;
  }

  get currentUser() {
    return this.auth().currentUser;
  }

  getCredential = password => {
    return this.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      password
    );
  };

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth().createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth().signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth().signOut();

  doPasswordReset = email => this.auth().sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.currentUser.updatePassword(password);

  doReauthenticationWithCredential = credential =>
    this.currentUser.reauthenticateWithCredential(credential);
}

export default Firebase;
