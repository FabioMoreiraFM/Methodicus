import React from 'react';

import img from 'assets/logo.png'
import ButtonWithPopover from 'components/UI/ButtonWithPopover';
import PropTypes from 'prop-types';

import { Toolbar, Hidden } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { Logo, StyledAppBar, TradeMark, StyledLogoLink } from "./styles";

import HeaderDrawer from './Drawer';
import NotificationPopover from "./HeaderPopovers/NotificationPopover";
import ProfilePopover from "./HeaderPopovers/ProfilePopover";

const Header = (props) => {
    const { history } = props

    const ProfilePopoverWithProps = (otherProps) => (
        <ProfilePopover
            history={history}
            {...otherProps}
        />
    )

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <Hidden smUp>
                    <HeaderDrawer history={history} />
                </Hidden>
                <StyledLogoLink to="/home/">
                    <Logo src={img} alt="logotipo da empresa" />
                    <TradeMark>Methodicus</TradeMark>
                </StyledLogoLink>
                <Hidden xsDown>
                    <ButtonWithPopover popover={NotificationPopover} teste handleType="onMouseOver" buttoncolor="#D5D6D8">
                        <NotificationsNoneIcon />
                    </ButtonWithPopover>
                    <ButtonWithPopover popover={ProfilePopoverWithProps} handleType="onMouseOver" buttoncolor="#D5D6D8">
                        <AccountCircle />
                    </ButtonWithPopover>
                </Hidden>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header

Header.propTypes = {
    history: PropTypes.object
}