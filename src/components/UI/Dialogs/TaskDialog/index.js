import React,{ Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DescriptionIcon from '@material-ui/icons/Description';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { InputContainer, DialogActions, ActionButton, StyledTextField } from './style';
import { DialogTitle, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import withContext from 'hoc/withContext';
import TaskContext from 'context/tasks-context';

class TaskDialog extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.task.id,
      content: this.props.task.content,
      description: this.props.task.description
    }
  }

  onHandleChange = (field, value) => {
    this.setState({[field]: value})
  }

  onHandleClose = () => {
    this.props.context.onEditTask(this.state)
    this.props.handleClose()
  }

  onDeleteTask = () => {
    this.props.context.onDeleteTask(this.state.id, this.props.columnId)
  }

  preventNewLine = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  }

  render() {
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.onHandleClose} aria-labelledby="form-dialog-title">
          <DialogTitle>Editar tarefa</DialogTitle>
          <DialogContent>
            <InputContainer>
              <DescriptionIcon  />
              <StyledTextField            
                id="name"            
                type="text"
                InputLabelProps={{shrink: false}} 
                value={this.state.content}
                onKeyDown={this.preventNewLine}
                onChange={(e) => this.onHandleChange("content", e.target.value)}        
                multiline
                maxRows={4}
                placeholder="Descreva a tarefa."
              />
            </InputContainer>

            <InputContainer>
              <PlaylistAddIcon />
              <StyledTextField            
                id="name"            
                type="text"
                InputLabelProps={{shrink: false}} 
                placeholder="Adicione detalhes sobre a tarefa." 
                value={this.state.description}  
                onKeyDown={this.preventNewLine}
                onChange={(e) => this.onHandleChange("description", e.target.value)}         
                multiline
                maxRows={4}
              />
            </InputContainer>
          </DialogContent>
          <Divider variant="middle" />
          <DialogTitle>Ações</DialogTitle>
          <DialogActions>
            <ActionButton
              variant="outlined"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={this.onDeleteTask}
            >
              Excluir
            </ActionButton>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withContext(TaskContext)(TaskDialog);