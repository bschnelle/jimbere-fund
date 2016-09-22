import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Button.scss';

const Button = (props) => {
  let className = classes.button;
  if (props.className) className += ` ${props.className}`;

  return props.to
  ? <Link className={className} to={props.to}>{props.label}</Link>
  : (
    <div className={className} onClick={props.onClick}>
      {typeof props.loading !== 'undefined' && <div className={classes.loader} />}
      {props.label}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string
};

export default Button;
