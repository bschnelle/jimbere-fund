import React, { PropTypes } from 'react';
import Section from '../Section/Section';
import classes from './HomeProcess.scss';

const HomeProcess = (props) => (
  <Section className={classes.section} container title="Process">
    <div className={classes.process}>
      <img
        alt="Process infographic"
        src={`/images/process${props.isSmall ? '-compact' : ''}.svg`}
      />
    </div>
  </Section>
);

HomeProcess.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default HomeProcess;
