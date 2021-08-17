import { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';

import TaskDialog from 'components/UI/Dialogs/TaskDialog';
import PropTypes from 'prop-types';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { Container, IconContainer } from './style';

class Task extends Component {
    state = {
        open: false
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { task, index, columnId } = this.props

        return (
            <>
                <Draggable draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            onClick={this.handleClickOpen}
                        >
                            {task.content}
                            {task.additionalContent &&
                                <IconContainer>
                                    {
                                        task.description && <PlaylistAddIcon />
                                    }
                                </IconContainer>
                            }
                        </Container>
                    )}
                </Draggable>
                {this.state.open &&
                    <TaskDialog open={this.state.open} handleClose={this.handleClose} task={task} columnId={columnId} />
                }
            </>
        )
    }
}

export default Task;

Task.propTypes = {
    task: PropTypes.object,
    index: PropTypes.number,
    columnId: PropTypes.string
}