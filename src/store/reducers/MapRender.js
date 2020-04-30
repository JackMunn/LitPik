import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lat: null,
  lng: null,
  sessionTotal: 0,
}



const reducer = (state = initialState, action) => {


  switch(action.type){
   
    case actionTypes.SET_LOCATION : 
     console.log('[Reducer] Save Loc fired');
      return  {
        ...state,
        lng: action.lng,
        lat: action.lat,
      }

    case actionTypes.SESSION_ADD:
      return{
        ...state,
        sessionTotal: state.sessionTotal + 1,
      }
      
      default: {
        return {
         ...state
        }
      }
  }
  
}
  
  





export default reducer;