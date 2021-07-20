import "./AboutSectionTwo.css";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AboutSectionSkills from "../AboutSectionContentSkillsResume/AboutSectionSkills/AboutSectionSkills";
import AboutSectionResume from "../AboutSectionContentSkillsResume/AboutSectionResume/AboutSectionResume";
import Grow from '@material-ui/core/Grow';



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

function AboutSectionTwo() {
  const SwitchbuttonsClasses = Switchbuttons();
  const [showSkillsResume, setshowSkillsResume] = React.useState(true);
  const [showSkillsResumeGrowth, setshowSkillsResumeGrowth] = React.useState(false);

  const skillsArray = [
  {
    skillName: "Computer-aided-design (CAD)",
    skillValue: 90,
  },
  {
    skillName: "Finite-Elemente-Methoden (FEM)",
    skillValue: 80,
  },
  {
    skillName: "Microsoft Office (Excel, PowerPoint, Word, ...)",
    skillValue: 90,
  },
  {
    skillName: "ECU Measurement and Calibration via Inca and Vector",
    skillValue: 80,
  },
  {
    skillName: "MATLAB",
    skillValue: 30,
  },
  {
    skillName: "Konstruktion & Auslegung",
    skillValue: 30,
  },
  {
    skillName: "Konstruktion & Auslegung",
    skillValue: 80,
  },
]

const resumeArray = [
  {
    zeitraum: "2019",
    resumeTitel: "Consultant - Capgemini Engineering",
    resumeDescribtion: "Inbetriebnahme zukünftiger BMW Hybrid-, Elektrofahrzeuge und Entwicklungsstufen. Unterstützung der Antriebsentwicklung und deren Prozesspartner bei der Inbetriebnahme und Fehleranalyse",
  },
  {
    zeitraum: "Jan. 2019 - Juli 2019",
    resumeTitel: "Bachelorand - AUDI AG",
    resumeDescribtion: "Konzeptionelle Untersuchung und Ausarbeitung eines konsequenten Hybrid-Antriebs (...) für eine umsetzbare Konzeptstudie",
  },
  {
    zeitraum: "Sep. 2017 - März 2018",
    resumeTitel: "Konstruktion Praktikant - AUDI AG",
    resumeDescribtion: "Konstruktion V-Motoren",
  },
  {
    zeitraum: "Jan. 2015 - Juli 2017",
    resumeTitel: "Werkstudent - Nenninger & Co GmbH",
    resumeDescribtion: "Wartung elektrischer Antriebskomponenten und Leistungselektronik für Industrieanwendungen.",
  },
]

return (
<>
  <section className="About-SectionTwo">
    <div className="About-SectionTwo-content-wrapper">
      <div className="row About-SectionTwo-RowForContent">
        <div className="col-md-6 col-12">
          <div className="About-SectionTwo-content-wrapper-image">
            <img src="/pictures/Create-rafiki-3.svg" alt="" />
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
                showSkillsResume ? <AboutSectionSkills skillsArray={skillsArray} /> : <AboutSectionResume resumeArray={resumeArray}/>
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
