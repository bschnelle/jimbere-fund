import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './HomeWork.scss';

/**
 * process section of root route
 */
const HomeProcess = () => (
  <Container className={classes.work} container section title="Our Work">
    <p>
      Jimbere Fund is on a mission to mobilize, prepare, finance and launch women-led
      enterprises in rural communities of the Democratic Republic of Congo. Our goal
      is to revitalize communities and lift people out of poverty in a sustainable
      way by creating jobs and stimulating local economies.
    </p>
    <Button label="Learn More" to="/work" nowrap />
  </Container>
);

HomeProcess.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default HomeProcess;
