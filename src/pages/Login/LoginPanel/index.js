import { Component } from "react";
import {Grid, TextField} from '@material-ui/core'
import PasswordInput from '../PasswordInput'

export default class LoginPanel extends Component {
    render() {
        return (
            <Grid item container direction="column" spacing={3}>
                <Grid item>
                    <TextField fullWidth id="outlined-basic" label="Usuário" variant="outlined" />                                        
                </Grid>
                <Grid item>
                    <PasswordInput placeholder="Senha" />                                        
                </Grid>
            </Grid>
        )
    }
}