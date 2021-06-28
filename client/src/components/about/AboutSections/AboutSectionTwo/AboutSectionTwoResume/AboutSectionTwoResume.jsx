import React from 'react';
import AboutSectionTwoResumeListItemBigBullet from "./AboutSectionTwoResumeListItemBigBullet";
import AboutSectionTwoResumeListItemSmallBullet from "./AboutSectionTwoResumeListItemSmallBullet";

function AboutSectionTwoResume() {
  return (
    <>
  <div className="About-SectionTwo-content-wrapper-ResumeList">
    <ul>
      <AboutSectionTwoResumeListItemBigBullet
        zeitraum="2019"
        resumeTitel="Consultant - Capgemini Engineering"
        resumeDescribtion="Inbetriebnahme zukünftiger BMW Hybrid-, Elektrofahrzeuge und Entwicklungsstufen. Unterstützung der Antriebsentwicklung und deren Prozesspartner bei der Inbetriebnahme und Fehleranalyse"
      />
      <AboutSectionTwoResumeListItemSmallBullet
        zeitraum="Jan. 2019 - Juli 2019"
        resumeTitel="Bachelorand - AUDI AG"
        resumeDescribtion="Konzeptionelle Untersuchung und Ausarbeitung eines konsequenten Hybrid-Antriebs (...) für eine umsetzbare Konzeptstudie"
      />
      <AboutSectionTwoResumeListItemSmallBullet
        zeitraum="Sep. 2017 - März 2018"
        resumeTitel="Konstruktion Praktikant - AUDI AG"
        resumeDescribtion="Konstruktion V-Motoren"
      />
      <AboutSectionTwoResumeListItemSmallBullet
        zeitraum="Jan. 2015 - Juli 2017"
        resumeTitel="Werkstudent - Nenninger & Co GmbH"
        resumeDescribtion="Wartung elektrischer Antriebskomponenten und Leistungselektronik für Industrieanwendungen."
      />
    </ul>
  </div>
    </>
  );
}

export default AboutSectionTwoResume;
