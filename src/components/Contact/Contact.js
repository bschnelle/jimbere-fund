import React from 'react';
import classes from './Contact.scss';

const Contact = () => (
  <div className={classes.contact}>
    <div className={classes.overlay} />
    <div className={classes.greeting}>
      <h1>Contact Us</h1>
    </div>
    <div className={classes.info}>
      <h3>917.224.2095 | obadiasndaba@gmail.com</h3>
    </div>
  </div>
);

export default Contact;
