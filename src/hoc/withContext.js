import React from 'react'

export default function withContext(Context) {
    return (Component) => (props) => {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        )    
    }
}