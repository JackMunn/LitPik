import React from 'react';
import styled from 'styled-components';

const PopupDraw = styled.div`

    position: fixed;
    width: 100%;
    height: 30%;
    left: 0;
    bottom: ${props => props.show ? '0' : '-100%'};
    z-index: 100; 
    background: #ef7a3b;
    color:white; 
    border: 0px solid #0060ac;
    padding: 0px 16px;
    box-sizing: border-box;

    display:${props => props.show ? 'block' : 'none'};
    outline: none;
    user-select: none;
    transform: ${props => props.show ? true : null};
    transition: transform .5s ease-out;
    animation: fadeInAnimation 3s;
    
    @keyframes fadeInAnimation {
        0% { translateY(0%) }
        100%   { translateY(100%) }
    }
`;

const DashboardMetricButton = styled.button`
    font-family: 'Hind',sans-serif;
    font-size: 20px;
    padding: 8px 16px;
    margin: 8px;
    border-radius: 16px;
    background: ${props => props.showCans || props.showBottles ? '#0060ac' :'white' };
    color: ${props => props.showCans || props.showBottles ? 'white' :'#ef7a3b' };
    box-shadow: ${props => props.showCans || props.showBottles ? '3px 3px 5px 2px #cf6c38' : ''};
    text-decoration: none;
    border-style: none;

    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
-webkit-tap-highlight-color: transparent; 

   

`;
const ClosedModalX = styled.p`
    color: white;
    font-family: inherit;
    font-size: 18px;
    margin: 0px;
    text-align: right;
`;



const PopupModal = (props) => {
    return (
        <>
        <PopupDraw show={props.openPopup}>
                <ClosedModalX onClick={props.toClose}>X</ClosedModalX>
               <DashboardMetricButton type="checkbox" onClick={props.toggleCans} showCans={props.showCans}>total cans</DashboardMetricButton>
                <br/>
                <DashboardMetricButton type="checkbox" onClick={props.toggleBottles} showBottles={props.showBottles}>total bottles</DashboardMetricButton>
            

        </PopupDraw>
        </>
    )  
}

export default PopupModal;