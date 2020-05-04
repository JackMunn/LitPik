import React, {useEffect} from 'react';
import RenderCountTotals from '../../components/Dashboard/RenderCountTotals';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
    userId: state.authReducer.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCalculateDashboardStats : (token, userId) => dispatch(dashboardActions.initCalcStats(token, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 