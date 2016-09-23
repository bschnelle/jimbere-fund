import React from 'react';
import classes from './Loader.scss';

const Loader = () => (
  <div className={classes.chasingDots}>
    <div className={`${classes.child} ${classes.dot1}`} />
    <div className={`${classes.child} ${classes.dot2}`} />
  </div>
);

export default Loader;
