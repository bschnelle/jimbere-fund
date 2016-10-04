import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/modules/ui/uiModule';
import Team from '../../components/Team/Team';

export const TeamContainer = (props) => (
  <Team setTheme={props.setTheme} />
);

TeamContainer.propTypes = {
  setTheme: PropTypes.func.isRequired
};

export default connect(null, { setTheme })(TeamContainer);
