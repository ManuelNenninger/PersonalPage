import AboutSectionOne from "./AboutSections/AboutSectionOne/AboutSectionOne";
import AboutSectionTwo from "./AboutSections/AboutSectionTwo/AboutSectionTwo";
import AboutSectionThree from "./AboutSections/AboutSectionThree/AboutSectionThree";
import AboutSectionFour from "./AboutSections/AboutSectionFour/AboutSectionFour";
import Footer from "../Sections/SectionFour/SectionFour";



function AboutSectionHandler() {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />
      <section className="About-SectionFooter">
      <Footer />
      </section>
    </>
  );
}

export default AboutSectionHandler;
