import { MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList, ListItemIcon, ListItemText } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

export default function OptionsPopover(props) {
  const onRenameColumn = () => {
    props.onRenameColumn();
    props.onExit();
  }

  const menus = [
    [<Delete key={0} />, 'Apagar Coluna', props.onDeleteColumn],
    [<Edit key={1} />, 'Renomear', onRenameColumn]
  ]

  return (
    <Popper open={props.open} anchorEl={props.anchorEl} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={props.onExit}>
              <MenuList autoFocusItem={props.open} id="menu-list-grow" >
                {menus.map(menuItem => (
                  <MenuItem key={menuItem} onClick={() => menuItem[2](props.columnId)}>
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