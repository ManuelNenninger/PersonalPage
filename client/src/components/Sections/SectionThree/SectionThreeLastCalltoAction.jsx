import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ContactButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255,224,163, 1)",
    borderColor: '#FFE0A3',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFE0A3',
      border: "1px solid rgb(62,86,89)",
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgb(255,225,255)',
    },
  },
}));

const AboutButton = makeStyles((theme) => ({
  root: {
    border: "1px solid rgb(62,86,89)",
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'rgba(62,86,89, 0.2)',
      border: "1px solid rgb(62,86,89)",
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgb(116,160,166)',
    },
  },
}));


function SectionThreeLastCalltoAction() {
  const ContactButtonclasses = ContactButton();
  const AboutButtonclasses = AboutButton();
  return (
    <div className="SectionThreeLastCalltoAction">
  <div className="SThree-LCTA-Fitter">
    <div className="SThree-LCTA-CallToAction">
      <h1>Lorem ipsum Column</h1>
    </div>
    <div className="SThree-LCTA-CallToActionButtons">
      <div className="row SThree-LCTA-row justify-content-md-center">
        <div className="col">
          <Button variant="contained" size="large" color="primary" className={ContactButtonclasses.root}>
            Contact me
          </Button>
        </div>
        <div className="col">
          <Button variant="outlined" size="large" color="primary" className={AboutButtonclasses.root}>
            About Me
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default SectionThreeLastCalltoAction;
