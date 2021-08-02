import { Component } from 'react'
import { Grid, Hidden} from '@material-ui/core'
import { TabPanel, Tabs } from 'react-tabs'

import { GridFundo, LoginContainer, Logo, TradeMark, LoginTitle, LoginTab, TabLabel, LoginTabList } from './styles'
import img from 'assets/logo.png'
import LoginPanel from './LoginPanel'
import RecoverPasswordPanel from './RecoverPasswordPanel'
import { withMediaQuery } from 'hoc/withMediaQuery'

class Login extends Component {
    render() {
        const matchesXS = this.props.matchesXS        
        const gridFundoAlignItems = matchesXS ? "stretch" : "center";
        const gridFundoJustifyContent = matchesXS ? "flex-start" : "center";

        return (            
            <GridFundo container direction="column" justifyContent={gridFundoJustifyContent} alignItems={gridFundoAlignItems} >
                <Grid item container direction="column" justifyContent="center" alignItems="center">
                    <Logo src={img} alt="logotipo da empresa" />
                    <TradeMark>Methodicus</TradeMark>
                </Grid>
                <LoginContainer item>
                    <Grid item container direction="column" spacing={2} >
                        <Hidden xsDown>
                            <Grid item>
                                <LoginTitle>Acesso à Área Administrativa</LoginTitle>
                            </Grid>
                        </Hidden>
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
                                    <LoginPanel history={this.props.history} />
                                </TabPanel>
                                <TabPanel>
                                    <RecoverPasswordPanel />
                                </TabPanel>
                                <TabPanel>
                                    <RecoverPasswordPanel />
                                </TabPanel>
                            </Tabs>
                        </Grid>
                    </Grid>
                </LoginContainer>
            </GridFundo>
        )
    }
}

export default withMediaQuery([['matchesXS', theme => theme.breakpoints.down('xs')]])(Login)