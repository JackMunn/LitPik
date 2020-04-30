import React, {useEffect} from 'react';
import styled from 'styled-components';
import canImg from '../../assets/can.png';
import bottleImg from '../../assets/bottle.png';


const Footer = styled.div`
  height: 20%;
  width: 100%;
  position: fixed;
  display: flex;
  top: 80%;
  left: 0;
  background: transparent;
  align-items: center; 
  padding: 10px 0px;
  box-sizing: border-box; 


`;

const Icons = styled.div`
  font-family: 'Hind', sans-serif;
  color: none;
  height: 10vh;
  width:10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 10px auto;
   
  box-sizing: border-box;
  z-index: 500; 
  background-image: url(${props => props.iconType === "can" ? canImg : bottleImg});
  background-size: cover;

  &:active {
    transform: scale(1.2);
    transition: 1s ease-in-out; 
  }
  
`;


const FooterNav = (props) =>  {

  useEffect(() => {
    console.log('[UseEffect in Footer]', props);
  }, [])

    return (
      <Footer>
        <Icons onClick={() => props.saveLitterLoc('can')} iconType="can"></Icons> 
        <Icons onClick={() => props.saveLitterLoc('bottle')} iconType="bottle"></Icons> 
      </Footer>
            );
}  

export default FooterNav;