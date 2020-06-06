import React from 'react';
import styled from 'styled-components';


const Header = styled.h1`
    background: ${props => props.theme.color.primary};
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.fontSize.large};

`;

const PageHeader = (props) => {
    return (
        <Header>{props.children}</Header>
    )
}

export default PageHeader;