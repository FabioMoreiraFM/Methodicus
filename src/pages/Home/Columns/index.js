import { Component } from 'react'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { Container } from './style';
import NewColumn from './NewColumn';

const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: "Take out garbage"},
        'task-2': {id: 'task-2', content: "Watch my favorite show"},
        'task-3': {id: 'task-3', content: "Charge my phone"},
        'task-4': {id: 'task-4', content: "Cook dinner"}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: []
        }               
    },
    columnOrder: ['column-1', 'column-2']
}

class Columns extends Component {
    state = initialData
    
    onClickNewTask = (columnId) => {
        const newTask = {
            id: ''+Date.now(),
            content: "New Task"
        }

        const newColumns = {...this.state.columns[columnId]}
        newColumns.taskIds = Array.from(this.state.columns[columnId].taskIds)
        newColumns.taskIds.push(newTask.id)

        const newState = {
            ...this.state,
            tasks: {
                ...this.state.tasks,
                [newTask.id]: newTask
            },
            columns: {
                ...this.state.columns,
                [columnId]: newColumns
            }
        }

        this.setState(newState)
    }

    onClickCreateColumn = () => {
        const newColumn = {
            id: ''+Date.now(),
            title: 'New Column',
            taskIds: []
        }

        let newColumnOrder = Array.from(this.state.columnOrder)
        newColumnOrder.push(newColumn.id)

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            },
            columnOrder: newColumnOrder
        }

        this.setState(newState)
    }

    onDragEnd = result => {
        const {destination, source, draggableId, type} = result;

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
            ) {
            return;
        }

        if (type === 'column') {
            const newColumnOrder = Array.from(this.state.columnOrder)
            newColumnOrder.splice(source.index, 1)
            newColumnOrder.splice(destination.index, 0, draggableId)

            const newState = {
                ...this.state,
                columnOrder: newColumnOrder
            }
            this.setState(newState)
            return
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]
        
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
    
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)
    
            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }
    
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }
    
            this.setState(newState)
            return;
        }

        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }

        this.setState(newState)
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd} >
                <Droppable droppableId="all-columns" direction="horizontal" type="column">
                    {(provided) => (
                        <Container
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {this.state.columnOrder.map((columnId, index) => {
                                const column = this.state.columns[columnId]
                                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                    
                                return <Column key={column.id} column={column} tasks={tasks} index={index} onClickNewTask={this.onClickNewTask} />
                            })}
                            {provided.placeholder}
                            <NewColumn onClickCreateColumn={this.onClickCreateColumn} />
                        </Container>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default Columns;