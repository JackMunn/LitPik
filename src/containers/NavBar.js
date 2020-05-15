import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Hamburger from '../components/NavBar/Hamburger'
import Sidedraw from '../components/NavBar/Sidedraw/Sidedraw';
import Logo from '../components/NavBar/Logo';
import UserAccount from '../containers/UserAccount/UserAccount';
import * as navBarActions from '../store/actions/index';

const Bar = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  display: flex;
  
  top: 0;
  left: 0;
  background: #0060ac;
  border-top: 3px solid #ef7a3b;
  align-items: center; 
  padding: 0px 0px;
  z-index: 500;
  margin: 0px;
  box-sizing: border-box;
  justify-content:flex-end;


`;

const BelowTheBar = styled.div`
  top: 10%;
  height: 90%;
  position: fixed;
  background: #0060ac;
  z-index: 0;
  box-sizing: border-box;
`;
/* 

font-family: 'Hind', sans-serif;
font-family: 'Nunito', sans-serif;
font-family: 'Montserrat', sans-serif;

cardboard orange -> ef7a3b
plastic blue -> 0060ac  (dark -> 004C88) (sea blue -> 75cff0)
*/





const NavBar = (props) => {

    return (
      <>
      <Bar>
       {/* <p>count: {props.totalRubbishCount}</p> */}
       <Logo fontSize={'32px'} isWhite={true} paddingLeft={true} placeholder="litpik"/>
        <Hamburger isWhite={true} isBlue={false} showSideDraw={props.open} toggleSidedraw={props.toggleSidedraw}/>

      </Bar>
      <Sidedraw open={props.open} toggleSidedraw={props.toggleSidedraw} isAuth={props.isAuth}/>
      </>

    );
}

const mapStateToProps = state => {
  return {
    open: state.navReducer.showSidedraw,
    isAuth: state.authReducer.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidedraw : () => dispatch(navBarActions.toggleSidedraw())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
