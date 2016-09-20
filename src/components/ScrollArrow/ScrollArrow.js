import React, { PropTypes } from 'react';
import classes from './ScrollArrow.scss';

const ScrollArrow = (props) => {
  let className = classes.scrollArrow;
  if (props.className) className += ` ${props.className}`;

  return (
    <div className={className} onClick={props.onClick}>
      <span>{props.label}</span>
      <span />
      <span />
    </div>
  );
};

ScrollArrow.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ScrollArrow;
