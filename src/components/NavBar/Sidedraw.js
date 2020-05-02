import styled from 'styled-components';
import React, {useState} from 'react';
import Backdrop from '../UI/Backdrop';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as navBarActions from '../../store/actions/index'

const Sidedraw = styled.div`

  position: fixed;
  width: 100%;
  height: auto;
  left: 0;
  top: 10%;
  z-index: 100; 
  background: #0060ac; 
  border: 0px solid #0060ac;
  padding: 0px 16px;
  transition: transform .5s ease-out;
  box-sizing: border-box;

  dislay:block;
  outline: none;
  user-select: none;

  transform: ${props => props.open ? 'translateY(-5%)' : 'translateY(-150%)'};



`;

const StyledLink = styled(NavLink)`
  font-family: 'Hind', sans-serif;

  width: 100%;
  padding: 0px 18px;
  margin: 8px 0px;
  text-align: right;


  text-decoration: none;
  font-size: 24px;
  color: rgb(208, 201, 209, .5);
  outline: none;
  float:right;
  display: block;

  -webkit-user-select: none; /* Chrome/Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */

  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
    user-select: none;



  &.active, &:focus {
    color: white;
    font-weight: bold;
    outline: none;
    border-right: 4px solid #ef7a3b;
  } 
`;

const SidedrawContainer = (props) => {


  let authLayout;

  if(props.isAuth){
    authLayout = (
    <>
    <StyledLink to="/dashboard" onClick={props.toggleSidedraw}>dashboard</StyledLink> 
    <StyledLink to="/map" onClick={props.toggleSidedraw}>my litter tracker</StyledLink>
    <StyledLink to="/globalmap" onClick={props.toggleSidedraw}>global litter map</StyledLink>
    <StyledLink to="/logout" onClick={props.toggleSidedraw}>logout</StyledLink>
    </>
    );
  }


  return (
    <>
      <Backdrop show={props.open} changed={props.toggleSidedraw} opacity=".4"/>
      <Sidedraw open={props.open} auth={props.isAuth}>
        {props.isAuth ? null :
          <>
          <StyledLink to="/login" onClick={props.toggleSidedraw}>login</StyledLink>
          <StyledLink to="/globalmap" onClick={props.toggleSidedraw}>global litter map</StyledLink>
          </>
          }
        {authLayout}

      </Sidedraw>
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

export default connect(mapStateToProps, mapDispatchToProps)(SidedrawContainer); 
