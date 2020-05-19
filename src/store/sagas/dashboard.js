import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from 'axios';

export function* initCalcStatsSaga (action){
  let tempCans = 0;
  let tempBottles =0;
  
  let token = action.tokenProp;
  if(!action.tokenProp){
    token = yield localStorage.getItem('Token');
  }

  const queryParams = `auth=${token}&orderBy="userId"&equalTo="${action.userId}"`;

  

  try {
    const response = yield axios.get(`https://litterapp-21386.firebaseio.com/locs.json?${queryParams}`);
    
      for(let key in response.data){

        if(response.data[key].rubbishType === 'can') {
          tempCans++; 
        } 
        if(response.data[key].rubbishType === 'bottle') {
          tempBottles++;
        }
      }

      yield put(actions.onCalculateDashboardStats(tempCans,tempBottles));  
    } catch (error){
        console.log(error);
    }
  
}