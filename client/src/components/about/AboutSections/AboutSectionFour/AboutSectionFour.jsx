import "./AboutSectionFour.css";
import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ContactButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFD791",
    borderColor: '#FFD791',
    boxShadow: 'none',
    color: '#3D5559',
    margin: theme.spacing(3),
    fontSize: "20.48px",
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
    border: "1px solid rgb(62,86,89)",
    boxShadow: 'none',
    color: '#3D5559',
    margin: theme.spacing(3),
    fontSize: "20.48px",
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

function AboutSectionFour() {
  const ContactButtonclasses = ContactButton();
  const AboutButtonclasses = AboutButton();

  return (
    <>
  <section className="About-SectionFour">
    <div className="About-SectionFour-content-wrapper">
      <div className="row About-SectionFour-RowForContent">
        <div className="col-md-6 col-12">
          <div className="About-SectionFour-content-wrapper-content">
            <div className="About-SectionFour-content-wrapper-titel">
              <h3>About Me</h3>
            </div>
            <div className="About-SectionFour-content-wrapper-text">
              <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</h4>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="About-SectionFour-content-wrapper-buttons">
            <div className="row">
              <div className="col-6">
                <Button size="large" className={ContactButtonclasses.root}>Contact me</Button>
              </div>
              <div className="col-6">
                <Button size="large" className={AboutButtonclasses.root}>Work</Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section> <
    />
  );
}

export default AboutSectionFour;
