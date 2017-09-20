import {REGISTER_NEW_ACCOUNT, AUTHENTICATE_USER} from "../actions/actionTypes";

let initialState = {
  authenticated: false,
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NEW_ACCOUNT:
      return Object.assign({}, state, {user: action.user});
    case AUTHENTICATE_USER:
      return Object.assign({}, state, {user: action.user}, {authenticated: action.authenticated})
  }
  return state;
};

export default AuthReducer;
