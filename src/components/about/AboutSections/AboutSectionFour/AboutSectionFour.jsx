import "./AboutSectionFour.css";
import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";


const ContactButton = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFD791",
    borderColor: '#FFD791',
    boxShadow: 'none',
    color: '#3D5559',
    margin: theme.spacing(3),
    fontSize: "20.48px",
    fontFamily: 'Lexend, sans-serif',
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
            <div className="About-SectionOne-content-wrapper-horizontalDivider">
              <div>
              </div>
            </div>
            <div className="About-SectionFour-content-wrapper-text">
              <h4>
                Hello. I am Manuel Nenninger, a mechanical engineer with a focus on automotive engineering. I am passionate about developing the future of driving and
                already worked with big automotive companies to help them to build the next generation of vehicles.
              </h4>
              <h4>
                In my free time i love to build beautiful websites, creating intuitive designs, turn big problems into simple solutions and work with positive people around the world.
              </h4>
              <h3>
                What´s more?
              </h3>
              <h4>
                When I am not in front of some computers you can find me eating sushi, working out or meeting with my family and friends.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="About-SectionFour-content-wrapper-buttons">
            <div className="row">
              <div className="col-6">
                <Button size="large" className={ContactButtonclasses.root}>
                  <a href="mailto:manuel.nenninger@web.de?subject=Mail from Your Site">Contact me</a>
                </Button>
              </div>
              <div className="col-6">
                <Button size="large" className={AboutButtonclasses.root}><Link to="/work">Work</Link></Button>
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
