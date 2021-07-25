import React from 'react';

function AboutSectionResumeListItemSmallBullet(props) {
  return (
    <>
  <li>
    <div className="bullet">
      <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
        <circle stroke="none" cx="16" cy="16" r="10"></circle>
      </svg>
    </div>
    <div className="About-Section-content-wrapper-Resume-content">
      <div className="About-Section-content-wrapper-Resume-zeitraum">
        <h3>{props.zeitraum}</h3>
      </div>
      <div className="About-Section-content-wrapper-Resume-titel">
        <h3>{props.resumeTitel}</h3>
      </div>
      <div className="About-Section-content-wrapper-Resume-describtion">
        <h5>{props.resumeDescribtion}</h5>
      </div>
    </div>
  </li>
</>
  );
}

export default AboutSectionResumeListItemSmallBullet;
