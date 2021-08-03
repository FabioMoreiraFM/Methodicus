import React from 'react';
import {Toolbar, Hidden } from "@material-ui/core";
import img from 'assets/logo.png'
import { Logo, StyledAppBar, TradeMark } from "./styles";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { AccountCircle } from "@material-ui/icons";
import NotificationPopover from "./HeaderPopovers/NotificationPopover";
import ProfilePopover from "./HeaderPopovers/ProfilePopover";
import HeaderDrawer from './Drawer';
import ButtonWithPopover from 'components/UI/ButtonWithPopover';


const Header = (props) => {
    const ProfilePopoverWithProps = (otherProps) => (
        <ProfilePopover 
            history={props.history}
            {...otherProps}
        />
    )

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <HeaderDrawer />
                <Logo src={img} alt="logotipo da empresa" />
                <TradeMark>Methodicus</TradeMark>
                <Hidden xsDown>
                    <ButtonWithPopover popover={NotificationPopover} onMouseOver buttoncolor="#D5D6D8">
                        <NotificationsNoneIcon />
                    </ButtonWithPopover>
                    <ButtonWithPopover popover={ProfilePopoverWithProps} onMouseOver buttoncolor="#D5D6D8">
                        <AccountCircle />
                    </ButtonWithPopover>
                </Hidden>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;