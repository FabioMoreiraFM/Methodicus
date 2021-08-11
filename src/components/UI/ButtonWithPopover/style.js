import styled from 'styled-components'

import { IconButton } from '@material-ui/core';

export const HeaderIconButton = styled(IconButton)`
    color: ${props => props.buttoncolor};
    &:hover {
        background: #D5D6D8;
        color: black;
    }
    margin-right: 1rem;
`