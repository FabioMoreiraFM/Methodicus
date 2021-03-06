import React from 'react';

import TaskContext from 'context/tasks-context';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';
import * as TaskUtils from 'utils/tasks';

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

const NOTIFICATIONS_LIMIT = 5

const NotificationPopover = (props) => {
  const classes = useStyles();
  const { context, open, anchorEl, handlePopoverClose, onMouseEnter, onMouseLeave } = props

  const loadTaskNearEnd = () => {
    const { tasks } = context.state
    return TaskUtils.loadTaskNearEnd(tasks, NOTIFICATIONS_LIMIT)
  }

  return (
    <Popover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
      PaperProps={{ onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave }}
    >
      {
        loadTaskNearEnd().map(task => (
          <React.Fragment key={`${task.id}@`}>
            <NotificationContainer key={task.id}>
              {task.content} está próxima da data prevista ({task.endDate.toLocaleDateString('pt-BR')}).
            </NotificationContainer>
            <Divider key={`${task.id}%`} />
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

NotificationPopover.propTypes = {
  context: PropTypes.object,
  open: PropTypes.bool,
  anchorEl: PropTypes.object,
  handlePopoverClose: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}