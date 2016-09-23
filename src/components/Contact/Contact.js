import React from 'react';
import classes from './Contact.scss';

const Contact = () => (
  <div className={classes.contact}>
    <div className={classes.image} />
    <div className={classes.greeting}>
      <h1>Contact Us</h1>
    </div>
    <div className={classes.info}>
      <div>
        <h2>Email</h2>
        <span>obadiasndaba@gmail.com</span>
        <h2>Phone</h2>
        <span>917.224.2095</span>
      </div>
      <div>
        MAP
      </div>
    </div>
  </div>
);

export default Contact;
