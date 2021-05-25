import "./SectionTwo.css";
import React from 'react';
import Card from "./Card/Card";

function SectionTwo() {


  return (
    <div>
  <div className="container-fluid">
    <div className="row ">
      <div className="col-md-6 col-12">
        <Card
          CardOneActiveTitel="Business Websites"
          CardOneActiveContent="Show the world what you have to offer and win more clients through the internet."
          CardOneUnActiveTitel="Business Websites"
          CardOneUnActiveImage="/pictures/Add to Cart-cuate.svg"
        />
      </div>
      <div className="col-md-6 col-12">
        <Card
          CardOneActiveTitel="Landing Page"
          CardOneActiveContent="Get early feedback for your MVP or create an email subscription for a soon released product."
          CardOneUnActiveTitel="Landing Pages"
          CardOneUnActiveImage="/pictures/Market launch-rafiki-3.svg"
        />
      </div>
    </div>
    <div className="row ">
      <div className="col-md-6 col-12">
        <Card
          CardOneActiveTitel="Personal Website"
          CardOneActiveContent="Show the world and interested recruiters who you are and what you can do. So the requests come to you - and you can focus on more important things."
          CardOneUnActiveTitel="Personal Website"
          CardOneUnActiveImage="/pictures/Buffer-pana.svg"
        />
      </div>
      <div className="col-md-6 col-12">
        <Card
          CardOneActiveTitel="Need support in big Projekts?"
          CardOneActiveContent="Support your projects in the Back-End via Node.js & Express or Front-End via React.js."
          CardOneUnActiveTitel="Support in big Projects"
          CardOneUnActiveImage="/pictures/Data extraction-pana.svg"
        />
      </div>
    </div>
  </div>
</div>
  );
}

export default SectionTwo;
