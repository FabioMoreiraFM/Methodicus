import { Component } from 'react'
import { TabPanel, Tabs } from 'react-tabs'

import img from 'assets/logo.png'
import { withMediaQuery } from 'hoc/withMediaQuery'
import PropTypes from 'prop-types';

import { Grid, Hidden } from '@material-ui/core'

import { GridFundo, LoginContainer, Logo, TradeMark, LoginTitle, LoginTab, TabLabel, LoginTabList } from './styles'

import LoginPanel from './LoginPanel'
import RecoverPasswordPanel from './RecoverPasswordPanel'

class Login extends Component {
    render() {
        const { matchesXS, history } = this.props

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
                                    <LoginPanel history={history} />
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

Login.propTypes = {
    matchesXS: PropTypes.bool,
    history: PropTypes.object
}