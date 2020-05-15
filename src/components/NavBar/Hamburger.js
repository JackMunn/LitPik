import React from 'react';
import styled from 'styled-components';


const SidedrawIcon = styled.div`

  width: 70%;
  height: 3px;
  margin: 4px auto;
  border-radius: 10px;
  background: ${props => props.isWhite ? 'white' : '#0060ac'};
  user-select: none;


`;

const IconWrapper = styled.div`
  width: 10%;
  padding: 4px;
  margin: 10px;
  display: block;
  position: relative;
  float:right;
  border: ${props => props.borderOrange ? '2px solid #ef7a3b' :  (props.isBlue ?'2px solid #0060ac' : '2px solid white')};
  
  border-radius: 3px;
  user-select: none;

  @media (min-width:500px){
    width: 50px;
    margin-left: auto;
  }

`;


const Hamburger = (props) => {
  
  return(
    <>
      <IconWrapper onClick={props.toggleSidedraw} borderOrange={props.showSideDraw} isBlue={props.isBlue} >
        <SidedrawIcon isWhite={props.isWhite}/>
        <SidedrawIcon isWhite={props.isWhite}/>
        <SidedrawIcon isWhite={props.isWhite}/>
      </IconWrapper>
    </>

  );
}



export default Hamburger;

