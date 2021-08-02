import TaskContext from 'context/tasks-context'
import React from 'react'

export default function withContext(Component) {
    return function contextComponent(props) {
        return (
            <TaskContext.Consumer>
                {context => <Component {...props} context={context} />}
            </TaskContext.Consumer>
        )
    }
}