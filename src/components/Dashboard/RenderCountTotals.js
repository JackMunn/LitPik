import React from 'react';
import { connect } from 'react-redux';
import Loader from '../UI/Loader';


const RenderCountTotals = (props) => {

  if(props.isLoading){ 
    return (<div>
      <Loader/>
    </div>)
  }

  else {
    return (
      <div>
        <ul>
          <li>Bottles: {props.bottles}</li>
          <li>Cans: {props.cans}</li>
          <li><strong>Total: {props.bottles + props.cans}</strong></li>
  
  
        </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    bottles: state.dashboardReducer.bottles,
    cans: state.dashboardReducer.cans,
    isLoading: state.dashboardReducer.isLoading,
  }
}



export default connect(mapStateToProps)(RenderCountTotals)