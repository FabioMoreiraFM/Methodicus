import theme from 'config/theme';
import styled from 'styled-components'

export const Container = styled.div`
    border: ${props => (props.isDragging ? '1px solid var(--black)' : '1px solid var(--light-grey)')};
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: white;    
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
