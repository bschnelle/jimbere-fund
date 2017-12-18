import React from 'react';
import PropTypes from 'prop-types';
import classes from './Loader.scss';

/**
 * progress spinner/loader
 */
const Loader = ({ alt }) => {
  let className = classes.chasingDots;
  if (alt) className += ` ${classes.alt}`;
  return (
    <div className={className}>
      <div className={`${classes.child} ${classes.dot1}`} />
      <div className={`${classes.child} ${classes.dot2}`} />
    </div>
  );
};

Loader.propTypes = {
  alt: PropTypes.bool,
};

export default Loader;
