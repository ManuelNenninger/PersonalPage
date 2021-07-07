import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ContactButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFD791",
    borderColor: '#FFD791',
    boxShadow: 'none',
    color: '#3D5559',
    '&:hover': {
      backgroundColor: '#3D5559',
      boxShadow: 'none',
      color: '#FFFFFF',
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

const AboutButton = makeStyles((theme) => ({
  root: {
    border: "1px solid #3D5559",
    boxShadow: 'none',
    color: '#3D5559',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'rgba(61,85,89, 0.2)',
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
      <h1>Let´s build beautiful, meaningful things together.</h1>
    </div>
    <div className="SThree-LCTA-CallToActionButtons">
      <div className="row SThree-LCTA-row justify-content-md-center">
        <div className="col-12 col-md-6">
          <Button variant="contained" size="large" color="primary" className={ContactButtonclasses.root}>
            Contact me
          </Button>
        </div>
        <div className="col-12 col-md-6">
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
