import {REGISTER_NEW_ACCOUNT, AUTHENTICATE_USER} from './actionTypes';
import Dexie from 'dexie';
import {get_gravatar} from '../utils/get_gravatar';

export const registerNewAccount = (data) => ({type: REGISTER_NEW_ACCOUNT, user: data});

export const authenticate = (isLoggedIn, data) => ({
  type: AUTHENTICATE_USER,
  authenticated: isLoggedIn,
  user: data
});

function openDB() {
  const db = new Dexie("myDatabase");
  db.version(1).stores({
    users: '++id,name,email,password,avatar'
  });
  db.open().catch(function (error) {
    console.error(error);
  });
  return db;
}

export function createNewAccount(name, email, password) {

  return function (dispatch) {
    const db = openDB();
    db.users.where('email').equals(email).first((data) => {
      if (typeof data === "object" && data.email === email) {
        console.log(data);
        alert("Email already exists");
        return false
      }
      return true;
    }).then(function (value) {
      return value ? db.users.add({
        name: name,
        email: email,
        password: password,
        avatar: get_gravatar(email, 40)
      }) : undefined;
    }).then(function (user) {
      if (user) {
        db.users.where('id').equals(user).first((data) => {
          console.log(data);
          dispatch(registerNewAccount(data));
          window.location.pathname = '/login';
        });
        db.close();
      } else {
        console.log("Email already exists");
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}


export function logInUser(email, password) {
  return function (dispatch) {
    const db = openDB();
    db.users.where({email: email, password: password}).first(data => {
      if (data === undefined) {
        return false;
      } else {
        dispatch(authenticate(true, data));
        window.location.pathname = "/";
        return data;
      }
    }).then((data) => {
      !data ? alert("Invalid credentials") : console.log("authenticated");
    }).catch((err) => console.log(err))
  }
}

