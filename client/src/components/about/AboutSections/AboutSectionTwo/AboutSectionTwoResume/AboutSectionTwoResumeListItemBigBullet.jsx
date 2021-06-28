import React from 'react';

function AboutSectionTwoResumeListItemBigBullet(props) {
  return (
    <>
    <li>
      <div className="bullet big">
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
          <path d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4zm0-4C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z"></path>
          <circle cx="16" cy="16" r="6"></circle>
        </svg>
      </div>
      <div className="About-SectionTwo-content-wrapper-Resume-content">
      <div className="About-SectionTwo-content-wrapper-Resume-zeitraum">
        <h3>Seit {props.zeitraum}</h3>
      </div>
        <div className="About-SectionTwo-content-wrapper-Resume-titel">
          <h3>{props.resumeTitel}</h3>
        </div>
        <div className="About-SectionTwo-content-wrapper-Resume-describtion">
          <h5>{props.resumeDescribtion}</h5>
        </div>
      </div>
    </li>
</>
  );
}

export default AboutSectionTwoResumeListItemBigBullet;
