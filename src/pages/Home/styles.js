import theme from 'config/theme';
import styled from 'styled-components'

export const RightBackground = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    height: 40rem;   
    width: 40rem;
    opacity: 0.25;
    z-index: -1;
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
    width: 34.5rem;
    opacity: 0.34;
    z-index: -1;
    ${theme.breakpoints.down("md")} {        
        display: none;
    } 
`

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`