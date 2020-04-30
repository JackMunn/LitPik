import { Field, reduxForm, SubmissionError} from 'redux-form';


export const validateAndSubmit = ({email = '', password = ''}) => {
  
  let error = {};
  let isError = false;

  if(email.trim() === ''){
    error.email = 'required';
    isError = true;
  }
  if(password.trim() === ''){
    error.password = 'required';
    isError = true;
  }
  
  if(isError){
    throw new SubmissionError(error)
  } else {
    console.log(email, password)
  }

}