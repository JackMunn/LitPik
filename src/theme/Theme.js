export const theme = {
    color: {
        primary:  '#0060ac', // blue 
        primaryDark: '#004C88', 
        primaryLight: '#75cff0', 
        secondary: '#ef7a3b', //orange
        secondaryLight: '#f2b696',
        white: '#fafaff',
        grey: '#a2a1ad',
        greyDark: '#6a6970',
        error: '#D0645D',
        errorLight: '#f2e7e6',
    },
    fontSize : {
        extraLarge: '3rem',
        large: '2rem',
        medium: '1rem',
        small: '0.5rem,'
    },

    // call this within your styled components for desktop mode
    mediaQueries: {
        mobile : 'only screen and (min-width: 480px)',
    }
}