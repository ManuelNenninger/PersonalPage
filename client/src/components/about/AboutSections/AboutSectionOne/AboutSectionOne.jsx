import "./AboutSectionOne.css";

function AboutSectionOne() {
return (
<>
  <section className="About-SectionOne">
    <div className="row About-SectionOne-content-wrapper">
      <div className="col-md-6 col-12">
        <div className="About-SectionOne-content-wrapper-text">
          <div className="About-SectionOne-content-wrapper-titel">
            <h3>Hello, I´m Manuel</h3>
          </div>
          <div className="About-SectionOne-content-wrapper-content">
            <h4>I am a mechanical engineer and fullstack developer from munich</h4>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <div className="About-SectionOne-content-wrapper-image">
            <img src="/pictures/Programmer-rafiki-2.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</>
);
}

export default AboutSectionOne;
