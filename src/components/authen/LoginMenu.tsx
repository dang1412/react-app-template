import React from 'react';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface LoginMenuProps {
  onLogin: (provider: string) => void;
}

const LoginMenu: React.FC<LoginMenuProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleLogin = (provider: string) => {
    setOpen(false);
    props.onLogin(provider);
  }

  return (
    <React.Fragment>
      <Button color="inherit" onClick={() => setOpen(true)}>Login</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle id="simple-dialog-title">Sign In</DialogTitle>
        <Button onClick={() => handleLogin('facebook')}>Facebook</Button>
        <Button onClick={() => handleLogin('twitter')}>Twitter</Button>
        <Button onClick={() => handleLogin('google')}>Google</Button>
      </Dialog>
    </React.Fragment>
  )
}

export default LoginMenu;
