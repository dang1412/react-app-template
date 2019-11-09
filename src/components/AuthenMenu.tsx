import React from 'react';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const AuthenMenu: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button color="inherit" onClick={() => setOpen(true)}>Login</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle id="simple-dialog-title">Sign In</DialogTitle>
        <Button onClick={() => setOpen(false)}>Facebook</Button>
        <Button onClick={() => setOpen(false)}>Twitter</Button>
        <Button onClick={() => setOpen(false)}>Google</Button>
      </Dialog>
    </React.Fragment>
  )
}

export default AuthenMenu;
