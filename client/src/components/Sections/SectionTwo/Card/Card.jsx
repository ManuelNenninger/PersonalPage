import React, {
  useState
} from 'react';
import CardOneUnActive from "./CardOneUnActive";
import CardOneActive from "./CardOneActive";



function Card(props) {

  const [isMouseOver, setIsMouseOver] = useState(false);


  function handleMouseOver(value){
    setIsMouseOver(function(prefValue){
      return true;
    });
  }

  function handleMouseOut(value){
    setIsMouseOver(function(prefValue){
      return false;
    });
  }


  return (
    <div className="cardsection" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
      {isMouseOver ?
      (<CardOneActive
        CardOneActiveTitel={props.CardOneActiveTitel}
        CardOneActiveContent={props.CardOneActiveContent}
      />)
      :
      (<CardOneUnActive
        CardOneUnActiveTitel={props.CardOneUnActiveTitel}
        CardOneUnActiveImage={props.CardOneUnActiveImage}
      />)
      }
    </div>
  );
}

export default Card;
