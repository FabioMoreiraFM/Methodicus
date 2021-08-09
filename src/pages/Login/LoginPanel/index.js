import { Component } from "react";
import {Grid} from '@material-ui/core'
import LoginInput from '../LoginInput'

import { LoginButton } from "../styles";
import withContext from "hoc/withContext";
import AuthContext from "context/auth-context";

class LoginPanel extends Component {
    state = {
        user: "",
        password: "",
        userError: false,
        passwordError: false,
        userMessage: "",
        passwordMessage: ""
    }

    handleOnChange = (type, value) => {        
        this.setState({[type]: value})
    }

    onHandleSubmit = () => {
        let newState = {...this.state}

        if (newState.user === '') {
            newState.userError = true
            newState.userMessage = "Campo de preenchimento obrigatório!"
        }

        if (newState.password === '') {
            newState.passwordError = true
            newState.passwordMessage = "Campo de preenchimento obrigatório!"
        }

        this.setState(newState)

        if (!newState.userError && !newState.passwordError) {
            this.props.context.onEditUser("teste@teste.com", newState.user)
            this.props.history.push('/home')   
        }
    }

    onClickClearError = (error, message) => {
        this.setState({[error]: false, [message]: ""})
    }

    render() {        
        return (
            <Grid item container direction="column" spacing={3}>
                <Grid item>
                    <LoginInput id="loginUser" error={this.state.userError} helperText={this.state.userMessage} fullWidth placeholder="Usuário" variant="outlined" onChange={(e) => this.handleOnChange("user", e.target.value)} onClick={() => this.onClickClearError("userError", "userMessage")} />                                        
                </Grid>
                <Grid item>
                    <LoginInput id="loginPassword" error={this.state.passwordError} helperText={this.state.passwordMessage} password placeholder="Senha" onChange={(e) => this.handleOnChange("password", e.target.value)} onClick={() => this.onClickClearError("passwordError", "passwordMessage")} />                                        
                </Grid>
                <Grid item>
                    <LoginButton onClick={this.onHandleSubmit} arial-label="Entrar" fullWidth variant="outlined">ENTRAR</LoginButton>
                </Grid>                
            </Grid>            
        )
    }
}

export default withContext(AuthContext)(LoginPanel)