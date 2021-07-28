import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: #F6F7F9;
    width: 220px;
    height: 3rem;

    box-shadow: 0px 3px 6px #00000029;
`

export const Title = styled.h3`
    margin: 0;    
    margin-left: 1rem;
`

export const NewColumnClickable = styled(Link)`
    height: 3rem;
    text-decoration: none;
    color: black;

    display: flex;
    align-items: center;
    padding-left: 1rem;

    &:hover {
        background-color: lightgrey;
    }
`
