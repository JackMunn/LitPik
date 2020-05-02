import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as navBarActions from '../../store/actions/index'

const BackdropDiv = styled.div`
  background:rgba(208, 201, 209, ${props => props.opacity});
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 75;
  box-sizing: border-box;

`;

const backdrop = (props) => {

  
  return props.showSidedraw || props.show ? <BackdropDiv onClick={props.changed} opacity={props.opacity}/> : null;
};

const mapStateToProps = state => {
  return {
    showSidedraw: state.navReducer.showSidedraw,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidedraw: () => dispatch(navBarActions.toggleSidedraw()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(backdrop);