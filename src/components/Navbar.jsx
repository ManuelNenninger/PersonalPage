
import "./Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'transparent',
    color: "#3E5659;",
    boxShadow: "0px 0px 2px 0px #445e61",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Lexend, sans-serif',
  },
  typography: {
    fontFamily: 'Lexend, sans-serif',
    margin: theme.spacing(1),
    color: 'inherit',
    textDecoration: 'none',
  },

}));
const callToActionButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFD791",
    borderColor: '#FFD791',
    boxShadow: 'none',
    color: '#3E5659',
    margin: theme.spacing(1),
    fontFamily: 'Lexend, sans-serif',
    '&:hover': {
      backgroundColor: 'rgba(255,215,145, 0.8)',
      boxShadow: 'none',
      color: '#3E5659',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFD791',

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
            <Link to="/">Manuel Nenninger</Link>
          </Typography>
          <Button color="inherit" className={classes.typography} ><Link to="/work">Work</Link></Button >
          <Button color="inherit" className={classes.typography} ><Link to="/about">About</Link></Button >
          <Button color="inherit" className={callToActionButtonClasses.root} >
            <a href="mailto:manuel.nenninger@web.de?subject=Mail from Your Site">Contact me</a>
          </Button >
        </Toolbar>
      </AppBar>

    </div>
  );
}
