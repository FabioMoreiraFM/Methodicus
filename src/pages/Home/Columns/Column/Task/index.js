import { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';

import TaskDialog from 'components/UI/Dialogs/TaskDialog';

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
        return (
            <>
                <Draggable draggableId={this.props.task.id} index={this.props.index}>
                    {(provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            onClick={this.handleClickOpen}
                        >
                            {this.props.task.content}
                            {this.props.task.additionalContent &&
                                <IconContainer>
                                    {
                                        this.props.task.description && <PlaylistAddIcon />
                                    }
                                </IconContainer>
                            }
                        </Container>
                    )}
                </Draggable>
                {this.state.open &&
                    <TaskDialog open={this.state.open} handleClose={this.handleClose} task={this.props.task} columnId={this.props.columnId} />
                }
            </>
        )
    }
}

export default Task;