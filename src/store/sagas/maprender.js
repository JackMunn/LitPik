import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/index';

const getUserLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
     location => resolve(location),
     error => reject(error),
    )
   })

export function* initUserLocationSaga (action){
     
       const position = yield call(getUserLocation);
       yield localStorage.setItem('lng',position.coords.longitude );
       yield localStorage.setItem('lat',position.coords.latitude );
       yield put(actions.setLocation(position.coords.longitude,position.coords.latitude));
    
}