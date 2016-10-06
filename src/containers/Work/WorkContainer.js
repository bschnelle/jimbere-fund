import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/modules/ui/uiModule';
import Work from '../../components/Work/Work';

export const WorkContainer = (props) => (
  <Work setTheme={props.setTheme} />
);

WorkContainer.propTypes = {
  setTheme: PropTypes.func.isRequired
};

export default connect(null, { setTheme })(WorkContainer);
