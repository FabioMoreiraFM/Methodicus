import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { default as Options } from 'components/UI/ButtonWithPopover';
import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';

import { ClickAwayListener } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import OptionsPopover from './ColumnPopovers/OptionsPopover';
import { Container, TaskList, Title, NewTaskContainer, HeaderContainer, RenameTextField } from './style';
import Task from './Task';



class Column extends Component {
    state = {
        editColumnNameActive: false
    }


    handleEditColumnName = () => {
        this.setState({ editColumnNameActive: false })
    }

    render() {
        const { context } = this.props

        const OptionsPopverWithProps = (props) => (
            <OptionsPopover
                onDeleteColumn={context.onDeleteColumn}
                onRenameColumn={() => this.setState({ editColumnNameActive: !this.state.editColumnNameActive })}
                columnId={this.props.column.id}
                {...props}
            />
        )

        const header = (provided) => (
            <HeaderContainer>
                {!this.state.editColumnNameActive &&
                    <Title {...provided.dragHandleProps}>
                        {this.props.column.title}
                    </Title>
                }
                {
                    this.state.editColumnNameActive &&
                    <ClickAwayListener onClickAway={this.handleEditColumnName}>
                        <RenameTextField id="standard-basic" value={this.props.column.title} onChange={(e) => context.onRenameColumn(this.props.column.id, e.target.value)} InputLabelProps={{ shrink: false }} {...provided.dragHandleProps} />
                    </ClickAwayListener>
                }
                <Options popover={OptionsPopverWithProps} onClick>
                    <MoreHorizIcon />
                </Options>
            </HeaderContainer>
        )

        const taskList = () => (
            <Droppable droppableId={this.props.column.id}>
                {
                    (provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} columnId={this.props.column.id} />)}
                            {provided.placeholder}
                        </TaskList>
                    )
                }
            </Droppable>
        )

        const footer = () => (
            <NewTaskContainer to="/home" onClick={() => context.onClickNewTask(this.props.column.id)}>
                + Nova tarefa
            </NewTaskContainer>
        )

        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        {header(provided)}
                        {taskList(provided)}
                        {footer()}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default withContext(TaskContext)(Column);