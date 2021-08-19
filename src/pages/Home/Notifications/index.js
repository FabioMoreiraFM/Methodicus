import React from 'react'
import { Component } from 'react';

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';
import * as TaskUtils from 'utils/tasks';

import { Divider } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { HeaderDialog, NotificationsContainer, NotificationsDialog, DialogTitle, NotificationDialog, NotificationContainer } from './styles';

const NOTIFICATIONS_LIMIT = 999

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
        return TaskUtils.loadTaskNearEnd(tasks, NOTIFICATIONS_LIMIT)
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