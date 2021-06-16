import React from 'react';

function CardOneUnActive(props) {
  return (
    <div className="STwo-cardsection-Fitter">
    <div className="cardOnePicture">
      <img src={props.CardOneUnActiveImage} alt="" />
    </div>
    <div className="cardOneTitel">
      <h4>{props.CardOneUnActiveTitel}</h4>
    </div>

  </div>
  );
}

export default CardOneUnActive;
