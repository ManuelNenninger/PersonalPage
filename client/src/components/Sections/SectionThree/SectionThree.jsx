import "./SectionThree.css";
import SectionThreeAgreementPlan from "./SectionThreeAgreementPlan";
import SectionThreeLastCalltoAction from "./SectionThreeLastCalltoAction";


function SectionThree(props) {
  return (
    <>
    <hr className="HrSThree"/>
    <div className="sectionThreeContainer">
      <SectionThreeAgreementPlan />
      <hr className="HrSThree"/>
      <SectionThreeLastCalltoAction />

    </div>
  </>
  );
}

export default SectionThree;
