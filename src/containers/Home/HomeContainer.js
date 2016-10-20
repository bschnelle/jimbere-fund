import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeComp from '../../components/Home/Home';

export const HomeContainer = (props) => (
  <HomeComp isSmall={props.isSmall} />
);

HomeContainer.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(HomeContainer);
