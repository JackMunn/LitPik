import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cans: 0,
  bottles: 0,
  isLoading: true,
}


const dashboardReducer = (state= initialState, action) => {

  switch(action.type) {
    case actionTypes.CALCULATE_DASHBOARD_STATS: 
      return {
        ...state,
        bottles: action.bottles,
        cans: action.cans,
        isLoading: action.isLoading,
      }
  
    
      default: {
        return {
         ...state
        }
      }
  }
}

export default dashboardReducer;