import {CHANGE_AUTH} from './actionTypes';


export const authenticate = isLoggedIn => ({type: CHANGE_AUTH, payload: isLoggedIn});

