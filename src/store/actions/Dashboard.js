import * as actionTypes from './actionTypes.js';
import axios from 'axios';


export const onCalculateDashboardStats = (cans, bottles) => {
  return {
    type: actionTypes.CALCULATE_DASHBOARD_STATS,
    cans: cans,
    bottles: bottles,
    isLoading: false,
  }
}

export const initCalcStats = (tokenProp, userId) => {
  let tempCans = 0;
  let tempBottles =0;
  
  let  token = tokenProp;
  if(!tokenProp){
    token = localStorage.getItem('Token');
  }

  const queryParams = `auth=${token}&orderBy="userId"&equalTo="${userId}"`;

  

  return dispatch => {
    axios.get(`https://litterapp-21386.firebaseio.com/test.json?${queryParams}`).then(response => {
      for(let key in response.data){

        if(response.data[key].rubbishType === 'can') {
          tempCans++; 
        } 
        if(response.data[key].rubbishType === 'bottle') {
          tempBottles++;
        }
      }
      dispatch(onCalculateDashboardStats(tempCans,tempBottles));  
    })
  }
}