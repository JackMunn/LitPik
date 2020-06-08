import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

// blue 0060ac
// off white F6F7FB
// orange ef7a3b



const SubmitButton = styled.button`
  background: ${props =>props.theme.color.primaryLight};
  border-radius: 9px;
  width: 100%;
  padding: 8px 30px;
  margin: 16px 0px ;
  display: block;
  border: none;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.color.white};
  &:focus {outline:0;}
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