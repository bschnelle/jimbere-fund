import React from 'react';
import Logo from '../Logo/Logo';
import Social from '../Social/Social';
import classes from './Footer.scss';

/**
 * footer component used throughout site
 */
const Footer = () => (
  <footer className={classes.footer}>
    <div>
      <div>
        <Logo className={classes.logo} link secondary />
        <span>{`© ${new Date().getFullYear()} Jimbere Fund, Inc.`}</span>
        <span>A 501(c)(3) Nonprofit Organization</span>
      </div>
    </div>
    <Social secondary />
  </footer>
);

export default Footer;
