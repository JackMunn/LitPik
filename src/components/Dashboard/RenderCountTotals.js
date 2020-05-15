import React from 'react';
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

export default RenderCountTotals;
