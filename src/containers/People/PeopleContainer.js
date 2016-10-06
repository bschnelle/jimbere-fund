import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/modules/ui/uiModule';
import People from '../../components/People/People';

export const PeopleContainer = (props) => (
  <People setTheme={props.setTheme} />
);

PeopleContainer.propTypes = {
  setTheme: PropTypes.func.isRequired
};

export default connect(null, { setTheme })(PeopleContainer);
