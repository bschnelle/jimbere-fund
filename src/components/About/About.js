import React, { PropTypes } from 'react';
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
  const { isSmall } = props;
  return (
    <div className={classes.about}>
      <ImageContainer src="/images/about-o.jpg">
        <Container className={classes.landing} title="About Us">
          <h6>
            Jimbere Fund provides women from some of the poorest households in Congo’s
            rural communities with training and grants to launch businesses. We seek long
            term solutions, working with women to ensure they have every opportunity
            to succeed and transform their communities for good
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
