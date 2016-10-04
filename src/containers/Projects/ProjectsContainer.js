import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/modules/ui/uiModule';
import Projects from '../../components/Projects/Projects';

export const ProjectsContainer = (props) => (
  <Projects setTheme={props.setTheme} />
);

ProjectsContainer.propTypes = {
  setTheme: PropTypes.func.isRequired
};

export default connect(null, { setTheme })(ProjectsContainer);
