import { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';

import { Container } from './style';

class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Task;