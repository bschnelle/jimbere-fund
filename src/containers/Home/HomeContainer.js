import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeComp from '../../components/Home/Home';

export const HomeContainer = ({ isLarge, isMedium, isSmall }) => (
  <HomeComp isLarge={isLarge} isMedium={isMedium} isSmall={isSmall} />
);

HomeContainer.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isMedium: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isLarge: state.browser.greaterThan.large,
  isMedium: state.browser.greaterThan.medium,
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(HomeContainer);
