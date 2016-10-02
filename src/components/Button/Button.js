import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Button.scss';

const Button = (props) => {
  let className = classes.button;
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
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string
};

export default Button;
