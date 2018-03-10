import React, { PropTypes } from 'react';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeGetInvolved from '../HomeGetInvolved/HomeGetInvolved';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomeWork from '../HomeWork/HomeWork';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Home.scss';

/**
 * root route component
 */
export const Home = (props) => {
  const { isMedium, isSmall } = props;

  return (
    <div className={classes.home}>
      <HomeLanding isMedium={isMedium} />
      <HomeWork />
      <HomeApproach isSmall={isSmall} />
      <HomeProcess isSmall={isSmall} />
      <HomeGetInvolved />
    </div>
  );
};

Home.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isMedium: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired,
};

export default secondaryTheme(Home);
