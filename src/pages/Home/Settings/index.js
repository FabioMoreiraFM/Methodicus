import React from 'react'
import { Component } from 'react';

import AuthContext from 'context/auth-context';
import withContext from 'hoc/withContext';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

import { Button, TextField } from '@material-ui/core';
import { AccountCircle, Email } from '@material-ui/icons';
import SettingsIcon from '@material-ui/icons/Settings';

import { AvatarDialog, HeaderDialog, SettingsContainer, SettingsDialog, DialogTitle, StyledAvatar, FormDialog, InputDialog, ActionDialog } from './style';


class Settings extends Component {
    constructor(props) {
        super(props)

        const { context } = this.props

        this.state = {
            username: context.state.username,
            userError: false,
            userMessage: '',
            name: context.state.name,
            nameError: false,
            nameMessage: ''
        }
    }

    onHandleChange = (key, value, error, message) => {
        this.setState({ [key]: value, [error]: false, [message]: '' })
    }

    onHandleSubmit = () => {
        let newState = { ...this.state }

        if (newState.username === '') {
            newState.userError = true
            newState.userMessage = "Campo de preenchimento obrigatório!"
        }

        if (newState.name === '') {
            newState.nameError = true
            newState.nameMessage = "Campo de preenchimento obrigatório!"
        }

        this.setState(newState)

        if (!newState.userError && !newState.nameError) {
            this.props.enqueueSnackbar('Perfil de usuário editado com sucesso!', { variant: 'success' })
            this.props.context.onEditUser(this.state.username, this.state.name)
        } else {
            this.props.enqueueSnackbar('Falha ao editar perfil de usuário!', { variant: 'error' })
        }
    }

    getFirstName = () => {
        return this.props.context.state.name.split(' ')[0]
    }

    getSurName = () => {
        return this.props.context.state.name.split(' ')[1]
    }

    getAvatarName = () => {
        let avatarName = ''
        try {
            avatarName = this.getFirstName()[0] + this.getSurName()[0]
        } catch (e) {
            avatarName = this.getFirstName()[0]
        }

        return avatarName
    }

    render() {
        return (
            <SettingsContainer>
                <SettingsDialog>
                    <HeaderDialog>
                        <SettingsIcon fontSize="large" />
                        <DialogTitle>
                            Configurações
                        </DialogTitle>
                    </HeaderDialog>
                    <AvatarDialog>
                        <StyledAvatar>{this.getAvatarName()}</StyledAvatar>
                    </AvatarDialog>
                    <FormDialog>
                        <InputDialog>
                            <Email />
                            <TextField
                                placeholder="E-mail"
                                value={this.state.username}
                                error={this.state.userError}
                                helperText={this.state.userMessage}
                                onChange={(e) => this.onHandleChange("username", e.target.value, "userError", "userMessage")} />
                        </InputDialog>
                        <InputDialog>
                            <AccountCircle />
                            <TextField
                                placeholder="Usuário"
                                value={this.state.name}
                                error={this.state.nameError}
                                helperText={this.state.nameMessage}
                                onChange={(e) => this.onHandleChange("name", e.target.value, "nameError", "nameMessage")} />
                        </InputDialog>
                    </FormDialog>
                    <ActionDialog>
                        <Button variant="contained" color="primary" onClick={this.onHandleSubmit}>
                            Salvar
                        </Button>
                    </ActionDialog>
                </SettingsDialog>
            </SettingsContainer>
        )
    }
}

export default withSnackbar(
    withContext(AuthContext)(Settings)
)

Settings.propTypes = {
    context: PropTypes.object,
    enqueueSnackbar: PropTypes.func
}