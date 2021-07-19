import React from 'react';
import {Toolbar } from "@material-ui/core";
import img from 'assets/logo.png'
import { Logo, StyledAppBar, TradeMark } from "./styles";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { AccountCircle } from "@material-ui/icons";
import HeaderButton from "./HeaderButton";
import NotificationPopover from "./HeaderMenus/NotificationPopover";
import ProfilePopover from "./HeaderMenus/ProfilePopover";

const Header = () => {
    return (
            <StyledAppBar position="static">
                <Toolbar>
                    <Logo src={img} alt="logotipo da empresa" />
                    <TradeMark>Methodicus</TradeMark>
                    <HeaderButton popover={NotificationPopover}>
                        <NotificationsNoneIcon />
                    </HeaderButton>
                    <HeaderButton popover={ProfilePopover}>
                        <AccountCircle />
                    </HeaderButton>
                </Toolbar>
            </StyledAppBar>

    )
}

export default Header;