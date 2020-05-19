import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  font-family: 'Hind', sans-serif;
  text-decoration: underline;
  text-decoration-color: #ef7a3b;
  color: ${props => props.isWhite ? 'white' : '#0060ac'}  ;
  width: 80%;
  

  box-sizing: border-box; 
  font-size: ${props => props.fontSize};
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  padding: 0px;
  padding-left: ${props => props.paddingLeft ? '10%' : '0'};


  
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