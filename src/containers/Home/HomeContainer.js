import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeComp from '../../components/Home/Home';

export const HomeContainer = (props) => (
  <HomeComp isMedium={props.isMedium} isSmall={props.isSmall} />
);

HomeContainer.propTypes = {
  isMedium: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isMedium: state.browser.lessThan.large,
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(HomeContainer);
