import React from 'react';
import styled from 'styled-components';

const PanelDiv = styled.div`
    width: 90%;
    height: 200px;
    margin: 2.5% 5%;
    border-left: 3px solid ${props => props.theme.color.secondary};
    background: ${props => props.theme.color.white};

    display: flex;
    align-items: flex-start;
    height: auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.theme.fontSize.extraLarge};

    /* media query below is just an example of how it'd work with themes */
    @media ${props => props.theme.mediaQueries.mobile}{
        color: red;
    }
`;

const Title = styled.h1`
    font-size: ${props => props.theme.fontSize.medium}

`;

export const Panel = (props) => {
    return (<PanelDiv onClick={props.onClick}>
        {props.title ? <Title>{props.title}</Title> : null}
        {props.title ? <p>{props.children}</p> : props.children}
        </PanelDiv>);
}