/* eslint-disable max-len */
import React from 'react';
import Logo from '../Logo/Logo';
import Social from '../Social/Social';
import classes from './Footer.scss';

const Footer = () => (
  <div className={classes.footer}>
    <div>
      <div>
        <Logo className={classes.logo} link secondary />
        <span>{`© ${new Date().getFullYear()} Jimbere Fund, Inc.`}</span>
        <span>A 501(c)(3) Nonprofit Organization</span>
      </div>
    </div>
    <Social secondary />
  </div>
);

export default Footer;
