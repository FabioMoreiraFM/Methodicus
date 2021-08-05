import { Button, TextField } from '@material-ui/core'
import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    padding: 1rem 0;
    min-width: 30rem;
    justify-content: space-evenly;
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
`