import React, {useEffect} from 'react';
import RenderCountTotals from '../../components/Dashboard/RenderCountTotals';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as dashboardActions from '../../store/actions/index'

const DivWrapper = styled.div`
  top: 10%;
  left: 0;
  width: 100%;
  position: absolute;
  
`;

const Dashboard = (props) => {
  useEffect (() => {
    props.onCalculateDashboardStats(props.token, props.userId)
  },[]);

  if(!props.isAuthenticated){
    return <Redirect to="/login"/>;
  }
  
    return (
    <DivWrapper>
    <RenderCountTotals/>
    </DivWrapper>
    );

}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    authLoading: state.authReducer.loading,
    userId: state.authReducer.userId,
    isAuthenticated: state.authReducer.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCalculateDashboardStats : (token, userId) => dispatch(dashboardActions.initCalcStats(token, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 