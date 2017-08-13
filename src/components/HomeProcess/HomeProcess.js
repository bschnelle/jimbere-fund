import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import classes from './HomeProcess.scss';

/**
 * process section of root route
 */
const HomeProcess = (props) => (
  <Container className={classes.section} container section title="Our Process">
    <div className={classes.process}>
      <img
        alt="Process infographic"
        src={`/images/process${props.isSmall ? '-compact' : ''}.svg`}
      />
    </div>
  </Container>
);

HomeProcess.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default HomeProcess;
