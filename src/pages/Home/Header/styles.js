import { Link } from 'react-router-dom';

import theme from 'config/theme';
import styled from 'styled-components'

import { AppBar } from '@material-ui/core';

export const TradeMark = styled.h1`
    font-family: 'Pacifico';
    color: var(--trademark-color);
    font-size: 2rem;
    margin: 0 0 0 0.5rem;
    font-weight: 300;    
`
export const Logo = styled.img`
    height: 3rem;   
    width: 3rem;
    margin-left: 1rem;
`

export const StyledAppBar = styled(AppBar)`
    background: var(--appbar); 
    ${theme.breakpoints.down("xs")} {
        max-height: 3.5rem;
        position: fixed;
        z-index: 1301;
        box-shadow: none;
    }
`

export const StyledLogoLink = styled(Link)`
    flex-grow: 1;
    display: flex;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
`