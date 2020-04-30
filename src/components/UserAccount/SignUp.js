import React from 'react';
import styled from 'styled-components';

// blue 0060ac
// off white F6F7FB
// orange ef7a3b
const LoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 0px 8px 8px 8px;
  box-sizing: border-box;
  border-radius:16px;
  margin: 16px auto;
`;


const SubmitButton = styled.button`
  font-family: 'Hind', sans-serif;
  background: #75cff0;
  border-radius: 18px;
  width: 100%;
  padding: 8px 30px;
  margin: 16px 0px ;
  margin-top: 0px;
  display: block;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: white;

`;

const LoginForm = styled.form`
  width: 100%;
`;



const Signup = () => {
  return (
    <LoginPanel>
      <LoginForm>
        <SubmitButton>create an account</SubmitButton>
      </LoginForm>

    </LoginPanel>
  )
}

export default Signup;