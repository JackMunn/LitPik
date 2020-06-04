import React from 'react';
import styled from 'styled-components';

const PanelDiv = styled.div`
    width: 90%;
    height: 200px;
    margin: 2.5% 5%;
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

const Title = styled.h1`
    font-size: 30px;

`;

export const Panel = (props) => {
    return (<PanelDiv onClick={props.onClick}>
        {props.title ? <Title>{props.title}</Title> : null}
        {props.title ? <p>{props.children}</p> : props.children}
        </PanelDiv>);
}