import { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Container, TaskList, Title } from './style';
import Task from './Task';

class Column extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided) => (
                    <Container 
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        <Title {...provided.dragHandleProps}>
                            {this.props.column.title}
                        </Title>
                        <Droppable droppableId={this.props.column.id}>
                            {
                                (provided, snapshot) => (
                                    <TaskList 
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        isDraggingOver={snapshot.isDraggingOver}
                                    >
                                        {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} /> )}
                                        {provided.placeholder}
                                    </TaskList>
                                )
                            }
                        </Droppable>
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Column;