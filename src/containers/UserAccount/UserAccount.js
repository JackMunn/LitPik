import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';


import LoginModal from '../../components/UserAccount/Login/LoginModal';
import Logo from '../../components/NavBar/Logo';
// import {validateAndSubmit} from '../../components/UI/Validation/LoginModal';



const DivWrapper = styled.div`
  margin: 0px;


  height: 90%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column; 
  align-items: center;

  top: 10%;
  left: 0;
  transition: transform .5s ease-in-out;

  padding: 0px 0px;
  z-index: 100;
  margin: 0px;
  transition: all .5s ease-in-out;
  transform:${props => props.close ? 'translateY(20%)' : 'translateY(0%)'};
`;



const MainDisplay = styled.div`


  width: 100%;
  height: auto;
  padding: 0px 18px;


`;

const Title = styled.h1`
  margin: 16px 0px 0px 0px;
  color: white;
  text-align: center;
  font-size: 45px;

`;


const UserAccount = (props) =>{




  let redirectIfAuth;
  if(props.isAuth){
    redirectIfAuth = (<Redirect to="/dashboard"/>);
  }

  

  return (
    <DivWrapper showSidedraw={props.showSidedraw} close={props.showSidedraw} onClick={props.closeSidedraw}>
      

      <MainDisplay move={props.showSidedraw} auth={props.isAuth}>
        <Title>login</Title>
      {redirectIfAuth}
        <LoginModal firebaseError={props.firebaseError}/>
      </MainDisplay>
     
    </DivWrapper>
  )
}

const mapStateToProps = state => {
  return {
    showSidedraw: state.navReducer.showSidedraw,
    isAuth: state.authReducer.token !== null,
    firebaseError: state.authReducer.error,

  }
};

const mapDispatchToProps = dispatch => {
  return {
    closeSidedraw: () => dispatch(actions.closeSidedraw()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);