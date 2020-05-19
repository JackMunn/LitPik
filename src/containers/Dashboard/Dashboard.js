import React from 'react';
import RenderCountTotals from '../../components/Dashboard/RenderCountTotals';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index'

const DivWrapper = styled.div`
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  position: absolute;
  transition: all .5s ease-in-out;
  transform:${props => props.shift ? 'translateY(35%)' : 'translateY(0%)'};
  color: white;

  
`;

const Dashboard = (props) => {

  const {token, dashboardLoading, userId, isAuthenticated, cans, bottles} = props;

    props.onCalculateDashboardStats(token,userId)

  if(!isAuthenticated){
    return <Redirect to="/login"/>;
  }
  
    return (
    <DivWrapper shift={props.showSidedraw} onClick={props.closeSidedraw}>
      <h1>Dashboard</h1>
    <RenderCountTotals isLoading={dashboardLoading} cans={cans} bottles={bottles}/>
    </DivWrapper>
    );

}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    dashboardLoading: state.dashboardReducer.isLoading,

    userId: state.authReducer.userId,
    isAuthenticated: state.authReducer.token !== null,

    cans: state.dashboardReducer.cans,
    bottles: state.dashboardReducer.bottles,

    showSidedraw: state.navReducer.showSidedraw,


  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCalculateDashboardStats : (token, userId) => dispatch(actions.initCalcStats(token, userId)),
    closeSidedraw: () => dispatch(actions.closeSidedraw())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 