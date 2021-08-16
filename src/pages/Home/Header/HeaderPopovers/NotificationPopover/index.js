import React from 'react';

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';

import { Divider } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

import { NotificationContainer, MoreNotificationsContainer, StyledLink } from './styles';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    pointerEvents: 'auto'
  },
}));


function NotificationPopover(props) {
  const classes = useStyles();

  const loadTaskNearEnd = () => {
    const { tasks } = props.context.state
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

  return (
    <Popover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={props.open}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={props.handlePopoverClose}
      disableRestoreFocus
      PaperProps={{ onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave }}
    >
      {
        loadTaskNearEnd().map(task => (
          <React.Fragment key={task.id + "@"}>
            <NotificationContainer key={task.id}>
              {task.content} está próxima da data prevista ({task.endDate.toLocaleDateString('pt-BR')}).
            </NotificationContainer>
            <Divider key={task.id + '%'} />
          </React.Fragment>
        ))
      }
      <MoreNotificationsContainer>
        <StyledLink to="/home/notifications" >
          + Ver todas as notificações
        </StyledLink>
      </MoreNotificationsContainer>
    </Popover>
  );
}

export default withContext(TaskContext)(NotificationPopover);