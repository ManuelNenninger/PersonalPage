import React from 'react';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {
  makeStyles
} from '@material-ui/core/styles';
import "./AboutSectionFive.css";
import AboutSectionFiveContentCard from "./AboutSectionFiveContentCard";



const iconStyles = makeStyles((theme) => ({
  root: {
    color: '#3D5559',
    fontSize: 50,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const cardContentOne = [
  "I love to work and connect with people in different business areas from around the world.",
  "So do not be afraid to reach out to me. There will be no complicated business communications."
];
const cardContentTwo = [
  "I am experienced in working with large enterprise corporations and small businesses. I can stick to orderly processes as well as work in uncertain environments."
];
const cardContentThree = [
  "I am constantly learning from my clients and their awesome businesses to improve myself and help them solve their problems.",
];

function AboutSectionFive() {
  const classes = iconStyles();

  return (
    <>
  <section className="About-SectionFive">
    <div className="About-SectionFive-AgreePlan-Container">
      <div className="row About-SectionFive-AgreePlan-Row">
        <AboutSectionFiveContentCard
          icon={QuestionAnswerRoundedIcon}
          styleClasses={classes}
          contentTitel="Communication is key"
          contentText={cardContentOne}
        />
        <AboutSectionFiveContentCard
          icon={BusinessCenterIcon}
          styleClasses={classes}
          contentTitel="Suited for any environment"
          contentText={cardContentTwo}
        />
        <AboutSectionFiveContentCard
          icon={MenuBookIcon}
          styleClasses={classes}
          contentTitel="I am a lifetime student"
          contentText={cardContentThree}
        />
      </div>
    </div>
  </section>
  </>
  );
}

export default AboutSectionFive;
