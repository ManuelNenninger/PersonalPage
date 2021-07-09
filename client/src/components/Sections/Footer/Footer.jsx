import "./Footer.css";
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

function Footer() {
  const classNamees = socialIconsStyle();


  return (
    <>
    <footer className="fdb-block footer-large">
    <div>

    </div>
  </footer>
</>
  );
}

export default Footer;
