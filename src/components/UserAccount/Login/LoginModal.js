import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm} from 'redux-form';

import {inputField} from '../../UI/InputField';
import Loader from '../../UI/Loader';
import * as actions from '../../../store/actions/index';
import SignUp from '../SignUp';
import {validateAndSubmit} from '../../UI/Validation/LoginModal';





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
LoginPanel.displayName = 'LoginPanel';


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




let LoginModalFn = (props) => {

  const { handleSubmit } = props;

  // loader works fine, but is so quick on home internet to be pointless
  let loader;
  if(props.loading){
    loader = (<div style={{display: 'block', position:'relative', width: '100%', height: '200px'}}><Loader/></div>);
  }

  let errorMessage;
  if(props.firebaseError){
    errorMessage = props.firebaseError.message;
  }

  return (
  <LoginPanel> 
    <form onSubmit={handleSubmit(validateAndSubmit)}>
      <Field name="email" component={inputField} type="email" placeholder="email address" />
        <Field name="password" component={inputField} type="password" placeholder="password" />
        {loader}
        {errorMessage}
      <SubmitButton type="submit">login</SubmitButton>
    </form>

    <hr style={{borderTop: '.5px solid #dcdfe6', width: '60%', background: '#dcdfe6'}}/>
    <SignUp/>
  </LoginPanel>
  )
}


LoginModalFn = reduxForm({
  // a unique name for the form
  form: 'login',
  validateAndSubmit

})(LoginModalFn)



export default LoginModalFn;