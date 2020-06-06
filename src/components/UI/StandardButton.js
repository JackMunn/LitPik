import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-size: ${props => props.theme.fontSize.medium};
    width: 130px;
    padding: 4px 16px;
    margin: 16px;
    border-radius: 16px;
    background: ${props => props.showCans || props.showBottles ? props.theme.color.secondary : props.theme.color.secondaryLight };
    color: ${props => props.showCans || props.showBottles ? 'white' : props.theme.color.white };
    box-shadow: ${props => props.showCans || props.showBottles ? '3px 3px 5px 2px rgb(0,0,0,.1)' : ''};
    text-decoration: none;
    border-style: none;
    user-select: none;


    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
-webkit-tap-highlight-color: transparent; 
`;

const StandardButton = props => {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}

export default StandardButton;