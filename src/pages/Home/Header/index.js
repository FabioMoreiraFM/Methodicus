import React from 'react';
import {Toolbar, Hidden } from "@material-ui/core";
import img from 'assets/logo.png'
import { Logo, StyledAppBar, TradeMark } from "./styles";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { AccountCircle } from "@material-ui/icons";
import HeaderButton from "./HeaderButton";
import NotificationPopover from "./HeaderMenus/NotificationPopover";
import ProfilePopover from "./HeaderMenus/ProfilePopover";
import HeaderDrawer from './Drawer';

const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <HeaderDrawer />
                <Logo src={img} alt="logotipo da empresa" />
                <TradeMark>Methodicus</TradeMark>
                <Hidden xsDown>
                    <HeaderButton popover={NotificationPopover}>
                        <NotificationsNoneIcon />
                    </HeaderButton>
                    <HeaderButton popover={ProfilePopover}>
                        <AccountCircle />
                    </HeaderButton>
                </Hidden>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;