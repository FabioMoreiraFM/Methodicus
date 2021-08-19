import React from 'react';
import { Component } from 'react';

import PropTypes from 'prop-types';

import { HeaderIconButton } from "./style";

class ButtonWithPopover extends Component {
  state = {
    openedPopover: false,
    popoverAnchor: React.createRef(null)
  }

  handlePopoverOpen = () => {
    this.setState({ openedPopover: true })
  };

  handlePopoverClose = () => {
    this.setState({ openedPopover: false })
  };

  handlePopoverOnClick = () => {
    this.setState({ openedPopover: !this.state.openedPopover })
  }

  render() {
    const { handleType, buttoncolor, children, popover: Popover } = this.props

    const handleTypeClick = handleType === 'onClick' ? true : null
    const handleTypeMouseOver = handleType === 'onMouseOver' ? true : null

    return (
      <>
        <HeaderIconButton
          ref={this.state.popoverAnchor}
          aria-owns={'mouse-over-popover'}
          aria-haspopup="true"
          onMouseEnter={handleTypeMouseOver && this.handlePopoverOpen}
          onMouseLeave={handleTypeMouseOver && this.handlePopoverClose}
          onClick={handleTypeClick && this.handlePopoverOnClick}
          buttoncolor={buttoncolor}
        >
          {children}
        </HeaderIconButton>
        {Popover &&
          <Popover
            open={this.state.openedPopover}
            anchorEl={this.state.popoverAnchor.current}
            onMouseEnter={this.handlePopoverOpen}
            onExit={this.handlePopoverClose}
            onMouseLeave={this.handlePopoverClose}
          />
        }
      </>
    )
  }
}


export default ButtonWithPopover;

ButtonWithPopover.propTypes = {
  handleType: PropTypes.string,
  buttoncolor: PropTypes.string,
  children: PropTypes.node,
  popover: PropTypes.func
}