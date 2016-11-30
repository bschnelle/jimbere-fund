import React, { PropTypes } from 'react';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeGetInvolved from '../HomeGetInvolved/HomeGetInvolved';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomePurpose from '../HomePurpose/HomePurpose';
import HomeStory from '../HomeStory/HomeStory';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import * as animations from '../../utils/animations';
import classes from './Home.scss';

/**
 * root route component
 */
export const Home = (props) => {
  const { isMedium, isSmall } = props;
  const scrollToFacts = (e) => {
    e.stopPropagation();
    animations.smoothScrollTo('facts');
  };

  return (
    <div className={classes.home}>
      <HomeLanding onScrollClick={scrollToFacts} isMedium={isMedium} />
      <HomeFacts id="facts" isSmall={isSmall} />
      <HomePurpose />
      <HomeStory />
      <HomeApproach isSmall={isSmall} />
      <HomeProcess isSmall={isSmall} />
      <HomeGetInvolved />
    </div>
  );
};

Home.propTypes = {
  isMedium: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export default secondaryTheme(Home);
