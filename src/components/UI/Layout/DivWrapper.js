import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
 margin: 0px;
  position: fixed;
  height: 90%;
  width: 100%;

  display: flex;
  /* establish flex container */
  flex-direction: column;
  /* make main-axis vertical */
  justify-content: center;
  /* align items vertically, in this case */
  align-items: center;
  /* align items horizontally, in this case */

  left: 0;
  transition: transform .5s ease-in-out;

  padding: 0px 0px;
  z-index: 100;
  margin: 0px;
  transition: all .3s ease-in-out;
  transform:${props => props.close ? 'translateY(200%)' : 'translateY(0%)'};
  overflow: scroll;
`;

const DivWrapper = props =>  <DivStyled {...props}>{props.children}</DivStyled>;

export default DivWrapper