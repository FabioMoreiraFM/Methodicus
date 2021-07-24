import React, { Component } from 'react';
import {Hidden, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

import HeaderButton from '../HeaderButton';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
      "& .MuiDrawer-paper": {
        background: "#263388",
        top: "3.5rem",
        color: "white"
      },
      "& .MuiListItemIcon-root": {
        color: "white"
      },
      "& .MuiDrawer-root": {
        zIndex: "-1 !important"
      }      
  }
})

class HeaderDrawer extends Component {
    state = {
        open: false,
        menus: [
            ['Notificações', <NotificationsNoneIcon />],
            ['Perfil', <AccountCircle /> ]   
        ]
    }

    toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        
        this.setState({open: isOpen});
    };

    list = () => (
        <div
          role="presentation"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          <List>
            {this.state.menus.map((menu, index) => (
              <ListItem button key={menu[0]}>
                <ListItemIcon>{menu[1]}</ListItemIcon>
                <ListItemText primary={menu[0]} />
              </ListItem>
            ))}
          </List>
        </div>
    );

    render() {
      const {classes} = this.props

      return (
          <Hidden smUp>
              <HeaderButton onClick={this.toggleDrawer(!this.state.open)}>
                  <MenuIcon />
              </HeaderButton>
              <Drawer anchor="left" open={this.state.open} onClose={() => this.toggleDrawer(false)} className={classes.root}>
                  {this.list()}
              </Drawer>
          </Hidden>
      )
    }
}

export default withStyles(styles)(HeaderDrawer);