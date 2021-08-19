import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

import { MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList, ListItemIcon, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

const OptionsPopover = (props) => {

  const { onRenameColumn, enqueueSnackbar, onDeleteColumn, open, anchorEl, onExit, columnId } = props

  const onHandleRenameColumn = () => {
    onRenameColumn();
    onExit();
  }

  const onHandleDeleteColumn = (columnId) => {
    enqueueSnackbar('Coluna removida com sucesso.', { variant: 'success' })
    onDeleteColumn(columnId)
  }

  const menus = [
    [<Delete key={0} />, 'Apagar Coluna', onHandleDeleteColumn],
    [<Edit key={1} />, 'Renomear', onHandleRenameColumn]
  ]

  return (
    <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={onExit}>
              <MenuList autoFocusItem={open} id="menu-list-grow" >
                {menus.map(menuItem => (
                  <MenuItem key={menuItem} onClick={() => menuItem[2](columnId)}>
                    <ListItemIcon>{menuItem[0]}</ListItemIcon>
                    <ListItemText>{menuItem[1]}</ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default withSnackbar(OptionsPopover)

OptionsPopover.propTypes = {
  onRenameColumn: PropTypes.func,
  onExit: PropTypes.func,
  enqueueSnackbar: PropTypes.func,
  onDeleteColumn: PropTypes.func,
  open: PropTypes.bool,
  anchorEl: PropTypes.object,
  columnId: PropTypes.string
}