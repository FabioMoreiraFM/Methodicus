import React from 'react'
import { Component } from 'react'

import PropTypes from 'prop-types';

const initialData = {
    username: 'teste@teste.com',
    name: 'Usuário Teste'
}

const AuthContext = React.createContext({
    initialData,
    onEditUser: () => { }
})

export class AuthContextProvider extends Component {
    state = initialData

    onEditUser = (newUsername, newName) => {
        this.setState({
            username: newUsername,
            name: newName
        })
    }

    render() {
        const { children } = this.props

        return (
            <AuthContext.Provider value={{
                state: this.state,
                onEditUser: this.onEditUser
            }}
            >
                {children}
            </AuthContext.Provider>
        )
    }

}

export default AuthContext

AuthContextProvider.propTypes = {
    children: PropTypes.node
}