import "./Navbar.css";
import React from 'react';
import {
  Link
} from "react-router-dom";
import {
  makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';





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
  buttons: {
    fontFamily: 'Lexend, sans-serif',
    margin: theme.spacing(1),
    color: 'inherit',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  callToActionButton: {
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
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
}));




export default function ButtonAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
       >
         <a href="mailto:manuel.nenninger@web.de?subject=Mail from Your Site">
         <MenuItem style={{backgroundColor: "#FFD791"}}>
           <IconButton aria-label="show 11 new notifications" color="inherit">
               <MailIcon />
           </IconButton>
           Contact me
         </MenuItem>
         </a>
         <Link to="/about">
         <MenuItem >
           <IconButton>
             <AccountCircle />
           </IconButton>
           About
         </MenuItem>
         </Link>
         <Link to="/work">
         <MenuItem>
           <IconButton aria-label="show 4 new mails" color="inherit">
               <WorkIcon />
           </IconButton>
           Work
         </MenuItem>
         </Link>
       </Menu>
  );

  return (
    <div >

      <AppBar position="static" classes={{root: classes.root}}>
        <Toolbar >
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Manuel Nenninger</Link>
          </Typography>
          <Button color="inherit" className={classes.buttons} ><Link to="/work">Work</Link></Button >
          <Button color="inherit" className={classes.buttons} ><Link to="/about">About</Link></Button >
          <Button color="inherit" className={classes.callToActionButton} >
            <a href="mailto:manuel.nenninger@web.de?subject=Mail from Your Site">Contact me</a>
          </Button >
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon className={classes.sectionMobile}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

    </div>
  );
}
