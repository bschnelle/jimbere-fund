import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AboutComp from '../../components/About/About';

export const AboutContainer = (props) => (
  <AboutComp isLarge={props.isLarge} isSmall={props.isSmall} />
);

AboutContainer.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isLarge: state.browser.greaterThan.large,
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(AboutContainer);
