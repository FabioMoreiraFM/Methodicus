import AuthContext from 'context/auth-context';
import withContext from 'hoc/withContext';
import PropTypes from 'prop-types';

import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp, Settings } from '@material-ui/icons';

import { Name, NameContainer, ProfileContainer } from './style';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1),
    pointerEvents: 'auto'
  },
}));

const ProfilePopover = (props) => {
  const { history, context, open, anchorEl, handlePopoverClose, onMouseEnter, onMouseLeave } = props

  const username = context.state.name
  const classes = useStyles();

  const goTo = (path) => {
    return history.push(path)
  }

  const menus = [
    ['Configurações', <Settings key={0} />, () => goTo('/home/settings')],
    ['Sair', <ExitToApp key={1} />, () => goTo('/login')]
  ]

  const list = () => (
    <div
      role="presentation"
    >
      <List component="nav">
        {menus.map((menu) => (
          <ListItem button key={menu[0]} onClick={menu[2]}>
            <ListItemIcon>{menu[1]}</ListItemIcon>
            <ListItemText primary={menu[0]} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  const getFirstName = () => {
    return username.split(' ')[0]
  }

  const getSurName = () => {
    return username.split(' ')[1]
  }

  const getAvatarName = () => {
    let avatarName = ''
    try {
      avatarName = `${getFirstName()[0]} ${getSurName()[0]}`
    } catch (e) {
      avatarName = `${getFirstName()[0]}`
    }

    return avatarName
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
      <ProfileContainer>
        <Avatar>{getAvatarName()}</Avatar>
        <NameContainer>
          <Name>{getFirstName()}</Name>
          <Name>{getSurName()}</Name>
        </NameContainer>
      </ProfileContainer>
      <Divider variant="middle" />
      {list()}
    </Popover>
  );
}

export default withContext(AuthContext)(ProfilePopover);

ProfilePopover.propTypes = {
  history: PropTypes.object,
  context: PropTypes.object,
  open: PropTypes.bool,
  anchorEl: PropTypes.object,
  handlePopoverClose: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}