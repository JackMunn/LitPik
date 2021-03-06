import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.color.grey};
  background: ${props => props.theme.color.white};
  width: 100%;  
  display: block;
  margin: 16px 0px;
  padding: 8px;
  border: ${props => props.error && props.touched ? '1px #eb4034 solid' : '1px solid #dcdfe6'};
  outline: none;

  /* -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
-webkit-tap-highlight-color: transparent;  // i.e. Nexus5/Chrome and Kindle Fire HD 7''
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
  &-webkit-transition-delay: 9999s;
  } */

`;

export const inputField = ({input, type, placeholder, meta: {touched, error}}) => {
  return (
    <>  
    <Input {...input} type={type} placeholder={placeholder} error={error} touched={touched} />
    </>
  );
};