import { Component } from "react";
import {Grid} from '@material-ui/core'
import LoginInput from '../LoginInput'

export default class RecoverPasswordPanel extends Component{
    render () {
        return (
            <Grid item container direction="column" spacing={3}>
                <Grid item>
                    <LoginInput fullWidth id="outlined-basic" placeholder="Usuário" variant="outlined" />                                        
                </Grid>
                <Grid item>
                    <LoginInput password placeholder="Senha" />                                        
                </Grid>
                <Grid item>
                    <LoginInput password placeholder="Confirmar Senha" />                                        
                </Grid>
            </Grid>            
        )
    }
}