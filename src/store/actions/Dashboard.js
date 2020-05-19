import * as actionTypes from './actionTypes.js';


export const onCalculateDashboardStats = (cans, bottles) => {
  return {
    type: actionTypes.CALCULATE_DASHBOARD_STATS,
    cans: cans,
    bottles: bottles,
    isLoading: false,
  }
}

export const initCalcStats = (tokenProp, userId) => {
  return {
    type: actionTypes.INIT_CALC_STATS,
    tokenProp,
    userId
  }
  
}