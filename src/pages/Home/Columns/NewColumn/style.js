import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin: 1rem;
    border: 1px solid lightgrey;
    background-color: #F6F7F9;
    min-width: 14rem;
    height: 3rem;
    border-radius: 6px;

    box-shadow: 0px 3px 6px #00000029;
`

export const Title = styled.h3`
    margin: 0;    
    margin-left: 1rem;
    font-weight: 100;
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
