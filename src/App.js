import React, {useEffect} from 'react';
import MapRender from '../src/containers/MyLitterPicker/MapRender';
import NavBar from '../src/containers/NavBar';
import Dashboard from '../src/containers/Dashboard/Dashboard';
import UserAccount from '../src/containers/UserAccount/UserAccount';
import CreateAccount from '../src/containers/UserAccount/CreateAccount';
import Logout from '../src/containers/Auth/Logout';
import LandingPage from '../src/containers/LandingPage/LandingPage'
// import asyncComponent from '../src/hoc/asyncComponent/asyncComponent';

import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import * as actions from './store/actions/index';

// for lazy loading set up function as below, then use function name as component prop in router
// removed as it was throwing up errors about updating state in unmounted components
// const asyncMapRender = asyncComponent(() => {
//   return import('../src/containers/MyLitterPicker/MapRender');
// });



const App = (props) => {
   
  useEffect(() => {
    props.onInitLocation();
    props.onTryAutoLogin();

  }, [props])

  let routes = (
    <>
     <Route path="/" component={NavBar}/>
    <Route path="/login" component={UserAccount}/>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/createaccount" component={CreateAccount}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/map" component={MapRender}/>


    </>
  );
  if(props.isAuthenticated){
    routes = (
      <>
      <Route path="/" component={NavBar}/>
      <Route path="/map" component={MapRender}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path ="/logout" component={Logout}/>
      <Redirect to ="/dashboard"/>

      </>
    );
  }

    return (
      <>
      {routes}
      </>
    )
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitLocation: () => dispatch(actions.initUserLocation()),
    onTryAutoLogin: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps ,mapDispatchToProps)(App)); 

