import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WorkComp from '../../components/Work/Work';

export const WorkContainer = (props) => (
  <WorkComp isSmall={props.isSmall} />
);

WorkContainer.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isSmall: state.browser.lessThan.medium
});

export default connect(stateToProps)(WorkContainer);
