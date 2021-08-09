import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExitToApp, Settings } from '@material-ui/icons';
import { Name, NameContainer, ProfileContainer } from './style';
import withContext from 'hoc/withContext';
import AuthContext from 'context/auth-context';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing(1),
    pointerEvents: 'auto'
  },
}));

function ProfilePopover (props) {
  const username = props.context.state.name
  const classes = useStyles();
  
  const goTo = (path) => {
    return props.history.push(path)
  }

  const menus = [
      ['Configurações', <Settings />, () => goTo('/home/settings')],
      ['Sair', <ExitToApp />, () => goTo('/login')]   
  ]

  const list = () => (
      <div
        role="presentation"
      >
        <List component="nav">
          {menus.map((menu, index) => (
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
      avatarName = getFirstName()[0] + getSurName()[0]
    } catch (e) {
      avatarName = getFirstName()[0]
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
        disableRestoreFocus
        PaperProps={{onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave}}
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