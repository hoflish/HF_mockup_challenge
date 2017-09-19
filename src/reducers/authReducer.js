import {CHANGE_AUTH} from "../actions/actionTypes";

const AuthReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }
  return state;
};

export default AuthReducer;
