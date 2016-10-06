import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout/Layout';

export const LayoutContainer = (props) => (
  <Layout isSmall={props.isSmall} simple={!!props.simple} theme={props.theme}>
    {props.simple || props.children}
  </Layout>
);

LayoutContainer.propTypes = {
  children: PropTypes.node,
  isSmall: PropTypes.bool.isRequired,
  simple: PropTypes.node,
  theme: PropTypes.string.isRequired
};

export const stateToProps = (state) => ({
  isSmall: state.browser.lessThan.medium,
  theme: state.ui.get('theme')
});

export default connect(stateToProps)(LayoutContainer);
