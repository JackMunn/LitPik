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
  return dispatch => {
    navigator.geolocation.getCurrentPosition(PositionFound);
    function PositionFound(position) {
      localStorage.setItem('lng',position.coords.longitude );
      localStorage.setItem('lat',position.coords.latitude );


      dispatch(setLocation(position.coords.longitude,position.coords.latitude));
      console.log('[Action Store]');
    }
  }
}




export const onSessionAdd = () => {
  return {
    type: actionTypes.SESSION_ADD,
  }
}