import React, {useState} from 'react';
import Loader from '../UI/Loader';
import styled from 'styled-components';
import canImg from '../../assets/can.png';
import bottleImg from '../../assets/bottle.png';
import PopupModal from './PopupModal';

const Panel = styled.div`
    width: 90%;
    height: 200px;
    margin: 5%;
    border-left: 3px solid #ef7a3b;
    box-sizing: border-box;
    background: #fafaff;

    display: flex;
    align-items: flex-start;
    height: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 60px;

`;

const PanelDiv = styled.div`
  width: auto;
  text-align: center;
  padding: 10px;
  font-size: 60px;
`;

const AddPanel = styled.div`
  width: auto;
  text-align: center;
  padding: 10px;
  font-size: 60px;
`;

const Icons = styled.div`
  background-image: url(${props => props.iconType === "can" ? canImg : bottleImg});
  background-size: cover;
  width: 75px;
  height: 75px;
  text-align: center;

`;

const RenderCountTotals = (props) => {

  const [showBottles, setShowBottles] = useState(false)
  const [showCans, setShowCans] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const addPanelHandler = () => {
    // setShowBottles(true);
    // setShowCans(true);
    setShowPopup(!showPopup);
  }

  const toggleCans = () => {
    setShowCans(!showCans);
    setShowPopup(false);

  }

  const toggleBottles = () => {
    setShowBottles(!showBottles);
    setShowPopup(false);

  }

  const removePanelHandler = (props) => {
    if(props === 'bottle'){
      setShowBottles(false);
    } else if(props === 'can'){
      setShowCans(false);
    }
  }

  const displayBottles = (
    <Panel onClick={() => removePanelHandler('bottle')}>
      <PanelDiv>
        <Icons iconType="bottles"/>
      </PanelDiv>
      <PanelDiv>
        {props.bottles}
      </PanelDiv>
    </Panel>);

  const displayCans = (      
  <Panel onClick ={() => removePanelHandler('can')}>
    <PanelDiv>
      <Icons iconType="can"/>
    </PanelDiv>
    <PanelDiv>
      {props.cans}
    </PanelDiv>
  </Panel>);
  

  if(props.isLoading){ 
    return (<div>
      <Loader/>
    </div>)
  }

  else {
    return (
      <>
      {showBottles ? displayBottles : null}
      {showCans ? displayCans : null}
      <PopupModal openPopup={showPopup} toggleCans={toggleCans} toggleBottles={toggleBottles}/>

      <Panel onClick={addPanelHandler}>
          <span style={{color:'#ef7a3b'}}>+</span>
      </Panel>
      </>
    )
  }

}

export default RenderCountTotals;
