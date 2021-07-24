import theme from 'config/theme';
import styled from 'styled-components'

export const RightBackground = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 40rem;   
    width: 40rem;
    opacity: 0.25;
    ${theme.breakpoints.down("xs")} {        
        height: 20rem;
        width: 20rem;
        left: 0;
        margin: 0 auto;
    } 
`

export const LeftBackground = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 23rem;   
    width: 35rem;
    opacity: 0.34;
    ${theme.breakpoints.down("xs")} {        
        display: none;
    } 
`