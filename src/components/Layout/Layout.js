import React, { PropTypes } from 'react';
import classes from './Layout.scss';

const Layout = (props) => (
  <div className={classes.layout}>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
