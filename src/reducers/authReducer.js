import {REGISTER_NEW_ACCOUNT} from "../actions/actionTypes";

let initialState = {
  authenticated: false,
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_NEW_ACCOUNT:
      return Object.assign({}, state, {user: action.user})
  }
  return state;
};

export default AuthReducer;
