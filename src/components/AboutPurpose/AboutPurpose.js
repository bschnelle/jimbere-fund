import React from 'react';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './AboutPurpose.scss';

/**
 * purpose section of root route
 */
const AboutPurpose = () => (
  <ImageContainer src="/images/street.jpg" className={classes.imageContainer}>
    <Container className={classes.section} container section title="Purpose">
      <div className={classes.content}>
        <p>
          Jimbere Fund is on a mission to revitalize distressed communities in Congo.
          We support rural communities to design, implement and manage individualized
          high-impact social interventions that expand opportunities and access to
          critical services, create jobs and lift people out of poverty in a
          sustainable way.
        </p>
        <div>
          <h4>Vision</h4>
          <p>
            To create a Democratic Republic of Congo where everyone can live with
            dignity and realize his or her full potential.
          </p>
        </div>
        <div>
          <h4>Mission</h4>
          <p>
            We strive to make vulnerable communities stronger and more resilient
            through interventions that empower them to create economic opportunities.
          </p>
        </div>
      </div>
    </Container>
  </ImageContainer>
);

export default AboutPurpose;
