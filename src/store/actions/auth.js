import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
};

export const logout = () => {

  return {
    type: actionTypes.AUTH_INIT_LOGOUT,
  };
};

export const logoutSucceed = () => { 
  return {
    type: actionTypes.AUTH_LOGOUT,
  }
}

export const checkAuthTimeout = (expirationTime) => {
 return { 
   type: actionTypes.AUTH_CHECK_TIMEOUT,
   expirationTime: expirationTime,
 }
}

export const auth = (email, password, method) => {
  return {
    type: actionTypes.AUTH_USER,
    email, 
    password,
    isSignup: method
  }
};

export const authCheckState = () => {
  return {
    type: actionTypes.AUTH_CHECK_STATE,
    
  }
}