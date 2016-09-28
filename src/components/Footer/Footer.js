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
        <span>{`© Jimbere Fund ${new Date().getFullYear()}`}</span>
      </div>
    </div>
    <Social secondary />
  </div>
);

export default Footer;
