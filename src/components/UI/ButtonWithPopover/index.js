import React from 'react';
import { HeaderIconButton } from "./style";

const ButtonWithPopover = ({popover: Popover, ...props}) => {
    const [openedPopover, setOpenedPopover] = React.useState(null);
    const popoverAnchor = React.useRef(null);

    const handlePopoverOpen = (event) => {
      setOpenedPopover(true)
    };
  
    const handlePopoverClose = () => {
      setOpenedPopover(false)
    };

    const handlePopoverOnClick = (event) => {
      setOpenedPopover(!openedPopover)
    }
    
    return (
        <>
            <HeaderIconButton 
                ref={popoverAnchor}
                aria-owns={'mouse-over-popover'} 
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
                open={openedPopover} 
                anchorEl={popoverAnchor.current}
                onMouseEnter={handlePopoverOpen}
                onExit={handlePopoverClose}
                onMouseLeave={handlePopoverClose} 
              />
            }
        </>
    )
}

export default ButtonWithPopover;