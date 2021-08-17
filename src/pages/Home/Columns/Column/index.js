import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { default as Options } from 'components/UI/ButtonWithPopover';
import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

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
        this.props.enqueueSnackbar('Coluna renomeada com sucesso.', { variant: 'success' })
        this.setState({ editColumnNameActive: false })
    }

    render() {
        const { context, column, index, tasks } = this.props

        const OptionsPopverWithProps = (props) => (
            <OptionsPopover
                onDeleteColumn={context.onDeleteColumn}
                onRenameColumn={() => this.setState({ editColumnNameActive: !this.state.editColumnNameActive })}
                columnId={column.id}
                {...props}
            />
        )

        const header = (provided) => (
            <HeaderContainer>
                {!this.state.editColumnNameActive &&
                    <Title {...provided.dragHandleProps}>
                        {column.title}
                    </Title>
                }
                {
                    this.state.editColumnNameActive &&
                    <ClickAwayListener onClickAway={this.handleEditColumnName}>
                        <RenameTextField id="standard-basic" value={column.title} onChange={(e) => context.onRenameColumn(column.id, e.target.value)} InputLabelProps={{ shrink: false }} {...provided.dragHandleProps} />
                    </ClickAwayListener>
                }
                <Options popover={OptionsPopverWithProps} onClick>
                    <MoreHorizIcon />
                </Options>
            </HeaderContainer>
        )

        const taskList = () => (
            <Droppable droppableId={column.id}>
                {
                    (provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {tasks.map((task, index) => <Task key={task.id} task={task} index={index} columnId={column.id} />)}
                            {provided.placeholder}
                        </TaskList>
                    )
                }
            </Droppable>
        )

        const footer = () => (
            <NewTaskContainer to="/home" onClick={() => context.onClickNewTask(column.id)}>
                + Nova tarefa
            </NewTaskContainer>
        )

        return (
            <Draggable draggableId={column.id} index={index}>
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

export default withSnackbar(
    withContext(TaskContext)(Column)
);

Column.propTypes = {
    context: PropTypes.object,
    enqueueSnackbar: PropTypes.func,
    tasks: PropTypes.array,
    column: PropTypes.object,
    index: PropTypes.number
}