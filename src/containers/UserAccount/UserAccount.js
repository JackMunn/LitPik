import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import DivWrapper from '../../components/UI/Layout/DivWrapper';
import LoginModal from '../../components/UserAccount/Login/LoginModal';
// import {validateAndSubmit} from '../../components/UI/Validation/LoginModal';







const MainDisplay = styled.div`
  width: 100%;
  height: auto;
  padding: 0px 18px;
`;

const Title = styled.h1`
  margin: 32px 0px 0px 0px;
  color: white;
  text-align: center;
  font-size:${props => props.theme.fontSize.large};

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