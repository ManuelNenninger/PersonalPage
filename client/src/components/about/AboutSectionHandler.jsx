import AboutSectionOne from "./AboutSections/AboutSectionOne/AboutSectionOne";
import AboutSectionTwo from "./AboutSections/AboutSectionTwo/AboutSectionTwo";
import AboutSectionThree from "./AboutSections/AboutSectionThree/AboutSectionThree";
import AboutSectionFour from "./AboutSections/AboutSectionFour/AboutSectionFour";
import Footer from "../Sections/SectionFour/SectionFour";
import SectionSplitter from "./SectionSplitter/SectionSplitter";
import VisibilitySensor from 'react-visibility-sensor';
import Grow from '@material-ui/core/Grow';




function AboutSectionHandler() {
  let visibleAboutTwo = false;

  return (
    <>
      <AboutSectionOne />
      <SectionSplitter />
      <VisibilitySensor partialVisibility={true} minTopValue={200}>
      {
        ({isVisible}) => <Grow direction="right" in={visibleAboutTwo ? true : isVisible} onEnter={() => {visibleAboutTwo = true;}} style={{transformOrigin: '0 0 0'}} {...(isVisible ? { timeout: 800 } : {})}>
        <div>
          <AboutSectionTwo />
        </div>
      </Grow>
      }
      </VisibilitySensor>
      <SectionSplitter />
      <VisibilitySensor partialVisibility={true} minTopValue={200}>
      {
        ({isVisible}) => <Grow direction="right" in={visibleAboutTwo ? true : isVisible} onEnter={() => {visibleAboutTwo = true;}} style={{transformOrigin: '0 0 0'}} {...(isVisible ? { timeout: 800 } : {})}>
        <div>
          <AboutSectionThree />
        </div>
      </Grow>
      }
      </VisibilitySensor>
      <SectionSplitter />
      <VisibilitySensor partialVisibility={true} minTopValue={200}>
      {
        ({isVisible}) => <Grow direction="right" in={visibleAboutTwo ? true : isVisible} onEnter={() => {visibleAboutTwo = true;}} style={{transformOrigin: '0 0 0'}} {...(isVisible ? { timeout: 800 } : {})}>
        <div>
          <AboutSectionFour />
        </div>
      </Grow>
      }
      </VisibilitySensor>
      <section className="About-SectionFooter">
      <Footer />
      </section>
    </>
  );
}

export default AboutSectionHandler;
