import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/modules/ui/uiModule';
import Blog from '../../components/Blog/Blog';

const BlogContainer = (props) => (
  <Blog setTheme={props.setTheme}>{props.children}</Blog>
);

BlogContainer.propTypes = {
  children: PropTypes.node,
  setTheme: PropTypes.func.isRequired
};

export default connect(null, { setTheme })(BlogContainer);
