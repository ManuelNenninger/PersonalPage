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

  //  React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if(oldProgress === 10){
  //         clearInterval(timer);
  //         return 10;
  //       } else {
  //         return (oldProgress+1);
  //       }
  //     });
  //     console.log("Im Running");
  //   }, 20);
  //   console.log("useeffect is trunning");
  // }, [show]);


  return (
    <>
    <VisibilitySensor partialVisibility={true} minTopValue={300} onChange={onChange}>
    <div className="About-Section-content-wrapper-SkillsResume">
    {props.skillsArray.map(function(skill){
      return (
      <AboutSectionSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName={skill.skillName}
        skillValue={skill.skillValue}
      />);
    })}
    </div>
    </VisibilitySensor> <
    />
  );
}

export default AboutSectionSkills
