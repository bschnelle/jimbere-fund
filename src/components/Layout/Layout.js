import React, { PropTypes } from 'react';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import classes from './Layout.scss';

const Layout = (props) => (
  <div className={classes.layout}>
    <Logo className={classes.logo} link secondary={props.theme === 'secondary'} />
    <Nav />
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string.isRequired
};

export default Layout;
