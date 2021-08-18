import { Component } from "react";

import { Grid } from '@material-ui/core'
import { AlertTitle } from '@material-ui/lab';

import { LoginButton, SuccessAlert } from "../styles";

import LoginInput from '../LoginInput'

class RecoverPasswordPanel extends Component {
    state = {
        user: "",
        password: "",
        confirmPassword: "",
        userError: false,
        passwordError: false,
        confirmPasswordError: false,
        userMessage: "",
        passwordMessage: "",
        confirmPasswordMessage: "",
        success: false
    }

    handleOnChange = (type, value) => {
        this.setState({ [type]: value })
    }

    onHandleSubmit = () => {
        let newState = { ...this.state }

        if (newState.user === '') {
            newState.userError = true
            newState.userMessage = "Campo de preenchimento obrigatório!"
        }

        if (newState.password === '') {
            newState.passwordError = true
            newState.passwordMessage = "Campo de preenchimento obrigatório!"
        }

        if (newState.confirmPassword === '') {
            newState.confirmPasswordError = true
            newState.confirmPasswordMessage = "Campo de preenchimento obrigatório!"
        }

        if (newState.password !== newState.confirmPassword) {
            newState.confirmPasswordError = true
            newState.confirmPasswordMessage = "As senhas não são iguais!"
        }

        if (!newState.userError && !newState.passwordError && !newState.confirmPasswordError) {
            newState.success = true
        }

        this.setState(newState)
    }

    onClickClearError = (error, message) => {
        this.setState({ [error]: false, [message]: "" })
    }

    render() {
        return (
            <Grid item container direction="column" spacing={3}>
                <Grid item>
                    <LoginInput id="recoverUser"
                        error={this.state.userError}
                        helperText={this.state.userMessage}
                        fullWidth placeholder="Usuário"
                        variant="outlined"
                        onChange={(e) => this.handleOnChange("user", e.target.value)}
                        onClick={() => this.onClickClearError("userError", "userMessage")} />
                </Grid>
                <Grid item>
                    <LoginInput
                        id="recoverPassword"
                        error={this.state.passwordError}
                        helperText={this.state.passwordMessage}
                        password
                        placeholder="Senha"
                        onChange={(e) => this.handleOnChange("password", e.target.value)}
                        onClick={() => this.onClickClearError("passwordError", "passwordMessage")} />
                </Grid>
                <Grid item>
                    <LoginInput
                        id="recoverPasswordConfirm"
                        error={this.state.confirmPasswordError}
                        helperText={this.state.confirmPasswordMessage}
                        password
                        placeholder="Confirmar Senha"
                        onChange={(e) => this.handleOnChange("confirmPassword", e.target.value)}
                        onClick={() => this.onClickClearError("confirmPasswordError", "confirmPasswordMessage")} />
                </Grid>
                <Grid item>
                    <LoginButton
                        onClick={this.onHandleSubmit}
                        arial-label="Entrar"
                        fullWidth
                        variant="outlined">
                        ENTRAR
                    </LoginButton>
                </Grid>
                <Grid item>
                    {this.state.success &&
                        <SuccessAlert severity="success">
                            <AlertTitle>Sucesso!</AlertTitle> {"Você receberia um e-mail agora. Entre com qualquer informação na aba \"Entrar\" para acessar o sistema."}
                        </SuccessAlert>
                    }
                </Grid>
            </Grid>
        )
    }
}

export default RecoverPasswordPanel