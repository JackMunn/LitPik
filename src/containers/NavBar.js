import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Hamburger from '../components/NavBar/Hamburger'
import Sidedraw from '../components/NavBar/Sidedraw';
import Logo from '../components/NavBar/Logo';
import * as NavBarActions from '../store/actions/index';

const Bar = styled.div`
  height: 10%;
  width: 100%;
  position: absolute;
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
       <Logo fontSize={'32px'} isWhite={true}/>
        <Hamburger isWhite={true} isBlue={false}/>

      </Bar>
      <Sidedraw/>
      </>

    );
}

// const mapStateToProps = state => {
//   return {
//     showSidedraw: state.navReducer.showSidedraw,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleSideDraw: () => dispatch(NavBarActions.toggleSidedraw()),
//   }
// }


export default NavBar;