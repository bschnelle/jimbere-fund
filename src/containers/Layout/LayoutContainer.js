import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';

const LayoutContainer = (props) => <Layout theme={props.theme}>{props.children}</Layout>;

LayoutContainer.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired
};

const stateToProps = (state) => ({
  theme: state.ui.get('theme')
});

export default connect(stateToProps)(LayoutContainer);
