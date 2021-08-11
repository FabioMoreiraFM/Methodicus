import React from 'react'

export default function withContext(Context) {
    // eslint-disable-next-line react/display-name
    return (Component) => (props) => {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        )
    }
}