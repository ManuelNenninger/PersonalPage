import React from 'react';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import PersonPinCircleRoundedIcon from '@material-ui/icons/PersonPinCircleRounded';
import {
  makeStyles
} from '@material-ui/core/styles';

const iconStyles = makeStyles((theme) => ({
  root: {
    color: '#3D5559',
    fontSize: 50,
    margin: theme.spacing(1),
  },
}));

function SectionThreeAgreementPlan() {
  const classes = iconStyles();

  return (
    <div className="SThree-AgreePlan-Container">
      <div className="row rowSThree">
        <div className="col-md-4 col-12">
          <div className="SThree-AgreePlan-ContentCard">
            <div className="SThree-AgreePlan-ContentCard-MiddleContainer">
              <div>
                <QuestionAnswerRoundedIcon className={classes.root}/>
              </div>
              <div className="SThree-AgreePlan-CardTitle">
                <h4>I Don´t bite</h4>
              </div>
              <div className="SThree-AgreePlan-CardContent">
                <h3>Just send me a quick message, so we can talk about you and your business. Let us find out what fits perfect for you.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="SThree-AgreePlan-ContentCard">
            <div className="SThree-AgreePlan-ContentCard-MiddleContainer">
              <div>
                <MoneyOffIcon className={classes.root} />
              </div>
              <div className="SThree-AgreePlan-CardTitle">
                <h4>Full reversion</h4>
              </div>
              <div className="SThree-AgreePlan-CardContent">
                <h3>If you are not completely satisfied with the final product, you don't have to pay me anything. </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="SThree-AgreePlan-ContentCard">
            <div className="SThree-AgreePlan-ContentCard-MiddleContainer">
              <div>
                <PersonPinCircleRoundedIcon className={classes.root} />
              </div>
              <div className="SThree-AgreePlan-CardTitle">
                <h4>Completely to your needs</h4>
              </div>
              <div className="SThree-AgreePlan-CardContent">
                <h3>You need fast loading and mobile responsive website? SEO optimization to increase your visibility? We help you to realize your needs.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThreeAgreementPlan;
