import { Component } from "react";
import {Grid} from '@material-ui/core'
import LoginInput from '../LoginInput'

export default class LoginPanel extends Component {
    render() {
        return (
            <Grid item container direction="column" spacing={3}>
                <Grid item>
                    <LoginInput id="loginUser" fullWidth placeholder="Usuário" variant="outlined" />                                        
                </Grid>
                <Grid item>
                    <LoginInput id="loginPassword" password placeholder="Senha" />                                        
                </Grid>
            </Grid>
        )
    }
}