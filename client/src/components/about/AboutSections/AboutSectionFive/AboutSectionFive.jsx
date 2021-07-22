import React from 'react';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {
  makeStyles
} from '@material-ui/core/styles';
import "./AboutSectionFive.css";



const iconStyles = makeStyles((theme) => ({
  root: {
    color: '#3D5559',
    fontSize: 50,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function AboutSectionFive() {
  const classes = iconStyles();

  return (
    <>
  <section className="About-SectionFive">
    <div className="About-SectionFive-AgreePlan-Container">
      <div className="row About-SectionFive-AgreePlan-Row">
        <div className="col-lg-4 col-12">
          <div className="About-SectionFive-AgreePlan-ContentCard">
            <div className="About-SectionFive-AgreePlan-ContentCard-MiddleContainer">
              <div>
                <QuestionAnswerRoundedIcon className={classes.root} />
              </div>
              <div className="About-SectionFive-AgreePlan-CardTitle">
                <h4>Communication is key</h4>
              </div>
              <div className="About-SectionOne-content-wrapper-horizontalDivider">
                <div>
                </div>
              </div>
              <div className="About-SectionFive-AgreePlanCardContent">
                <h3>I Love to work and connect with peaople in different business areas from around the world.</h3>
                <h3>So do not be afraid to reach out to me. There will be no complicated business communications.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="About-SectionFive-AgreePlan-ContentCard">
            <div className="About-SectionFive-AgreePlan-ContentCard-MiddleContainer">
              <div>
                <BusinessCenterIcon className={classes.root} />
              </div>
              <div className="About-SectionFive-AgreePlan-CardTitle">
                <h4>Suited for any environment</h4>
              </div>
              <div className="About-SectionOne-content-wrapper-horizontalDivider">
                <div>
                </div>
              </div>
              <div className="About-SectionFive-AgreePlanCardContent">
                <h3>I am experienced in working with large enterprise corporations and small businesses. I can sticking to orderly processes as well as work in uncertain environments.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="About-SectionFive-AgreePlan-ContentCard">
            <div className="About-SectionFive-AgreePlan-ContentCard-MiddleContainer">
              <div>
                <MenuBookIcon className={classes.root} />
              </div>
              <div className="About-SectionFive-AgreePlan-CardTitle">
                <h4>I am a lifetime student</h4>
              </div>
              <div className="About-SectionOne-content-wrapper-horizontalDivider">
                <div>
                </div>
              </div>
              <div className="About-SectionFive-AgreePlanCardContent">
                <h3>I am constantly learning from my clients and their awesome businesses to improve myself and help them solve their problems.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  );
}

export default AboutSectionFive;
