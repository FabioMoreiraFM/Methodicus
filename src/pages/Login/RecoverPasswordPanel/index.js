import { Component } from "react";
import {Grid} from '@material-ui/core'
import LoginInput from '../LoginInput'

export default class RecoverPasswordPanel extends Component{
    render () {
        return (
            <Grid item container direction="column" spacing={3}>
                <Grid item>
                    <LoginInput id="recoverUser" fullWidth placeholder="Usuário" variant="outlined" />                                        
                </Grid>
                <Grid item>
                    <LoginInput id="recoverPassword" password placeholder="Senha" />                                        
                </Grid>
                <Grid item>
                    <LoginInput id="recoverPasswordConfirm" password placeholder="Confirmar Senha" />                                        
                </Grid>
            </Grid>            
        )
    }
}