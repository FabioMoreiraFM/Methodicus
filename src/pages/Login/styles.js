import {Grid, Button} from '@material-ui/core'
import {Tab, TabList} from 'react-tabs'
import styled from 'styled-components'

const black = '#2A2A2E';
const blue = '#668FE1';
const blackGrey = '#434040';
const blueButton = '#3949AB';

export const GridFundo = styled(Grid)`
    background-color: ${black};
    height: 100vh;
`

export const LoginContainer = styled(Grid)`
    background-color: white;
    padding: 2rem 5rem;
`
export const Logo = styled.img`
    height: 8rem;    
`
export const TradeMark = styled.h1`
    font-family: 'Pacifico';
    color: ${blue};
    font-size: 4rem;
    margin-top: 0;
    font-weight: 300;
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
    &:nth-child(3) {
        padding-right: 0;
    }
`

export const TabLabel = styled.span`
    font-size: 1.2rem;
    color: ${blackGrey};  
    &:hover {
        color: ${blueButton};
        border-bottom: 3px solid ${blueButton};
    }  
`

export const LoginTabList = styled(TabList)`
    padding: 0;
`