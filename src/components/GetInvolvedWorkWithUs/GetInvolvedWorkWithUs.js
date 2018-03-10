import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './GetInvolvedWorkWithUs.scss';

/**
 * work with us section of /get-involved route
 */
export const GetInvolvedWorkWithUs = () => (
  <Container id="work-with-us" section title="Work With Us">
    <div className={classes.workWithUs}>
      <p>We're always looking for great people to join our cause.</p>
      <div>
        <h4>Jobs</h4>
        <span />
        <p>
          There are currently no job openings.
          <br />
          Please check back soon.
        </p>
      </div>
      <div>
        <Button label="Contact" to="/contact" />
      </div>
    </div>
  </Container>
);

export default GetInvolvedWorkWithUs;
