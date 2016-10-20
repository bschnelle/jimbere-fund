import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './NavItem.scss';

/**
 * nav link
 */
const NavItem = (props) => {
  const { label, onClick, to } = props;
  let className = classes.navItem;
  if (props.className) className += ` ${props.className}`;

  return (
    <li className={className}>
      <Link
        activeClassName={classes.active}
        key={to}
        onClick={onClick}
        onlyActiveOnIndex={to === '/'}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired
};

export default NavItem;
