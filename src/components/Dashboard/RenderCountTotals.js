import React, {useState} from 'react';
import Loader from '../UI/Loader';
import styled from 'styled-components';
import canImg from '../../assets/can.png';
import bottleImg from '../../assets/bottle.png';
import PopupModal from './PopupModal';
import { Panel } from '../UI/OrangeGreyPanel'

const PanelDiv = styled.div`
  width: auto;
  text-align: center;
  padding: 10px;
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

  const togglePopup = () => {
    // setShowBottles(true);
    // setShowCans(true);
    setShowPopup(!showPopup);
  }

  const toggleCans = () => {
    setShowCans(!showCans);

  }

  const toggleBottles = () => {
    setShowBottles(!showBottles);

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
      <PopupModal openPopup={showPopup} toggleCans={toggleCans} toggleBottles={toggleBottles} toClose={togglePopup} showCans={showCans} showBottles={showBottles}/>

      <Panel onClick={togglePopup}>
          <span style={{color:'#ef7a3b'}}>+</span>
      </Panel>
      </>
    )
  }

}

export default RenderCountTotals;
