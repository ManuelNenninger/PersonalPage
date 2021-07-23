import "./AboutSectionThree.css";
import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AboutSectionSkills from "../AboutSectionContentSkillsResume/AboutSectionSkills/AboutSectionSkills";
import AboutSectionResume from "../AboutSectionContentSkillsResume/AboutSectionResume/AboutSectionResume";

const Switchbuttons = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(61,85,89, 0.4)",
    borderColor: '#3D5559',
    boxShadow: '0px 0px 2px 0px #445e61',
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
  },
}));

function AboutSectionThree() {
  const SwitchbuttonsClasses = Switchbuttons();
  const [showSkillsResume, setshowSkillsResume] = React.useState(true);

  const skillsArray = [{
      skillName: "React.js",
      skillValue: 70,
    },
    {
      skillName: "Node.js",
      skillValue: 60,
    },
    {
      skillName: "Express",
      skillValue: 60,
    },
    {
      skillName: "Database via Mongoose",
      skillValue: 60,
    },
    {
      skillName: "Git",
      skillValue: 60,
    },
    {
      skillName: "HTML",
      skillValue: 80,
    },
    {
      skillName: "CSS",
      skillValue: 70,
    },
    {
      skillName: "JavaScript",
      skillValue: 70,
    },
  ]

  const resumeArray = [{
      zeitraum: "Aug. 2021",
      resumeTitel: "Freelancer - as Fullstack Web-Developer",
      resumeDescribtion: "In my off time, I help people bring their website visions to life or support their front-end & back-end development.",
    },
    {
      zeitraum: "Jan. 2021",
      resumeTitel: "Start of the juornay",
      resumeDescribtion: "",
    },
  ]

  return (
    <>
  <section className="About-SectionTwo">
    <div className="About-SectionTwo-content-wrapper">
      <div className="row About-SectionThree-RowForContent">
        <div className="col-md-6 col-12">
          <div className="About-SectionTwo-content-wrapper-text">
            <div className="About-SectionTwo-content-wrapper-titel">
              <h4>By night I am a fullstack developer.</h4>
            </div>
            <div className="About-SectionTwo-content-wrapper-choiceButtons">
              <ButtonGroup  aria-label="outlined primary button group">
                <Button className={SwitchbuttonsClasses.root} onClick={() => setshowSkillsResume(true)}>Skills</Button>
                <Button className={SwitchbuttonsClasses.root} onClick={() => setshowSkillsResume(false)}>Career</Button>
              </ButtonGroup>
            </div>
            <div className="About-SectionTwo-content-wrapper-content">
              {
                showSkillsResume ? <AboutSectionSkills skillsArray={skillsArray} /> : <AboutSectionResume resumeArray={resumeArray}/>
              }
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="About-SectionTwo-content-wrapper-image">
            <img src="/pictures/Code typing-bro-2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  );
}

export default AboutSectionThree;
