import { Component } from 'react'
import { Grid } from '@material-ui/core'
import { TabPanel, Tabs } from 'react-tabs'

import { GridFundo, LoginContainer, Logo, TradeMark, LoginTitle, LoginButton, LoginTab, TabLabel, LoginTabList } from './styles'
import img from 'assets/logo.png'
import LoginPanel from './LoginPanel'
import RecoverPasswordPanel from './RecoverPasswordPanel'

export default class Login extends Component {

    render() {
        return (
            <GridFundo container direction="column" justifyContent="center" alignItems="center">
                <Grid item container direction="column" justifyContent="center" alignItems="center">
                    <Logo src={img} alt="logotipo da empresa" />
                    <TradeMark>Methodicus</TradeMark>
                </Grid>
                <LoginContainer item>
                    <Grid item container direction="column" spacing={2} >
                        <Grid item>
                            <LoginTitle>Acesso à Área Administrativa</LoginTitle>
                        </Grid>
                        <Grid item>
                            <Tabs>
                                <LoginTabList>
                                    <LoginTab>
                                        <TabLabel>Entrar</TabLabel>
                                    </LoginTab>
                                    <LoginTab>
                                        <TabLabel>Esqueci minha senha</TabLabel>
                                    </LoginTab>
                                    <LoginTab>
                                        <TabLabel>Primeiro Acesso</TabLabel>
                                    </LoginTab>
                                </LoginTabList>
                                <TabPanel>
                                    <LoginPanel />
                                </TabPanel>
                                <TabPanel>
                                    <RecoverPasswordPanel />
                                </TabPanel>
                                <TabPanel>
                                    <RecoverPasswordPanel />
                                </TabPanel>
                            </Tabs>
                        </Grid>
                        <Grid item>
                            <LoginButton fullWidth variant="outlined">ENTRAR</LoginButton>
                        </Grid>
                    </Grid>
                </LoginContainer>
            </GridFundo>
        )
    }
}