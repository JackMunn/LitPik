import React from 'react';
import styled from 'styled-components';


const BackdropDiv = styled.div`
  background:rgba(208, 201, 209, ${props => props.opacity});
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;

`;

const backdrop = (props) => {

  
  return props.showSidedraw || props.show ? <BackdropDiv onClick={props.changed} opacity={props.opacity}/> : null;
};

export default backdrop; 