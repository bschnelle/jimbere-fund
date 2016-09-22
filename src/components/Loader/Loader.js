import React from 'react';
import classes from './Loader.scss';

const Loader = () => (
  <span className={classes.loader}>
    <span className={classes.inner} />
  </span>
);

export default Loader;
