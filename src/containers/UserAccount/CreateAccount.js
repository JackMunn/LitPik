import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import CreateAccountModal from '../../components/UserAccount/CreateAccount';
import DivWrapper from '../../components/UI/Layout/DivWrapper';


const CreateAccount = (props) =>{

  let redirectIfAuth;
  if(props.isAuth){
    redirectIfAuth = (<Redirect to="/dashboard"/>);
  }

  return (
      <DivWrapper showSidedraw={props.showSidedraw} close={props.showSidedraw} onClick={props.closeSidedraw}>
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

const mapDispatchToProps = dispatch => {
  return {
    closeSidedraw: () => dispatch(actions.closeSidedraw()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);