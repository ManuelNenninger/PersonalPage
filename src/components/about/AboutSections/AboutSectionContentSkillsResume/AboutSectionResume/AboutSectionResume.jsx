import React from 'react';
import AboutSectionResumeListItemBigBullet from "./AboutSectionResumeListItemBigBullet";
import AboutSectionResumeListItemSmallBullet from "./AboutSectionResumeListItemSmallBullet";

function AboutSectionResume(props) {
  return (
    <>
  <div className="About-Section-content-wrapper-ResumeList">
    <ul>
      {props.resumeArray.map(function(resume, index){
        if(index === 0) {
          return (
            <AboutSectionResumeListItemBigBullet
            zeitraum={resume.zeitraum}
            resumeTitel={resume.resumeTitel}
            resumeDescribtion={resume.resumeDescribtion}
            />
          );
        } else {
          return(
            <AboutSectionResumeListItemSmallBullet
              zeitraum={resume.zeitraum}
              resumeTitel={resume.resumeTitel}
              resumeDescribtion={resume.resumeDescribtion}
            />
          );
        }
      })}
    </ul>
  </div>
  </>
  );
}

export default AboutSectionResume;
