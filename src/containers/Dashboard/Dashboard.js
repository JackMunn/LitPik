import React from 'react';
import RenderCountTotals from '../../components/Dashboard/RenderCountTotals';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index'

const DivWrapper = styled.div`
  font-family: 'Hind', sans-serif;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  position: absolute;
  transition: all .5s ease-in-out;
  transform:${props => props.shift ? 'translateY(35%)' : 'translateY(0%)'};
  color: white;
`;

const ColumnFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: black;
    text-align: center;
    box-sizing: border-box;

`;

const Dashboard = (props) => {

  const {token, dashboardLoading, userId, isAuthenticated, cans, bottles} = props;

    props.onCalculateDashboardStats(token,userId)

  if(!isAuthenticated){
    return <Redirect to="/login"/>;
  }
  
    return (
    <DivWrapper shift={props.showSidedraw} onClick={props.closeSidedraw}>
      <ColumnFlexBox>
        <h1 style={{color:'white', fontSize:'60px', margin: '0px'}}>Dashboard</h1>
        <RenderCountTotals isLoading={dashboardLoading} cans={cans} bottles={bottles}/>
      </ColumnFlexBox>
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



// const DivWrapper = styled.div`
//     font-family: 'Hind', sans-serif;
//   top: 10%;
//   left: 0;
//   width: 100%;
//   height: 90%;
//   position: absolute;
//   background: #75CFF0;
//   transition: all .5s ease-in-out;
//   transform:${props => props.shift ? 'translateY(20%)' : 'translateY(0%)'};
//   color: white;  
// //   box-sizing: border-box;
// // `;




// const LandingPage = (props) => {
//     return <DivWrapper shift={props.showSidedraw}>
//             <ColumnFlexBox>
//                 <LoginPanel>Howdy, welcome to litpik - the litter pickin' app built to clean up our communities.</LoginPanel>
//                 <LoginPanel></LoginPanel>
//                 <LoginPanel></LoginPanel>

//             </ColumnFlexBox>
//         </DivWrapper>
// }

// const mapStateToProps = (state) => {
//     return {
//         showSidedraw: state.navReducer.showSidedraw,
//     }
// }

// export default connect(mapStateToProps)(LandingPage);