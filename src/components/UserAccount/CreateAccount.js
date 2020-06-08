import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm} from 'redux-form';
import {inputField} from '../UI/InputField';
import {validateAndSubmit} from '../UI/Validation/CreateAccount';
import DivWrapper from '../../components/UI/Layout/DivWrapper';



// blue 0060ac
// off white F6F7FB
// orange ef7a3b



const SubmitButton = styled.button`
  background: ${props => props.theme.color.secondary};
  border-radius: 9px;
  width: 100%;
  padding: 8px 30px;
  margin: 16px 0px ;
  margin-bottom: 16px;
  display: block;
  border: none;
  font-weight: bold;
  font-size: ${props=> props.theme.fontSize.medium};
  color: ${props => props.theme.color.white};
  &:focus {outline:0;}



`;

const Title = styled.h1`
    color: ${({theme}) => theme.color.white};

`;



let CreateAccountFn = (props) => {

  const { handleSubmit } = props;

  return (


  <DivWrapper>  
    <Title>Create Account</Title>
    <form onSubmit={handleSubmit(validateAndSubmit)}>
      <Field name="email" component={inputField} type="email" placeholder="email address" />
      <Field name="password" component={inputField} type="password" placeholder="password" />
  
      <SubmitButton type="submit">create account</SubmitButton>
    </form>
  
  </DivWrapper>
  )
}

// function submit(values, dispatch) {
//   //Can log the values to the console, but submitFormValues actionCreator does not appear to be dispatched.
//   console.log(values);
//   return dispatch(actions.auth(values));
// }



CreateAccountFn = reduxForm({
  // a unique name for the form
  form: 'login',
  validateAndSubmit

})(CreateAccountFn)


export default CreateAccountFn;