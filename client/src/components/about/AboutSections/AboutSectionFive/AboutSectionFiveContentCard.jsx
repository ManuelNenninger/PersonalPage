function AboutSectionFiveContentCard(props) {
  return (
    <>
    <div className="col-lg-4 col-12">
      <div className="About-SectionFive-AgreePlan-ContentCard">
        <div className="About-SectionFive-AgreePlan-ContentCard-MiddleContainer">
          <div>
            <props.icon className={props.styleClasses.root}/>
          </div>
          <div className="About-SectionFive-AgreePlan-CardTitle">
            <h4>{props.contentTitel}</h4>
          </div>
          <div className="About-SectionOne-content-wrapper-horizontalDivider">
            <div>
            </div>
          </div>
          <div className="About-SectionFive-AgreePlanCardContent">
            {props.contentText.map(function(contentText) {
              return(
                <h3>{contentText}</h3>
              );
            })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutSectionFiveContentCard;
