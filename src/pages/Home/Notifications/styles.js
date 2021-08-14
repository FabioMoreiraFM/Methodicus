import theme from 'config/theme';
import styled from 'styled-components'

export const NotificationsContainer = styled.div`
    flex-grow: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray);
`

export const NotificationsDialog = styled.div`
    background-color: white;    
    border: 1px solid var(--light-grey);
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
export const DialogTitle = styled.h1`
    margin-left: 1rem;
    font-size: 2rem;
`

export const NotificationDialog = styled.div`
    overflow-x: auto;
    padding: 1rem;
    color: black;
`

export const NotificationContainer = styled.div`    
    padding: 0.8rem 0.5rem;
`