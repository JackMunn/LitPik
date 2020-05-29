import React from 'react';
import Loader from '../UI/Loader';
import styled from 'styled-components';
import canImg from '../../assets/can.png';
import bottleImg from '../../assets/bottle.png';

const Panel = styled.div`
    width: 90%;
    padding: 30px;
    height: 200px;
    margin: 5%;
    border-top: 3px solid #ef7a3b;
    box-sizing: border-box;
    background: #fafaff;

    display: flex;
    align-items: flex-start;
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const PanelDiv = styled.div`
  width: auto;
  text-align: center;
  padding: 20px;
  font-size: 40px;
`;

const Icons = styled.div`
  background-image: url(${props => props.iconType === "can" ? canImg : bottleImg});
  background-size: cover;
  width: 100px;
  height: 100px;

`;

const RenderCountTotals = (props) => {

  if(props.isLoading){ 
    return (<div>
      <Loader/>
    </div>)
  }

  else {
    return (
      <Panel>
          <PanelDiv>
            <Icons iconType="bottles"/>
           {props.bottles}
          </PanelDiv>
          <PanelDiv>
            <Icons iconType="can"/>
            {props.cans}
            </PanelDiv>
          <PanelDiv><strong>Total <p style={{color:'#ef7a3b', margin: '0px', fontSize:'60px'}}>{props.bottles + props.cans}</p></strong></PanelDiv>

      </Panel>
    )
  }

}

export default RenderCountTotals;
