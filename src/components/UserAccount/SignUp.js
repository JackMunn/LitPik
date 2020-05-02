import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

// blue 0060ac
// off white F6F7FB
// orange ef7a3b



const SubmitButton = styled.button`
  font-family: 'Hind', sans-serif;
  background: #75cff0;
  border-radius: 18px;
  width: 100%;
  padding: 8px 35px;
  margin: 16px 0px ;
  margin-top: 16pxpx;
  display: block;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;





const Signup = () => {
  return (
      <form>
        <SubmitButton>
          <NavLink to="/createaccount" style={{  textDecoration: 'none', color:'inherit'}}>
            create an account
          </NavLink>
        </SubmitButton>
      </form>
  )
}

export default Signup;