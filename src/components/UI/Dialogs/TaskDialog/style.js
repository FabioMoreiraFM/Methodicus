import theme from 'config/theme';
import styled from 'styled-components'

import { Button, TextField } from '@material-ui/core'

export const InputContainer = styled.div`
    display: flex;
    padding: 1rem 1rem;
    justify-content: ${props => props.justifyCenter ? 'center' : null};
    
    svg {
        margin-right: 0.5rem;
    }
    .MuiFormControl-root {
        margin-right: 0.5rem;
    }

    ${theme.breakpoints.down("xs")} {    
        padding: 1rem 0rem;
        svg {
            margin-right: 0rem;
        }
    }
`

export const DialogActions = styled.div`
    display: flex;
    padding: 0 0 1rem 1.5rem;    
`
export const ActionButton = styled(Button)`
    font-size: 14px;
`

export const StyledTextField = styled(TextField)`
    min-width: 25rem;
    ${theme.breakpoints.down("xs")} { 
        min-width: 15rem;
        margin-left: 1rem;
    }
`