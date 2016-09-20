import React, { PropTypes } from 'react';
import Nav from '../Nav/Nav';
import classes from './Layout.scss';

const Layout = (props) => (
  <div className={classes.layout}>
    <Nav />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
