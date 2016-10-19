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
  const scrollToFacts = (e) => {
    e.stopPropagation();
    animations.smoothScrollTo('facts');
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
