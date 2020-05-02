import React, {useEffect} from 'react';
import MapRender from '../src/containers/MyLitterPicker/MapRender';
import NavBar from '../src/containers/NavBar';
import Dashboard from '../src/containers/Dashboard/Dashboard';
import UserAccount from '../src/containers/UserAccount/UserAccount';
import CreateAccount from '../src/containers/UserAccount/CreateAccount';
import Logout from '../src/containers/Auth/Logout';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import * as mapRenderActions from './store/actions/index';

const App = (props) => {
   
  useEffect(() => {
    console.log('[UseEffect in App.js]');
    props.onInitLocation();

  }, [])

    return (
      <>
      <Route path="/login" component={UserAccount}/>
      <Route path="/" component={NavBar}/>
      <Route path="/map" component={MapRender}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/createaccount" component={CreateAccount}/>
      <Route path ="/logout" component={Logout}/>


      </>
    )
};

const matchDispatchToProps = (dispatch) => {
  return {
    onInitLocation: () => dispatch(mapRenderActions.initUserLocation()),
  }
}

export default connect(null ,matchDispatchToProps)(App); 

