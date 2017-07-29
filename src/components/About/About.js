import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import AboutFacts from '../AboutFacts/AboutFacts';
import AboutPurpose from '../AboutPurpose/AboutPurpose';
import AboutStory from '../AboutStory/AboutStory';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './About.scss';

/**
 * root route component
 */
export const About = (props) => {
  const { isLarge, isSmall } = props;
  return (
    <div className={classes.about}>
      <ImageContainer src="/images/people-o.jpg">
        <Container className={classes.landing} title="About Us">
          <h6>
            At Jimbere Fund, we are on a mission to reach and revitalize the most
            remote areas of Democratic Republic of Congo. Our goal is to provide
            access to critical services, create jobs and lift people out of poverty
            in a sustainable way.
          </h6>
        </Container>
      </ImageContainer>
      <AboutFacts id="facts" isSmall={isSmall} />
      <AboutPurpose />
      <AboutStory />
    </div>
  );
};

About.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export default secondaryTheme(About);
