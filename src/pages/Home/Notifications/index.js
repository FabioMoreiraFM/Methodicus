import React from 'react'
import { Component } from 'react';

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';

import { Divider } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { HeaderDialog, NotificationsContainer, NotificationsDialog, DialogTitle, NotificationDialog, NotificationContainer } from './styles';

class Notifications extends Component {
    constructor(props) {
        super(props)

        const { context } = this.props

        this.state = {
            tasks: context.state.tasks,
        }
    }

    loadTaskNearEnd = () => {
        const { tasks } = this.state
        let taskList = []

        Object.keys(tasks).forEach(key => {
            let task = tasks[key]
            const currentDatePlus3 = new Date()
            currentDatePlus3.setDate(currentDatePlus3.getDate() + 3)
            currentDatePlus3.setHours(0, 0, 0, 0)

            if (task.endDate) {
                const taskDate = new Date(task.endDate.setHours(0, 0, 0, 0))
                const currentDate = new Date().setHours(0, 0, 0, 0)

                if (taskDate <= currentDatePlus3 && taskDate >= currentDate) {
                    taskList.push(task)
                }
            }
        })

        return taskList
    }

    getTaskListNearEnd = () => {
        return this.loadTaskNearEnd().map(task => (
            <React.Fragment key={`${task.id}@`}>
                <NotificationContainer key={task.id}>
                    {task.content} está próxima da data prevista ({task.endDate.toLocaleDateString('pt-BR')}).
                </NotificationContainer>
                <Divider key={`${task.id}%`} />
            </React.Fragment>
        ))
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
                            this.getTaskListNearEnd()
                        }
                    </NotificationDialog>
                </NotificationsDialog>
            </NotificationsContainer>
        )
    }
}

export default withContext(TaskContext)(Notifications)

Notifications.propTypes = {
    context: PropTypes.object
}