import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './GetInvolvedWorkWithUs.scss';

export const GetInvolvedWorkWithUs = () => (
  <Container id="gi-work-with-us" section title="Work With Us">
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
        <h4>Volunteers</h4>
        <span />
        <p>
          We're currently looking for volunteers with
          skills and expertise in the following fields:
        </p>
        <ul>
          <li>Graphic Design</li>
          <li>Nonprofit Strategy & Planning</li>
          <li>Blogging/Storytelling</li>
          <li>Social Media Strategy</li>
          <li>Brand Positioning & Messaging</li>
          <li>Financial Planning & Fundraising</li>
        </ul>
      </div>
      <div>
        <Button label="Contact" to="/contact" />
      </div>
    </div>
  </Container>
);

export default GetInvolvedWorkWithUs;
