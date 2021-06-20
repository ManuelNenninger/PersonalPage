
import "./Navbar.css";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
    color: "#3E5659;",
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Poppins",
  },
  typography: {
    fontFamily: "Poppins",
    margin: theme.spacing(1),
  },

}));
const callToActionButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,224,163, 1)",
    borderColor: '#FFE0A3',
    boxShadow: 'none',
    color: '#3E5659',
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'rgba(255,224,163, 0.8)',
      boxShadow: 'none',
      color: '#3E5659',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFE0A3',

    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(116,160,166, 0.5)',
    },
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();
  const callToActionButtonClasses = callToActionButton();

  return (
    <div >

      <AppBar position="static" classes={{root: classes.root}}>
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            Manuel Nenninger
          </Typography>
          <Button color="inherit" className={classes.typography} >Work</Button >
          <Button color="inherit" className={classes.typography} >About</Button >
          <Button color="inherit" className={callToActionButtonClasses.root} >Call to Action</Button >
        </Toolbar>
      </AppBar>

    </div>
  );
}
