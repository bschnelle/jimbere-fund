import React, { PropTypes } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import classes from './Layout.scss';

/**
 * layout component used for entire site
 */
const Layout = (props) => (
  <div className={classes.layout}>
    <Nav isSmall={props.isSmall} secondary={props.theme === 'secondary'} />
    {props.children}
    {!props.simple && <Footer />}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isSmall: PropTypes.bool.isRequired,
  simple: PropTypes.bool,
  theme: PropTypes.string.isRequired
};

export default Layout;
