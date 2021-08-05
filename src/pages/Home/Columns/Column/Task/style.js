import styled from 'styled-components'
import theme from 'config/theme';

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
