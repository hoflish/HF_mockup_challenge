import {REGISTER_NEW_ACCOUNT} from './actionTypes';
import Dexie from 'dexie';

export const registerNewAccount = (data) => ({type: REGISTER_NEW_ACCOUNT, user: data});

function openDB() {
  const db = new Dexie("myDatabase");
  db.version(1).stores({
    users: '++id,name,email,password'
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
      if(typeof data === "object" && data.email === email) {
        console.log(data);
        alert("Email already exists");
        return false
      }
      return true;
    }).then(function (value) {
      return value ? db.users.add({
        name: name,
        email: email,
        password: password
      }) : undefined;
    }).then(function (user) {
      if (user) {
        db.users.where('id').equals(user).first((data) => {
          console.log(data);
          dispatch(registerNewAccount(data));
          window.localStorage.setItem('loggedIn', true);
          window.location.pathname = '/login';
        });

      } else {
        console.log("Email already exists");
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
}
