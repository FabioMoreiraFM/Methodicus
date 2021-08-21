import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { TextField } from '@material-ui/core'

export const Container = styled.div`
    margin: 1rem;
    border: 1px solid var(--light-grey);
    background-color: var(--task-dialog-background);
    min-width: 16rem;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 6px;
    max-height: 25rem;

    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.div`
    display: flex;
`

export const Title = styled.h3`
    margin: 0;
    padding: 0.5rem;
    font-weight: 100;
    flex-grow: 1;
`

export const TaskList = styled.div`
    padding: 0.5rem;
    background-color: ${props => (props.isDraggingOver ? 'var(--light-grey)' : "var(--task-dialog-background)")};
    transition: background-color 0.2s ease;
    flex-grow: 1;
    min-height: 2rem;
    max-height: 25rem;

    overflow: auto;
`

export const NewTaskContainer = styled(Link)`
    min-height: 2.5rem;
    text-decoration: none;
    color: var(--black);

    display: flex;
    align-items: center;
    padding-left: 0.7rem;

    &:hover {
        background-color: var(--hover-more-button);
    }
`

export const RenameTextField = styled(TextField)`
    margin-left: 0.5rem;
    margin-top: 0.30rem;
    width: 11rem;
`