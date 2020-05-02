import * as actionTypes from './actionTypes';
import axios from 'axios';

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
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000) // Timeout expects ms , Firebase expireIn is in seconds
  }
}

export const auth = (email, password, method) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email,
      password,
      returnSecureToken: true
    }

    let url  = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaokXeHt_aprQR4Kryzf0nHcs6z0LOHnA';

    if(method == 'signUp'){
       url  = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaokXeHt_aprQR4Kryzf0nHcs6z0LOHnA';

    }

    axios.post(url, authData )
      .then(
        response => {
          console.log(response);
          dispatch(authSuccess(response.data.idToken, response.data.localId));
          dispatch(checkAuthTimeout(response.data.expiresIn))
        }
      )
      .catch(
        err => {
          console.log(err);
          dispatch(authFail(err.response.data.error))
        }
      )
  };
}