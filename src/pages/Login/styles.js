import {Grid, Button} from '@material-ui/core'
import {Tab, TabList} from 'react-tabs'
import styled from 'styled-components'

import theme from 'config/theme';

const black = '#2A2A2E';
const blue = '#668FE1';
const blackGrey = '#434040';
const blueButton = '#3949AB';

export const GridFundo = styled(Grid)`
    background-color: ${black};
    min-height: 100vh;
`

export const LoginContainer = styled(Grid)`
    background-color: white;
    padding: 2rem 5rem;
    ${theme.breakpoints.down("xs")} {
        background-color: ${black};
        padding: 0 1rem;
    }
`
export const Logo = styled.img`
    height: 8rem;   
    ${theme.breakpoints.down("xs")} {
        margin-top: 1rem;
        height: 6rem;
    } 
`
export const TradeMark = styled.h1`
    font-family: 'Pacifico';
    color: ${blue};
    font-size: 4rem;
    margin-top: 0;
    font-weight: 300;
    ${theme.breakpoints.down("xs")} {
        margin: 0;
        font-size: 3rem;
    }
`
export const LoginTitle = styled.h2`
    font-weight: 600;
    color: ${blackGrey};
    margin-top: 0;    
    text-align: center;
    font-size: 1.7rem;
    margin: 0;
`

export const LoginButton = styled(Button)`
    background-color: ${blueButton};
    color: white;
    font-size: 1rem;
    border-radius: 2px;
    font-weight: bold;
    &:hover {
        background-color: ${blueButton};
        opacity: 0.7;
    }
`
export const LoginTab = styled(Tab)`
    display: inline-block;
    padding-right: 4rem;
    cursor: pointer;    
    -webkit-tap-highlight-color: transparent;
    &:nth-child(3) {
        padding-right: 0;
    }
    ${theme.breakpoints.down("xs")} {
        padding-right: 1.4rem;
        &:nth-child(3) {
            padding-right: 0;
        }
    }
`

export const TabLabel = styled.span`
    font-size: 1.2rem;
    color: ${blackGrey};  
    &:hover {
        color: ${blueButton};
        border-bottom: 3px solid ${blueButton};
    }
    ${theme.breakpoints.down("xs")} {
        font-size: 0.9rem;
        color: white;
        &:hover {
            color: ${blue};
            border-bottom: 3px solid ${blue};
        }
    }
`

export const LoginTabList = styled(TabList)`
    padding: 0;
    ${theme.breakpoints.down("xs")} {
        margin: 1rem auto 1rem auto;
        max-width: 21rem;
    }
`