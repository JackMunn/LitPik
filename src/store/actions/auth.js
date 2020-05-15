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

  localStorage.removeItem('Token');
  localStorage.removeItem('ExpirationDate');
  localStorage.removeItem('userId');


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

    if(method === 'signUp'){
       url  = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaokXeHt_aprQR4Kryzf0nHcs6z0LOHnA';

    }

    axios.post(url, authData )
      .then(
        response => {
          // Code to ensure token persists in local storage, keeping user logged in despite page refresh
          const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000));
          localStorage.setItem('Token', response.data.idToken); 
          localStorage.setItem('ExpirationDate', expirationDate);
          localStorage.setItem('userId', response.data.localId);
          
          
          dispatch(authSuccess(response.data.idToken, response.data.localId ));
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
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('Token');
    if(!token){
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('ExpirationDate'));
        if(expirationDate <= new Date()) {
          dispatch(logout());
        } else {
          const userId = localStorage.getItem('userId');
          dispatch(authSuccess(token, userId));
          dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }

    }

  }
}