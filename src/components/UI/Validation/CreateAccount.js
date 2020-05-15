import { SubmissionError} from 'redux-form';

import * as actions from '../../../store/actions/index';

// async function submitToServer(data){
//   try{
//   let response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaokXeHt_aprQR4Kryzf0nHcs6z0LOHnA',
//   { 
//     method:'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   });
//   let responseJson = await response.json();
//   return responseJson;
//   } catch (error) {
//     console.log(error)
//   }
// }



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
    // submitToServer({email, password})
    //   .then(response => console.log(response));
    // console.log(email, password)
    return dispatch(actions.auth(email,password, 'signUp'));
  }

} 
