import { Tab, TabList } from 'react-tabs'

import theme from 'config/theme';
import styled from 'styled-components'

import { Grid, Button } from '@material-ui/core'
import { Copyright } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';


export const GridBackground = styled(Grid)`
    background-color: var(--tab-color);
    min-height: 100vh;
`

export const LoginContainer = styled(Grid)`
    background-color: var(--white);
    padding: 1.5rem 5rem;
    margin-bottom: 1.6rem;
    ${theme.breakpoints.down("xs")} {
        background-color: var(--tab-color);
        padding: 0 1rem;
    }
`
export const Logo = styled.img`
    height: 7rem;   
    width: 7rem;
    ${theme.breakpoints.down("xs")} {
        margin-top: 1rem;
        height: 5rem;
        width: 5rem;
    } 
`
export const TradeMark = styled.h1`
    font-family: 'Pacifico';
    color: var(--trademark-color);
    font-size: 3rem;
    margin-top: 0;
    font-weight: 300;
    ${theme.breakpoints.down("xs")} {
        margin: 0;
        font-size: 2.5rem;
    }
`
export const LoginTitle = styled.h2`
    font-weight: 600;
    color: var(--login-title);
    margin-top: 0;    
    text-align: center;
    font-size: 1.7rem;
    margin: 0;
`

export const LoginButton = styled(Button)`
    background-color: var(--tab-color);
    color: var(--white);
    font-size: 1rem;
    border-radius: 2px;
    font-weight: bold;
    &:hover {
        background-color: var(--tab-color);
        opacity: 0.7;
    }
    ${theme.breakpoints.down("xs")} {
        background-color: var(--trademark-color);
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
    color: var(--login-title);  
    border-radius: 3px;
    &:hover {
        color: var(--tab-color);
        border-bottom: 3px solid var(--tab-color);  
        padding-bottom: 5px;              
    }
    ${theme.breakpoints.down("xs")} {
        font-size: 0.9rem;
        color: var(--white);
        &:hover {
            color: var(--trademark-color);
            border-bottom: 3px solid var(--trademark-color);
            font-weight: 600;
            padding-bottom: 5px;
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

export const SuccessAlert = styled(Alert)`
    max-width: 31rem;
`

export const MadeBy = styled.div`
    color: white;
    font-size: 12px;
    font-weight: 600;

    text-align: center;

    a {
        text-decoration: none;
        color: lightgrey;
        &:hover {
            opacity: 0.5;
        }
    }
`

export const CopyrightIcon = styled(Copyright)`
    font-size: 18px;
    vertical-align: bottom;
`