import { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';

import Column from './Column'
import NewColumn from './NewColumn';
import { Container } from './style';


class Columns extends Component {
    render() {
        const { context } = this.props
        const { state } = context

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

export default withContext(TaskContext)(Columns);

Columns.propTypes = {
    context: PropTypes.object
}