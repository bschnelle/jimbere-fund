import React from 'react';
import Container from '../Container/Container';
import GetInvolvedTiles from '../GetInvolvedTiles/GetInvolvedTiles';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeGetInvolved.scss';

const HomeGetInvolved = () => (
  <ImageContainer className={classes.imageContainer} src="/images/hands-o.jpg">
    <Container className={classes.section} container fluid section title="Get Involved">
      <p>We need your time and talents.</p>
      <GetInvolvedTiles />
    </Container>
  </ImageContainer>
);

export default HomeGetInvolved;
