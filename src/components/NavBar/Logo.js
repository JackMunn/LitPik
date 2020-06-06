import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.color.secondary};
  color: ${props => props.isWhite ? props.theme.color.white : '#0060ac'}  ;
  width: 80%;
  font-size: ${props => props.theme.fontSize.large};
  font-weight: bold;
  text-align: left;
  margin: 0 auto;
  padding: 0px;
  padding-left: 5%;


  
  @media (min-width: 500px){
    width: 90%;
  }

`;

const logo = (props) => <Logo 
  fontSize={props.fontSize} 
  isWhite={props.isWhite} 
  paddingLeft={props.paddingLeft}>
    {props.placeholder}
  </Logo>;


export default logo;