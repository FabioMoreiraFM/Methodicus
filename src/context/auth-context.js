import React from 'react'
import { Component } from 'react'

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
        return (
            <AuthContext.Provider value={{
                state: this.state,
                onEditUser: this.onEditUser
            }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthContext