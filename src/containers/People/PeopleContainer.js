import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import People from '../../components/People/People';

export const PeopleContainer = (props) => (
  <People isExtraSmall={props.isExtraSmall} isLarge={props.isLarge} />
);

PeopleContainer.propTypes = {
  isExtraSmall: PropTypes.bool.isRequired,
  isLarge: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isExtraSmall: state.browser.lessThan.small,
  isLarge: state.browser.lessThan.extraLarge,
});

export default connect(stateToProps)(PeopleContainer);
