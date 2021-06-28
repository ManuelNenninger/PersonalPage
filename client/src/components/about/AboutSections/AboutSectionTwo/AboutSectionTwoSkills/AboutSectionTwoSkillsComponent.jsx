import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: "rgba(62,86,89, 0.2)",
  },
  barColorPrimary: {
    backgroundColor: "rgba(62,86,89, 1)",
  },
});




function AboutSectionTwoSkillsComponent(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (props.firstTimeVisible === true) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === props.skillValue) {
            clearInterval(timer);
            return props.skillValue;
          } else {
            return (oldProgress + 1);
          }
        });
      }, 20);
    }
  }, [props.firstTimeVisible]);

  return (
    <>
    <div className="About-SectionTwo-content-wrapper-Skills">
      <div className="About-SectionTwo-content-wrapper-SkillsName">
        <h3>{props.skillName}</h3>
      </div>
      <div className="About-SectionTwo-content-wrapper-SkillsBar">
        <Box display="flex" alignItems="center">
          <Box width="60%" mr={1}>
            <LinearProgress classes={{root: classes.root, barColorPrimary: classes.barColorPrimary}} variant="determinate" value={progress} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{props.skillValue}%</Typography>
          </Box>
        </Box>
      </div>
    </div>
    </>
  );
}

export default AboutSectionTwoSkillsComponent;
