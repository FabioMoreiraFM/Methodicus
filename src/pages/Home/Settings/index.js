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

    render () {
        const authState = this.props.context.state

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
                        <StyledAvatar>{authState.name.split(' ')[0][0] + authState.name.split(' ')[1][0]}</StyledAvatar>
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