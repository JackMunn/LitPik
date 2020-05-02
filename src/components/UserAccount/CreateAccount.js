import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {inputField} from '../UI/InputField';
import * as actions from '../../store/actions/index';
import SignUp from './SignUp';
import {validateAndSubmit} from '../UI/Validation/CreateAccount';




// blue 0060ac
// off white F6F7FB
// orange ef7a3b
const LoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
  padding-bottom: 0px;
  box-sizing: border-box;
  border-radius:16px;
  margin: 0 auto;
`;


const SubmitButton = styled.button`
  font-family: 'Hind', sans-serif;
  background: #ef7a3b;
  border-radius: 18px;
  width: 100%;
  padding: 8px 30px;
  margin: 16px 0px ;
  margin-bottom: 16px;
  display: block;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: #F6F7FB;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); !important
-webkit-tap-highlight-color: transparent;  

`;

const Title = styled.h1`
    font-family: 'Hind', sans-serif;
    color: #0060ac;

`;



let CreateAccountFn = (props) => {

  const { handleSubmit } = props;

  return (


  <LoginPanel>  
    <Title>Create Account</Title>
    <form onSubmit={handleSubmit(validateAndSubmit)}>
      <Field name="email" component={inputField} type="email" placeholder="email address" />
      <Field name="password" component={inputField} type="password" placeholder="password" />
  
      <SubmitButton type="submit">create account</SubmitButton>
    </form>
  
  </LoginPanel>
  )
}

function submit(values, dispatch) {
  //Can log the values to the console, but submitFormValues actionCreator does not appear to be dispatched.
  console.log(values);
  return dispatch(actions.auth(values));
}



CreateAccountFn = reduxForm({
  // a unique name for the form
  form: 'login',
  validateAndSubmit

})(CreateAccountFn)

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email,password)),
  }
}

export default connect(null, mapDispatchToProps)(CreateAccountFn);