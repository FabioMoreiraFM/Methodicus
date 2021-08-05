import React from 'react'
import { Component } from 'react'

const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: "Take out garbage", description: ""},
        'task-2': {id: 'task-2', content: "Watch my favorite show", description: ""},
        'task-3': {id: 'task-3', content: "Charge my phone", description: ""},
        'task-4': {id: 'task-4', content: "Cook dinner", description: ""}
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

const TaskContext = React.createContext({
    initialData, 
    onRenameColumn: () => {}, 
    onDeleteColumn: () => {},
    onClickNewTask: () => {},
    onClickCreateColumn: () => {},
    onDragEnd: () => {},
    onEditTask: () => {},
    onDeleteTask: () => {}
})

export class TaskContextProvider extends Component {
    state = initialData

    onDeleteTask = (taskIdToDelete, columnId) => {
        const newTasks = {...this.state.tasks}
        delete newTasks[taskIdToDelete]
        
        const newColumns = {...this.state.columns}
        let newTaskIds = newColumns[columnId].taskIds
        newTaskIds = newTaskIds.filter(taskId => taskId !== taskIdToDelete)
        newColumns[columnId].taskIds = newTaskIds

        console.log(newColumns)

        this.setState({
            ...this.state,
            tasks: newTasks,
            columns: newColumns
        })
    }

    onEditTask = (newTask) => {
        let taskId = newTask.id

        const newTasks = {...this.state.tasks}
        newTasks[taskId] = newTask

        this.setState({
            ...this.state,
            tasks: newTasks
        })
    }

    onRenameColumn = (columnId, newColumnName) => {
        let newColumn = this.state.columns[columnId]
        newColumn.title = newColumnName

        let newColumns = {...this.state.columns}
        newColumns[columnId] = newColumn

        this.setState({
            ...this.state,
            columns: newColumns
        })
    }

    onDeleteColumn = columnId => {
        let newColumnOrder = Array.from(this.state.columnOrder)
        newColumnOrder = newColumnOrder.filter(columnOrder => columnOrder !== columnId)

        let newColumns = {...this.state.columns}
        let newTasks = {...this.state.tasks}

        let removedColumn = newColumns[columnId]
        removedColumn.taskIds.map(taskId => delete newTasks[taskId])

        delete newColumns[columnId]

        const newState = {
            ...this.state,
            columns: newColumns,
            columnOrder: newColumnOrder,
            tasks: newTasks
        }

        this.setState(newState)        
    }

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
            <TaskContext.Provider value={{
                state: this.state,
                onRenameColumn: this.onRenameColumn, 
                onDeleteColumn: this.onDeleteColumn,
                onClickNewTask: this.onClickNewTask,
                onClickCreateColumn: this.onClickCreateColumn,
                onDragEnd: this.onDragEnd,
                onEditTask: this.onEditTask,
                onDeleteTask: this.onDeleteTask
            }}
            >
                {this.props.children}
            </TaskContext.Provider>
        )
    }

}

export default TaskContext