import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GetInvolvedComp from '../../components/GetInvolved/GetInvolved';

export const GetInvolvedContainer = (props) => (
  <GetInvolvedComp isSmall={props.isSmall} />
);

GetInvolvedContainer.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(GetInvolvedContainer);
