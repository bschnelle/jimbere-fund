import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Button.scss';

const Button = (props) => {
  let className = classes.button;
  if (props.accent) className += ` ${classes.accent}`;
  if (props.flat) className += ` ${classes.flat}`;
  if (props.secondary) className += ` ${classes.secondary}`;
  if (props.small) className += ` ${classes.small}`;
  if (props.className) className += ` ${props.className}`;

  if (props.to) {
    return <Link className={className} to={props.to}>{props.label}</Link>;
  } else if (props.href) {
    return <a className={className} href={props.href}>{props.label}</a>;
  }

  return (
    <div className={className} onClick={props.onClick}>
      {props.label}
    </div>
  );
};

Button.propTypes = {
  accent: PropTypes.bool,
  className: PropTypes.string,
  flat: PropTypes.bool,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  to: PropTypes.string
};

export default Button;
