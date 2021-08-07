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
  const classes = useStyles();
  
  const logout = () => {
    return props.history.push('/login')
  }

  const toSettings = () => {
    return props.history.push('/home/settings')
  }

  const menus = [
      ['Configurações', <Settings />, toSettings],
      ['Sair', <ExitToApp />, logout]   
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

  const username = props.context.state.name

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
          <Avatar>{username.split(' ')[0][0] + username.split(' ')[1][0]}</Avatar>
          <NameContainer>
            <Name>{username.split(' ')[0]}</Name>
            <Name>{username.split(' ')[1]}</Name>
          </NameContainer>
        </ProfileContainer>
        <Divider variant="middle" />
        {list()}
      </Popover>
  );
}

export default withContext(AuthContext)(ProfilePopover);