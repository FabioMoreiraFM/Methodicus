import React from 'react'
import { Component } from 'react';

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';

import { Divider } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { HeaderDialog, NotificationsContainer, NotificationsDialog, DialogTitle, NotificationDialog, NotificationContainer } from './styles';

class Notifications extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: this.props.context.state.tasks,
        }
    }

    loadTaskNearEnd = () => {
        const { tasks } = this.state
        const currentDate = new Date()
        let taskList = []

        Object.keys(tasks).forEach(key => {
            let task = tasks[key]
            const endDatePlus3 = new Date(task.endDate)
            endDatePlus3.setDate(endDatePlus3.getDate() + 3)

            if (endDatePlus3 >= currentDate) {
                taskList.push(task)
            }
        })

        return taskList
    }

    render() {
        return (
            <NotificationsContainer>
                <NotificationsDialog>
                    <HeaderDialog>
                        <SettingsIcon fontSize="large" />
                        <DialogTitle>
                            Notificações
                        </DialogTitle>
                    </HeaderDialog>
                    <NotificationDialog>
                        {
                            this.loadTaskNearEnd().map(task => (
                                <React.Fragment key={task.id + "@"}>
                                    <NotificationContainer key={task.id}>
                                        {task.content} está próxima da data prevista ({task.endDate.toLocaleDateString('pt-BR')}).
                                    </NotificationContainer>
                                    <Divider key={task.id + '%'} />
                                </React.Fragment>
                            ))
                        }
                    </NotificationDialog>
                </NotificationsDialog>
            </NotificationsContainer>
        )
    }
}

export default withContext(TaskContext)(Notifications)