import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {inputField} from '../UI/InputField';
import { validateAndSubmit } from '../UI/Validation/LoginModal';
import * as actions from '../../store/actions/index';




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
  margin-bottom: 8px;
  display: block;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: #F6F7FB;

`;




let LoginModalFn = ({handleSubmit}) => {

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log('test ')
  //   props.onAuth('test@test.com', '123456');
  // }



  return (
    //
    //   <LoginForm onSubmit={submitHandler}>
    //     <Input type="text" placeholder="username"></Input>
    //     <Input type="password" placeholder="password"></Input>
    //     <SubmitButton>login</SubmitButton>
    //   </LoginForm>

    // </LoginPanel>

  <LoginPanel>  
    <form onSubmit={handleSubmit(validateAndSubmit)}>
      <Field name="email" component={inputField} type="email" placeholder="email address" />
      <Field name="password" component={inputField} type="password" placeholder="password" />
  
      <SubmitButton type="submit">login</SubmitButton>
    </form>
  </LoginPanel>
  )
}

const LoginModal = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginModalFn)

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email,password)),
  }
}

export default connect(null, mapDispatchToProps)(LoginModal);