import "./AboutSectionTwo.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AboutSectionTwoSkills from "./AboutSectionTwoSkills/AboutSectionTwoSkills";
import AboutSectionTwoResume from "./AboutSectionTwoResume/AboutSectionTwoResume";

const Switchbuttons = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(62,86,89, 0.4)",
    borderColor: '#3E5659',
    boxShadow: 'none',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: 'rgba(62,86,89, 0.5)',
      boxShadow: 'none',
      color: '#FFFFFF',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(62,86,89, 0.5)',
    },
  },
}));

function AboutSectionTwo() {
  const SwitchbuttonsClasses = Switchbuttons();
  const [showSkillsResume, setshowSkillsResume] = React.useState(true);

return (
<>
  <section className="About-SectionTwo">
    <div className="About-SectionTwo-content-wrapper">
      <div className="row About-SectionTwo-RowForContent">
        <div className="col-md-6 col-12">
          <div className="About-SectionTwo-content-wrapper-image">
            <img src="/pictures/Create-rafiki.svg" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="About-SectionTwo-content-wrapper-text">
            <div className="About-SectionTwo-content-wrapper-titel">
              <h4>By day I am a mechanical engineer.</h4>
            </div>
            <div className="About-SectionTwo-content-wrapper-choiceButtons">
              <ButtonGroup  aria-label="outlined primary button group">
                <Button className={SwitchbuttonsClasses.root} onClick={() => setshowSkillsResume(true)}>Skills</Button>
                <Button className={SwitchbuttonsClasses.root} onClick={() => setshowSkillsResume(false)}>Career</Button>
              </ButtonGroup>
            </div>

            <div className="About-SectionTwo-content-wrapper-content">
              {
                showSkillsResume ? <AboutSectionTwoSkills /> : <AboutSectionTwoResume />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
);
}

export default AboutSectionTwo;
