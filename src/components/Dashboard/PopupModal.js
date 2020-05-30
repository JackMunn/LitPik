import React from 'react';
import styled from 'styled-components';
import Backdrop from '../UI/Backdrop'

const PopupDraw = styled.div`

    position: fixed;
    width: 100%;
    height: 30%;
    left: 0;
    bottom: ${props => props.show ? '0' : '-100%'};
    z-index: 100; 
    background: white; 
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



const PopupModal = (props) => {
    return (
        <>
        <PopupDraw show={props.openPopup}>
            <ul>
                <button onClick={props.toggleCans}>Cans</button>
                <button onClick={props.toggleBottles}>Bottles</button>
            </ul>

        </PopupDraw>
        </>
    )  
}

export default PopupModal;