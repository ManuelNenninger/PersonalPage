import React from 'react';
import Fade from '@material-ui/core/Fade';


function CardOneActive(props) {
  return (
    <Fade in={true} style={{
      transformOrigin: '0 0 0'
    }} {...(true ? { timeout: 300 } : {})}>
    <div className="cardOneActivOverlay">
      <div className="cardOneActivTitel">
        <h4>{props.CardOneActiveTitel}</h4>
      </div>
      <div className="cardOneActivContent">
        <h3>{props.CardOneActiveContent}</h3>
      </div>
    </div>
    </Fade>
  );
}

export default CardOneActive;
