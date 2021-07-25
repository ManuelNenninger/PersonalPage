import "./WorkSectionHandler.css";
import WorkSectionOne from "./WorkSectionOne/WorkSectionOne";
import VisibilitySensor from 'react-visibility-sensor';
import Grow from '@material-ui/core/Grow';

function WorkSectionHandler() {
  let visibleWorkOne = false;

  return(
    <>
    <VisibilitySensor partialVisibility={true} minTopValue={200}>
    {
      ({isVisible}) => <Grow direction="right" in={visibleWorkOne ? true : isVisible} onEnter={() => {visibleWorkOne = true;}} style={{transformOrigin: '0 0 0'}} {...(isVisible ? { timeout: 800 } : {})}>
        <div>
          <WorkSectionOne />
        </div>
      </Grow>
    }
    </VisibilitySensor>
    </>
  );
}
export default WorkSectionHandler;
