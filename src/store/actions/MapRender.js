import * as actionTypes from './actionTypes.js';

// this fn gets called once the asyncronous api call has been made
export const setLocation = (lng, lat) => {
  return {
    type: actionTypes.SET_LOCATION,
    lng: lng,
    lat: lat,
  }
}

export const initUserLocation = () => {
  return {
    type: actionTypes.INIT_USER_LOCATION
  }
}


export const onSessionAdd = () => {
  return {
    type: actionTypes.SESSION_ADD,
  }
}