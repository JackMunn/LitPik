import React from 'react';
import styled, { keyframes } from 'styled-components';
import StandardButton from '../UI/StandardButton';


const fadeInAnimation = keyframes`
    0% { 
        transform: translateY(100%);
    }
    100%   { 
        transform: translateY(0%);
        }
`

const PopupDraw = styled.div`

    position: fixed;
    width: 100%;
    height: auto;
    left: 0;
    bottom: ${props => props.show ? '0' : '-100%'};
    z-index: 100; 
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.primary}; 
    border-top: 3px solid ${props => props.theme.color.secondary};
    padding: 0px 16px;

    display:${props => props.show ? 'block' : 'none'};
    outline: none;
    user-select: none;
    transform: ${props => props.show ? true : null};
    animation: ${fadeInAnimation} .3s ease-in;
    
`;

const ClosedModalX = styled.p`
    color: ${props => props.theme.color.secondaryLight};
    font-size: ${props => props.theme.fontSize.small};
    margin: 0px;
    text-align: right;
`;



const PopupModal = (props) => {
    return (
        <>
        <PopupDraw show={props.openPopup}>
                <ClosedModalX onClick={props.toClose}>X</ClosedModalX>
               <StandardButton type="checkbox" onClick={props.toggleCans} showCans={props.showCans}>total cans</StandardButton>
                <StandardButton type="checkbox" onClick={props.toggleBottles} showBottles={props.showBottles}>total bottles</StandardButton>
        </PopupDraw>
        </>
    )  
}

export default PopupModal;