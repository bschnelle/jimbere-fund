import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeComp from '../../components/Home/Home';

export const HomeContainer = (props) => (
  <HomeComp isLarge={props.isLarge} isSmall={props.isSmall} />
);

HomeContainer.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isLarge: state.browser.greaterThan.large,
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(HomeContainer);
