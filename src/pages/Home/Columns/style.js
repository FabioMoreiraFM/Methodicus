import styled from 'styled-components'
import theme from 'config/theme';

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    overflow-y: auto;
    ${theme.breakpoints.down("xs")} {    
        padding-top: 3rem;
        flex-direction: column;
    }
`