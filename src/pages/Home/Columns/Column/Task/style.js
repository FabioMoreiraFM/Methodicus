import theme from 'config/theme';
import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: ${props => (props.isDragging ? 'white' : 'white')};    
    word-break: break-all;
    ${theme.breakpoints.up("lg")} {    
        max-width: 15rem;
    }
`

export const IconContainer = styled.div`
    svg {
        width: 1.2rem;
        height: 1.2rem;
    }
    height: 1.2rem;
`
