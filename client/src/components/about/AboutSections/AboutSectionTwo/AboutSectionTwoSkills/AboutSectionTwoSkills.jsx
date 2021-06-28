import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import AboutSectionTwoSkillsComponent from "./AboutSectionTwoSkillsComponent"

function AboutSectionTwoSkills(){
  const [firstTimeVisible, setfirstTimeVisible] = React.useState(false);

  function onChange (isVisible) {
    if(isVisible === true){
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


  return(
    <>
    <VisibilitySensor partialVisibility={true} minTopValue={300} onChange={onChange}>
    <div className="About-SectionTwo-content-wrapper-SkillsResume">
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="Computer-aided-design (CAD)"
        skillValue={90}
      />
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="Finite-Elemente-Methoden (FEM)"
        skillValue={80}
      />
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="ECU Measurement and Calibration via Inca and Vector"
        skillValue={80}
      />
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="Microsoft Office (Excel, PowerPoint, Word, ...)"
        skillValue={90}
      />
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="MATLAB"
        skillValue={30}
      />
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="Analytical problem solving"
        skillValue={90}
      />
      <AboutSectionTwoSkillsComponent
        firstTimeVisible={firstTimeVisible}
        skillName="Konstruktion & Auslegung"
        skillValue={80}
      />
    </div>
    </VisibilitySensor>
    </>
  );
}

export default AboutSectionTwoSkills
