import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import canImg from '../../assets/can.png';
import bottleImg from '../../assets/bottle.png';


const DivWrapper = styled.div`
font-family: 'Hind', sans-serif;
  top: 50%;
  left: 50%;
  position: fixed;
  width: 80%;
  height: 60%;
  margin: -50% 0 0 -40%;
  z-index: 80;
  box-sizing: border-box;

`;

const SuccessModal = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  background: white;
  border: 3px solid #ef7a3b;
  
  width: 100%;
  height: 100%;
`;

const H1 = styled.h1`
  display: inline-block;
  color: #0060ac;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  padding: 10px; 
  line-height: 1.2;
  margin: 20px;


`;

const P = styled.p`
  font-size: 18px;
  padding: 10px;
  padding-top:15px;
  text-align: center;
  margin: 0;
`;
const P2 = styled.p`
  font-size: 34px;
  padding: 15px;
  padding-top: 0px;
  text-align: center;
  color:#ef7a3b;
  font-weight: bold;
  margin: 0;
`;

const RubbishImage = styled.div`
  height: 30%;
  width:60%;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-image: url(${props => props.type === "can" ? canImg : bottleImg});
  background-size: cover;
`;

const OnSuccess = (props) => {
  console.log('success modal fired');

  let randomMessage = 'Nice one!';
  let randomNum = Math.floor(Math.random() *10);
  switch (randomNum){
    case 1 : randomMessage = 'Crikey, good job!'; break;
    case 2 : randomMessage = 'Proved me wrong!'; break;
    case 3 : randomMessage = 'Keep going!'; break;
    case 4 : randomMessage = 'The planet thanks you!'; break;
    case 5 : randomMessage = 'And another one bites the dust!'; break;
    case 6 : randomMessage = 'Yippee!'; break;
    case 7 : randomMessage = 'What more can I say?'; break;
    case 8 : randomMessage = 'Prettttty, pretty good.'; break;
    case 9 : randomMessage = 'Do the happy dance!'; break;
    case 10 : randomMessage = 'Sweet, sweet recycling!'; break;
  }
  console.log(randomMessage, randomNum);


  return (
    <DivWrapper>
      <SuccessModal onClick={props.toggleSuccessScreen}>
        <H1>{randomMessage}</H1>
        <RubbishImage type={props.rubbishType}/>
        <P> Good work Jack, your session total is:</P> 
        <P2>{props.sessionTotal}</P2>
        
        
      </SuccessModal>
    </DivWrapper>
  )
}

const mapStateToProps = state => {
  return {
    sessionTotal: state.mapReducer.sessionTotal
  }
}

export default connect(mapStateToProps)(OnSuccess); 