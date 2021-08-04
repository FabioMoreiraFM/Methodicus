import React from 'react'
import { Component } from 'react'

const initialData = {
    username: 'teste@teste.com',
    name: 'Usuário Teste'    
}

const AuthContext = React.createContext({
    initialData     
})

export class AuthContextProvider extends Component {
    state = initialData

    render() {
        return (
            <AuthContext.Provider value={{
                state: this.state
            }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthContext