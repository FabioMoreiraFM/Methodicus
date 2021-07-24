import styled from 'styled-components'

export const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: #F6F7F9;
    width: 220px;

    display: flex;
    flex-direction: column;
`

export const Title = styled.h3`
    padding: 8px;
`

export const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : '#F6F7F9')};
    transition: background-color 0.2s ease;
    flex-grow: 1;
    min-height: 100px;
`
