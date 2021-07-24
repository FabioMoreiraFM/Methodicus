import React from 'react';
import { HeaderIconButton } from "./style";

const HeaderButton = ({popover: Popover, ...props}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    return (
        <>
            <HeaderIconButton aria-owns={open ? 'mouse-over-popover' : undefined} aria-haspopup="true" onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} onClick={props.onClick}>
                {props.children}
            </HeaderIconButton>
            { Popover && 
              <Popover open={open} anchorEl={anchorEl} onExit={handlePopoverClose}/>
            }
        </>
    )
}

export default HeaderButton;