import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import CreateAccountModal from '../../components/UserAccount/CreateAccount';




const DivWrapper = styled.div`
  margin: 0px;
    font-family: 'Hind', sans-serif;


  height: 90%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column; 
  align-items: center;

  top: 10%;
  left: 0;
  background: '#fcfdff';
  transform:${props => !props.move ? 'translateY(-1%)' :'translateY(40%)'};
  transition: transform .5s ease-in-out;

  padding: 0px 0px;
  z-index: 0;
  margin: 0px;
  box-sizing: border-box;

`;

const NoLogoNav = styled.div`
height: 10%;
width: 100%;
position: fixed;
display: flex;
justify-content:flex-end;

top: 0;
left: 0;
background: ${props => props.isBlue ? '#0060ac': '#fcfdff'};
  transition: transform .5s ease-in-out;

border-top: 3px solid #ef7a3b;
align-items: center; 
padding: 0px 0px;
z-index: 501;
margin-bottom: 0px;
box-sizing: border-box;
`;

const MainDisplay = styled.div`
 
  background:  ${props => props.move ? '#0060ac' : '#fcfdff'};
  width: 100%;
  box-sizing: inherit;
  padding: 0px 18px;

`;


const CreateAccount = (props) =>{

  let redirectIfAuth;
  if(props.isAuth){
    redirectIfAuth = (<Redirect to="/dashboard"/>);
  }

  return (
      <DivWrapper move={props.showSidedraw}>
        {redirectIfAuth}
     <CreateAccountModal/>
     </DivWrapper>
  )
}

const mapStateToProps = state => {
  return {
    showSidedraw: state.navReducer.showSidedraw,
    isAuth: state.authReducer.token !== null,
  }
};



export default connect(mapStateToProps)(CreateAccount);