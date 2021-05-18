import React, {
  useState,
  useEffect
} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Grow from '@material-ui/core/Grow';
import "./SectionHandler.css";
import SectionOne from "./Sections/SectionOne/SectionOne";
import SectionTwo from "./Sections/SectionTwo/SectionTwo";

function SectionHandler() {
  let [visibleSectionTwo, visibleSectionThree, visibleSectionFour] = [false];

  return (
    <div className="scroll-container">
    <section>
      <SectionOne />
    </section>
    <section>
    <VisibilitySensor>
      {
        ({isVisible}) => <Grow in={visibleSectionTwo
              ? true
              : isVisible} onEnter={() => {
              visibleSectionTwo = true;
            }} style={{
              transformOrigin: '0 0 0'
            }} {...(isVisible ? { timeout: 700 } : {})}>
            <div><SectionTwo /></div>
          </Grow>
      }
    </VisibilitySensor>
    </section>
    <section>
      <VisibilitySensor>
        {
          ({isVisible}) => <Grow in={visibleSectionThree
                ? true
                : isVisible} onEnter={() => {
                visibleSectionThree = true;
              }} style={{
                transformOrigin: '0 0 0'
              }} {...(isVisible ? { timeout: 700 } : {})}>
              <div>
                <SectionTwo />
              </div>
            </Grow>
        }
      </VisibilitySensor>
    </section>
    <section>
      <VisibilitySensor>
        {
          ({isVisible}) => <Grow in={visibleSectionFour
                ? true
                : isVisible} onEnter={() => {
                visibleSectionFour = true;
              }} style={{
                transformOrigin: '0 0 0'
              }} {...(isVisible ? { timeout: 700 } : {})}>
              <h2>Section 4</h2>
            </Grow>
        }
      </VisibilitySensor>
    </section>
  </div>
  );
}

export default SectionHandler;