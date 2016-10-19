import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import GetInvolved from '../../components/GetInvolved/GetInvolved';

const GetInvolvedContainer = (props) => (
  <GetInvolved isSmall={props.isSmall} />
);

GetInvolvedContainer.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(GetInvolvedContainer);
