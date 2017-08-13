import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './HomeWork.scss';

/**
 * process section of root route
 */
const HomeProcess = (props) => (
  <Container className={classes.work} container section title="Our Work">
    <h6>Together, we can build the road to opportunity.</h6>
    <p>
      In Congo’s most remote areas, communities are isolated over large swathes of
      land. It takes people days of walking on foot to get to the nearest dirt road.
      We work with rural communities to identify their most pressing needs in education,
      health, women’s empowerment and food security. Together, we design, implement
      and manage high-impact social interventions that expand opportunities.
    </p>
    <Button label="Learn More" to="/work" nowrap />
  </Container>
);

HomeProcess.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default HomeProcess;
