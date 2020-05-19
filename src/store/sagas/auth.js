import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

// the star turns the function into a 'generator', a next gen feature, allows you to time functions to wait for async code
export function* logoutSaga (action) {

    //yield forces the function to wait until the completion of each line before moving on
    yield localStorage.removeItem('Token');
    yield localStorage.removeItem('ExpirationDate');
    yield localStorage.removeItem('userId');




    // put dispatches a new action
    yield put(actions.logoutSucceed());
}


export function* checkAuthTimeoutSaga (action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout()); 
}

export function* authUserSaga (action) {
    yield put(actions.authStart());

    const authData = {
      email: action.email,
      password: action.password,
      returnSecureToken: true
    }

    let url  = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaokXeHt_aprQR4Kryzf0nHcs6z0LOHnA';

    if(action.isSignup === 'signUp'){
       url  = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaokXeHt_aprQR4Kryzf0nHcs6z0LOHnA';

    }

    try {
        // by using yield, response will hold whether the post returns it's promise resolved or not 
        const response = yield axios.post(url, authData )
        
            // Code to ensure token persists in local storage, keeping user logged in despite page refresh
        const expirationDate = yield new Date(new Date().getTime() + (response.data.expiresIn * 1000));
        yield localStorage.setItem('Token', response.data.idToken); 
        yield localStorage.setItem('ExpirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        
        yield put(actions.authSuccess(response.data.idToken, response.data.localId ));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
        yield put(actions.initUserLocation());
    }  catch(err) {
        yield put(actions.authFail(err.response.data.error))

    }
    
  
}

export function* authCheckStateSaga(action) { 
    const token = yield localStorage.getItem('Token');
    if(!token){
      yield put(actions.logout());
    } else {
      const expirationDate = yield new Date(localStorage.getItem('ExpirationDate'));
        if(expirationDate <= new Date()) {
          yield put(actions.logout());
        } else {
          const userId = yield localStorage.getItem('userId');
          yield put(actions.authSuccess(token, userId));
          yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }

    }
}