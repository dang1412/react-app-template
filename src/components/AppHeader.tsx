import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


interface AppHeaderProps {
  onClickMenu: () => void;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    link: {
      color: 'white'
    },
  }),
);

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.onClickMenu}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit">
          <Link className={classes.link} to="/"><HomeIcon /></Link>
        </IconButton>
        <Button color="inherit"><Link to="/about" className={classes.link}>About</Link></Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
