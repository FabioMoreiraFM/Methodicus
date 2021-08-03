import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
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

export default function ProfilePopover (props) {
  const classes = useStyles();
  
  const logout = () => {
    return props.history.push('/login')
  }

  const menus = [
      ['Configurações', <Settings />],
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
          <Avatar>US</Avatar>
          <NameContainer>
            <Name>Usuário</Name>
            <Name>Teste</Name>
          </NameContainer>
        </ProfileContainer>
        <Divider variant="middle" />
        {list()}
      </Popover>
  );
}