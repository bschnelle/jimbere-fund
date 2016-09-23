import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Button.scss';

const Button = (props) => {
  /* call props.onClick unless we're already fetching more posts */
  const onClick = () => { !props.loading && props.onClick(); };
  let className = classes.button;
  if (props.className) className += ` ${props.className}`;

  let loader;
  if (typeof props.loading !== 'undefined') {
    let loaderClassName = classes.loader;
    if (props.loading) {
      className += ` ${classes.busy}`;
      loaderClassName += ` ${classes.animate}`;
    }
    loader = <div className={loaderClassName} />;
  }

  return props.to
  ? <Link className={className} to={props.to}>{props.label}</Link>
  : (
    <div className={className} onClick={onClick}>
      {loader}
      <span className={classes.label}>{props.label}</span>
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
