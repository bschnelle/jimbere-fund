import React from 'react';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './AboutPurpose.scss';

/**
 * purpose section of root route
 */
const AboutPurpose = () => (
  <ImageContainer src="/images/vision-o.jpg" className={classes.imageContainer}>
    <div className={classes.transparentBackground} />
    <Container className={classes.section} container section>
      <div className={classes.content}>
        <div>
          <h4>Vision</h4>
          <p>
            To foster a Democratic Republic of Congo where women have economic
            opportunities to thrive and become driving forces for family,
            community, and national change.
          </p>
        </div>
        <div>
          <h4>Mission</h4>
          <p>
            Jimbere Fund seeks to fight poverty in rural Congo by mobilizing,
            preparing, and positioning women to be catalysts for long-term change.
          </p>
        </div>
      </div>
    </Container>
  </ImageContainer>
);

export default AboutPurpose;
