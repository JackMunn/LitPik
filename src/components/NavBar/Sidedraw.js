import styled from 'styled-components';
import React from 'react';
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

const sidedraw = (props) => {

  let opacity = '.40';
  if(props.opacity){
    opacity = props.opacity;
  }

  return (
    <>
      <Backdrop show={props.open} opacity={opacity}/>
      <Sidedraw style={{transform:props.open ? 'translateY(-1%)' :'translateY(-150%)'}}>
        <StyledLink to="/dashboard" onClick={props.toggleSidedraw}>Dashboard</StyledLink> 
        <StyledLink to="/map" onClick={props.toggleSidedraw}>My Litter Tracker</StyledLink>
        <StyledLink to="/globalmap" onClick={props.toggleSidedraw}>Global Litter Map</StyledLink>
        <StyledLink to="/useraccount" onClick={props.toggleSidedraw}>User Account</StyledLink>

      </Sidedraw>
    </>

    );
}

const mapStateToProps = state => {
  return {
    open: state.navReducer.showSidedraw,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidedraw : () => dispatch(navBarActions.toggleSidedraw())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(sidedraw); 