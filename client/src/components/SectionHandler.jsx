import React, {
  useState,
  useEffect
} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Grow from '@material-ui/core/Grow';
import "./SectionHandler.css";
import SectionTwo from "./SectionTwo";

function SectionHandler() {
  let [visibleSectionTwo, visibleSectionThree, visibleSectionFour] = [false];

  return (
    <div className="scroll-container">
    <section>
      <h2>Websites are like business cards on the web, make sure it's a good one</h2>
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
            <h2>Section 2</h2>
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
              <h2>Section 3</h2>
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
