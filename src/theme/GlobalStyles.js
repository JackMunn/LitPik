import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        height: 100%;
        background: ${props => props.theme.color.primary};

    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Hind', sans-serif;

    }
`;


// background: #0060ac;
