import React, { PropTypes } from 'react';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomePurpose from '../HomePurpose/HomePurpose';
import HomeStory from '../HomeStory/HomeStory';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import * as animations from '../../utils/animations';
import classes from './Home.scss';

export const Home = (props) => {
  const scrollToFacts = () => {
    const duration = 750;
    const el = document.getElementById('facts');
    const navYOffset = document.getElementById('jf-nav').offsetHeight;
    const startingY = window.pageYOffset;
    const distance = el.offsetTop - startingY - navYOffset;

    animations.scroll(duration, startingY, distance);
  };

  const { isSmall } = props;
  return (
    <div className={classes.home}>
      <HomeLanding onScrollClick={scrollToFacts} />
      <HomeFacts id="facts" isSmall={isSmall} />
      <HomePurpose />
      <HomeStory />
      <HomeApproach isSmall={isSmall} />
      <HomeProcess isSmall={isSmall} />
    </div>
  );
};

Home.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default secondaryTheme(Home);
