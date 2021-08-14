import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const NotificationContainer = styled.div`
    max-width: 20rem;
    padding: 0.5rem;
`
export const MoreNotificationsContainer = styled.div`
    padding: 0.5rem;
    &:hover {
        background-color: var(--light-grey)
    }
`

export const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: inherit;    
`