import { Field, reduxForm, SubmissionError} from 'redux-form';
import { connect } from 'react-redux';
import React from 'react';
import * as actions from '../../../store/actions/index';


export const validateAndSubmit =  ({email = '', password = ''},dispatch ) => {
  let error = {};
  let isError = false;
  console.log('validate and submit', email,password)

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

    console.log(email, password)

    return dispatch(actions.auth(email,password, 'login'));
  }

} 
