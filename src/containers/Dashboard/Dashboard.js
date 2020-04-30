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
    props.onCalculateDashboardStats()
  }, []);
  
    return (
    <DivWrapper>
    <RenderCountTotals/>
    </DivWrapper>
    );

}

const mapDispatchToProps = dispatch => {
  return {
    onCalculateDashboardStats : () => dispatch(dashboardActions.initCalcStats()),
  }
}

export default connect(null, mapDispatchToProps)(Dashboard); 