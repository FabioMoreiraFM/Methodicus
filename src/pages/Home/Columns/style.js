import theme from 'config/theme';
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    overflow-y: auto;
    ${theme.breakpoints.down("xs")} {    
        padding-top: 3rem;
        flex-direction: column;
    }
`