import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Panel }from '../../components/UI/OrangeGreyPanel'
import bluebag from '../../assets/blue-bag.png'


//   background: #fafaff; off white


const DivWrapper = styled.div`
    font-family: 'Hind', sans-serif;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  position: absolute;
  background: #75CFF0;
  transition: all .5s ease-in-out;
  transform:${props => props.shift ? 'translateY(20%)' : 'translateY(0%)'};
  color: white;  
  box-sizing: border-box;
`;

const ColumnFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    color: black;
    text-align: center;
    box-sizing: border-box;

`;


const LandingPage = (props) => {
    return <DivWrapper shift={props.showSidedraw}>
            <ColumnFlexBox>
                <Panel title="Welcome to litpik!">Howdy</Panel>

            </ColumnFlexBox>
        </DivWrapper>
}

const mapStateToProps = (state) => {
    return {
        showSidedraw: state.navReducer.showSidedraw,
    }
}

export default connect(mapStateToProps)(LandingPage);