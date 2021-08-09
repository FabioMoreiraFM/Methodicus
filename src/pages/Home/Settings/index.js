import React from 'react'
import { Component } from 'react';
import { AvatarDialog, HeaderDialog, SettingsContainer, SettingsDialog, DialogTitle, StyledAvatar, FormDialog, InputDialog, ActionDialog} from './style';
import SettingsIcon from '@material-ui/icons/Settings';
import { AccountCircle, Email } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core';
import withContext from 'hoc/withContext';
import AuthContext from 'context/auth-context';

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: this.props.context.state.username,
            name: this.props.context.state.name
        }
    }

    onHandleChange = (key, value) => {
        this.setState({[key]: value})
    }

    onHandleSubmit = () => {
        this.props.context.onEditUser(this.state.username, this.state.name)
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

    render () {
        return (
            <SettingsContainer>
                <SettingsDialog>
                    <HeaderDialog>
                        <SettingsIcon fontSize="large"/>
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
                            <TextField placeholder="E-mail" value={this.state.username} onChange={(e) => this.onHandleChange("username", e.target.value)} />
                        </InputDialog>
                        <InputDialog>
                            <AccountCircle />
                            <TextField placeholder="Usuário" value={this.state.name} onChange={(e) => this.onHandleChange("name", e.target.value)} />
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

export default withContext(AuthContext)(Settings)