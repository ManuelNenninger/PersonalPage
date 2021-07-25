import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import AboutSectionSkillsComponent from "./AboutSectionSkillsComponent";

function AboutSectionSkills(props) {
  const [firstTimeVisible, setfirstTimeVisible] = React.useState(false);

  function onChange(isVisible) {
    if (isVisible === true) {
      setfirstTimeVisible(true);
    }
  }

  return (
    <>
    <VisibilitySensor partialVisibility={true} minTopValue={300} onChange={onChange}>
    <div className="About-Section-content-wrapper-SkillsResume">
    {props.skillsArray.map(function(skill, index){
      return (
      <AboutSectionSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName={skill.skillName}
        skillValue={skill.skillValue}
        key={index}
      />);
    })}
    </div>
    </VisibilitySensor> <
    />
  );
}

export default AboutSectionSkills;
