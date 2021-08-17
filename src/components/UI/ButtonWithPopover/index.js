import React from 'react';

import PropTypes from 'prop-types';

import { HeaderIconButton } from "./style";

const ButtonWithPopover = ({ popover: Popover, ...props }) => {
  const { onMouseOver, onClick, buttoncolor, children } = props

  const [openedPopover, setOpenedPopover] = React.useState(false);
  const popoverAnchor = React.useRef(null);

  const handlePopoverOpen = () => {
    setOpenedPopover(true)
  };

  const handlePopoverClose = () => {
    setOpenedPopover(false)
  };

  const handlePopoverOnClick = () => {
    setOpenedPopover(!openedPopover)
  }

  return (
    <>
      <HeaderIconButton
        ref={popoverAnchor}
        aria-owns={'mouse-over-popover'}
        aria-haspopup="true"
        onMouseEnter={onMouseOver && handlePopoverOpen}
        onMouseLeave={onMouseOver && handlePopoverClose}
        onClick={onClick && handlePopoverOnClick}
        buttoncolor={buttoncolor}
      >
        {children}
      </HeaderIconButton>
      {Popover &&
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

ButtonWithPopover.propTypes = {
  onMouseOver: PropTypes.bool,
  onClick: PropTypes.bool,
  buttoncolor: PropTypes.string,
  children: PropTypes.node,
  popover: PropTypes.func
}