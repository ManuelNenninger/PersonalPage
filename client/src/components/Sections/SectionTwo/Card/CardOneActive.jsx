import React from 'react';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const ContactButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(61,85,89, 0.8)",
    borderColor: '#3D5559',
    boxShadow: 'none',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: 'rgba(61,85,89, 0.5)',
      boxShadow: 'none',
      color: '#FFFFFF',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(61,85,89, 0.5)',

    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(116,160,166, 0.5)',
    },
  },
}));

function CardOneActive(props) {
  const ContactButtonclasses = ContactButton();
  return (
    <Fade in={true} style={{
      transformOrigin: '0 0 0'
    }} {...(true ? { timeout: 300 } : {})}>
    <div className="cardOneActivOverlay">
      <div className="cardOneActivTitel">
        <h4>{props.CardOneActiveTitel}</h4>
      </div>
      <div className="cardOneActivContent">
        <h3>{props.CardOneActiveContent}</h3>
      </div>
      <div className="cardOneActiv-button-container">
        <Button variant="contained" size="large" color="primary" className={ContactButtonclasses.root}>
          Contact me
        </Button>
      </div>
    </div>
    </Fade>
  );
}

export default CardOneActive;
