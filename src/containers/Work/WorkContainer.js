import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import WorkComp from '../../components/Work/Work';

export const WorkContainer = (props) => (
  <WorkComp isMedium={props.isMedium} />
);

WorkContainer.propTypes = {
  isMedium: PropTypes.bool.isRequired
};

export const stateToProps = (state) => ({
  isMedium: state.browser.lessThan.large
});

export default connect(stateToProps)(WorkContainer);
