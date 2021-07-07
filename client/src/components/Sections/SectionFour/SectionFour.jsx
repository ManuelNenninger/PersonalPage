import "./SectionFour.css";
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  makeStyles
} from '@material-ui/core/styles';


const socialIconsStyle = makeStyles((theme) => ({
  root: {
    color: '#3D5559',
    fontSize: 35,
  },
}));

function SectionFour() {
  const classes = socialIconsStyle();


  return (
    <>
  <div className="SFour-FooterFitter">
    <hr className="HrSThree" />
    <div className="SFour-FooterTitel">
      <h3>Connect with me</h3>
    </div>
    <div className="SFour-FooterSocialContainer">
      <hr className="HrSTFour-icon" />

      <div className="SFour-FooterSocialIconsContainer">
        <div className="SFour-SocialIconContainer">
          <InstagramIcon className={classes.root} />
        </div>
        <div className="SFour-SocialIconContainer">
          <LinkedInIcon className={classes.root} />
        </div>
        <div className="SFour-SocialIconContainer">
          <a href="">
            <img src="/pictures/xing-soziales-logo.png" alt="XingIcon" className="SocialIcon" />
          </a>
        </div>
      </div>
      <hr className="HrSTFour-icon" />
      <div className="copyRight">
        <p>@{(new Date().getFullYear())}. Manuel Nenninger</p>
      </div>
    </div>
  </div>
</>
  );
}

export default SectionFour;
