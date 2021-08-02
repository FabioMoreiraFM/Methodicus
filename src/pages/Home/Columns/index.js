import { Component } from 'react'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { Container } from './style';
import NewColumn from './NewColumn';
import withContext from 'hoc/withContext';

class Columns extends Component {
    render() {
        const {context} = this.props
        const {state} = context

        return (
            <DragDropContext onDragEnd={context.onDragEnd} >
                <Droppable droppableId="all-columns" direction="horizontal" type="column">
                    {(provided) => (
                        <Container
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {state.columnOrder.map((columnId, index) => {
                                const column = state.columns[columnId]
                                const tasks = column.taskIds.map(taskId => state.tasks[taskId])
                    
                                return <Column 
                                    key={column.id} 
                                    column={column} 
                                    tasks={tasks} 
                                    index={index} 
                                    />
                            })}
                            {provided.placeholder}
                            <NewColumn />
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default withContext(Columns);