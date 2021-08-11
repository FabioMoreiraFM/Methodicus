import theme from 'config/theme';
import styled from 'styled-components'

import { Button, TextField } from '@material-ui/core'

export const InputContainer = styled.div`
    display: flex;
    padding: 1rem 0;
    justify-content: space-evenly;
    min-width: 30rem;
    ${theme.breakpoints.down("xs")} {    
        justify-content: flex-start;
        min-width: 19rem;
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