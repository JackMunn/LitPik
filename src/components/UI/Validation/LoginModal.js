import { SubmissionError} from 'redux-form';
import * as actions from '../../../store/actions/index';


export const validateAndSubmit =  ({email = '', password = ''},dispatch ) => {
  let error = {};
  let isError = false;

  if(email.trim() === ''){
    error.email = 'required';
    isError = true;
  }
  if(password === ''){
    error.password = 'required';
    isError = true;
  }
  
  if(isError){
    throw new SubmissionError(error);
  } 
  else {
    return dispatch(actions.auth(email,password, 'login'));
  }

} 
