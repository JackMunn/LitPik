import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CreateAccountModal from '../../components/UserAccount/CreateAccount';
import * as actions from '../../store/actions/index';



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
  transform:${props => !props.move ? 'translateY(-1%)' :'translateY(20%)'};
  transition: transform .5s ease-in-out;

  padding: 0px 0px;
  z-index: 0;
  margin: 0px;
  box-sizing: border-box;

`;




const CreateAccount = (props) =>{

  let redirectIfAuth;
  if(props.isAuth){
    redirectIfAuth = (<Redirect to="/dashboard"/>);
  }

  return (
      <DivWrapper move={props.showSidedraw}>
        {redirectIfAuth}
     <CreateAccountModal onAuth={props.onAuth}/>
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