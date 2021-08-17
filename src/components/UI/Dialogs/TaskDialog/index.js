import React, { Component } from 'react';

import MaterialUIPickers from 'components/UI/DatePicker';
import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

import { DialogTitle, Divider } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import { InputContainer, DialogActions, ActionButton, StyledTextField } from './style';

class TaskDialog extends Component {

  constructor(props) {
    super(props)

    const { task } = this.props

    this.state = {
      id: task.id,
      content: task.content,
      description: task.description,
      additionalContent: false,
      startDate: task.startDate,
      endDate: task.endDate,
      inputStatus: {
        contentError: false,
        contentMessage: ''
      }
    }
  }

  onHandleChange = (field, value) => {
    this.setState({ [field]: value, inputStatus: { contentError: false, contentMessage: '' } })
  }

  onHandleClose = () => {
    const newTask = { ...this.state }

    if (newTask.description) {
      newTask.additionalContent = true
    }

    if (newTask.content === '') {
      newTask.inputStatus.contentError = true
      newTask.inputStatus.contentMessage = 'Campo de preenchimento obrigatório!'
    }

    if (!newTask.inputStatus.contentError) {
      delete newTask.inputStatus
      this.props.enqueueSnackbar('Tarefa editada com sucesso!', { variant: 'success' })
      this.props.context.onEditTask(newTask)
      this.props.handleClose()
    } else {
      this.props.enqueueSnackbar('Erro ao salvar edição!', { variant: 'error' })
      this.setState(newTask)
    }
  }

  onDeleteTask = () => {
    this.props.enqueueSnackbar('Tarefa excluída com sucesso!', { variant: 'success' })
    this.props.context.onDeleteTask(this.state.id, this.props.columnId)
  }

  preventNewLine = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  }

  render() {
    const { contentError, contentMessage } = this.state.inputStatus
    const { open } = this.props

    return (
      <div>
        <Dialog open={open} onClose={this.onHandleClose} aria-labelledby="form-dialog-title">
          <DialogTitle>Editar tarefa</DialogTitle>
          <DialogContent>
            <InputContainer>
              <DescriptionIcon />
              <StyledTextField
                id="name"
                type="text"
                InputLabelProps={{ shrink: false }}
                value={this.state.content}
                onKeyDown={this.preventNewLine}
                onChange={(e) => this.onHandleChange("content", e.target.value)}
                multiline
                maxRows={4}
                placeholder="Descreva a tarefa."
                error={contentError}
                helperText={contentMessage}
              />
            </InputContainer>

            <InputContainer>
              <PlaylistAddIcon />
              <StyledTextField
                id="name"
                type="text"
                InputLabelProps={{ shrink: false }}
                placeholder="Adicione detalhes sobre a tarefa."
                value={this.state.description}
                onKeyDown={this.preventNewLine}
                onChange={(e) => this.onHandleChange("description", e.target.value)}
                multiline
                maxRows={4}
              />
            </InputContainer>

            <InputContainer>
              <MaterialUIPickers title="Data Início" date={this.state.startDate} onChange={this.onHandleChange} type="startDate" />
            </InputContainer>
            <InputContainer>
              <MaterialUIPickers title="Data Prevista" date={this.state.endDate} onChange={this.onHandleChange} type="endDate" />
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

export default
  withSnackbar(
    withContext(TaskContext)(TaskDialog)
  );

TaskDialog.propTypes = {
  task: PropTypes.object,
  enqueueSnackbar: PropTypes.func,
  context: PropTypes.object,
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  columnId: PropTypes.string
}