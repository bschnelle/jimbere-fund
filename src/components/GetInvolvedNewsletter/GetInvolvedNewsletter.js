import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './GetInvolvedNewsletter.scss';

/**
 * newsletter section of /get-involved route
 */
export const GetInvolvedNewsletter = () => (
  <ImageContainer src="/images/news-o.jpg">
    <Container id="gi-newsletter" className={classes.newsletter} section title="Newsletter">
      <p>Join our weekly mailing list to stay up to date with our progress.</p>
      <Button label="Sign Up" to="/sign-up" />
    </Container>
  </ImageContainer>
);

export default GetInvolvedNewsletter;
