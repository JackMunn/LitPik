import * as actionTypes from '../actions/actionTypes';

const initialState = {
  showSidedraw: false,
}

const navBarReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.TOGGLE_SIDEDRAW: 
      return {
        ...state,
        showSidedraw: !state.showSidedraw,
      }
    case actionTypes.CLOSE_SIDEDRAW:
      return {
        ...state,
        showSidedraw: false,
      }
      default: {
        return {
         ...state
        }
      }
  }

}

export default navBarReducer; 