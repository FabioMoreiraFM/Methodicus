import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import theme from 'config/theme';

export const SettingsContainer = styled.div`
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
`

export const SettingsDialog = styled.div`
    background-color: white;    
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 40rem;
    height: 35rem;
    
    display: flex;
    flex-direction: column;

    ${theme.breakpoints.down("xs")} {
        width: 22rem;        
    }
`

export const HeaderDialog = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
`

export const AvatarDialog = styled.div`
    display: flex;
    justify-content: center;
`

export const DialogTitle = styled.h1`
    margin-left: 1rem;
    font-size: 2rem;
`

export const StyledAvatar = styled(Avatar)`
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
`

export const FormDialog = styled.div`
    margin-top: 2rem;
`

export const InputDialog = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    align-items: center;

    div {
        margin-left: 0.5rem;
        width: 15rem;
    }
`

export const ActionDialog = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 3rem;
    flex-grow: 1;
    button {
        height: 2rem;
        width: 15rem;
    }
`