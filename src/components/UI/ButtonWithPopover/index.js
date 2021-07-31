import React from 'react';
import { HeaderIconButton } from "./style";

const ButtonWithPopover = ({popover: Popover, ...props}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const handlePopoverOnClick = (event) => {
      setAnchorEl(anchorEl === null ? event.currentTarget : null)
    }
    
    const open = Boolean(anchorEl);

    return (
        <>
            <HeaderIconButton 
                aria-owns={open ? 'mouse-over-popover' : undefined} 
                aria-haspopup="true" 
                onMouseEnter={props.onMouseOver && handlePopoverOpen} 
                onMouseLeave={props.onMouseOver && handlePopoverClose} 
                onClick={props.onClick && handlePopoverOnClick}
                buttoncolor={props.buttoncolor}
              >                
                {props.children}
            </HeaderIconButton>
            { Popover && 
              <Popover 
                open={open} 
                anchorEl={anchorEl} 
                onExit={handlePopoverClose}
              />
            }
        </>
    )
}

export default ButtonWithPopover;