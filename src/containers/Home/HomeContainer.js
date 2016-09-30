import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';

const HomeContainer = (props) => (
  <Home isSmall={props.isSmall} />
);

HomeContainer.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(HomeContainer);
