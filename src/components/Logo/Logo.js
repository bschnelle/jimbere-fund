/* eslint-disable max-len */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classes from './Logo.scss';

/**
 * logo icon
 */
const Logo = (props) => {
  const { green, white } = classes;
  const primaryClassName = props.secondary ? white : green;
  const secondaryClassName = props.secondary ? green : white;
  let className = classes.logo;
  if (props.className) className += ` ${props.className}`;

  const logo = (
    <svg viewBox="0 0 884 252">
      <path d="M7.8 177.4c-0.9 0-2-0.1-3.4-0.3 -1.4-0.2-2.5-0.5-3.5-0.9l1.3-8.2c0.7 0.2 1.6 0.4 2.5 0.5 0.9 0.1 1.8 0.2 2.6 0.2 3.5 0 5.9-1.1 7.4-3.2 1.5-2.1 2.2-5.3 2.2-9.4l0-55.4 10.1 0 0 55.3c0 7.2-1.6 12.6-4.9 16.1 -3.3 3.5-8.1 5.3-14.4 5.3Zm14.2-86.9c-1.8 0-3.3-0.6-4.6-1.8 -1.3-1.2-1.9-2.8-1.9-4.8 0-2 0.6-3.6 1.9-4.8 1.3-1.2 2.8-1.8 4.6-1.8 1.8 0 3.3 0.6 4.6 1.8 1.3 1.2 1.9 2.8 1.9 4.8 0 2-0.6 3.6-1.9 4.8 -1.3 1.2-2.8 1.8-4.6 1.8Z" className={primaryClassName} />
      <path d="M54.5 157.1l-10.1 0 0-56.4 10.1 0 0 56.4Zm-5.1-66.6c-1.8 0-3.3-0.6-4.6-1.8 -1.3-1.2-1.9-2.8-1.9-4.8 0-2 0.6-3.6 1.9-4.8 1.3-1.2 2.8-1.8 4.6-1.8 1.8 0 3.3 0.6 4.6 1.8 1.3 1.2 1.9 2.8 1.9 4.8 0 2-0.6 3.6-1.9 4.8 -1.3 1.2-2.8 1.8-4.6 1.8Z" className={primaryClassName} />
      <path d="M71.9 102.4c2.3-0.6 5.4-1.2 9.2-1.8 3.8-0.7 8.2-1 13.2-1 3.6 0 6.7 0.5 9.1 1.5 2.5 1 4.5 2.4 6.2 4.3 0.5-0.4 1.3-0.9 2.4-1.5 1.1-0.7 2.4-1.3 4-1.9 1.6-0.6 3.4-1.2 5.3-1.6 2-0.5 4.1-0.7 6.3-0.7 4.3 0 7.9 0.6 10.6 1.9 2.7 1.3 4.9 3.1 6.5 5.4 1.6 2.3 2.6 5.1 3.1 8.2 0.5 3.2 0.8 6.7 0.8 10.4l0 31.7 -10.1 0 0-29.5c0-3.3-0.2-6.2-0.5-8.6 -0.3-2.4-0.9-4.4-1.8-6 -0.9-1.6-2.1-2.8-3.7-3.5 -1.6-0.8-3.6-1.1-6-1.1 -3.4 0-6.2 0.5-8.4 1.4 -2.2 0.9-3.7 1.7-4.5 2.4 0.6 1.9 1 3.9 1.3 6.2 0.3 2.2 0.4 4.6 0.4 7.1l0 31.7 -10.1 0 0-29.5c0-3.3-0.2-6.2-0.5-8.6 -0.4-2.4-1-4.4-1.9-6 -0.9-1.6-2.1-2.8-3.7-3.5 -1.6-0.8-3.5-1.1-5.9-1.1 -1 0-2.1 0-3.3 0.1 -1.2 0.1-2.3 0.2-3.3 0.3 -1 0.1-2 0.2-2.9 0.4 -0.9 0.1-1.4 0.3-1.7 0.3l0 47.6 -10.1 0 0-54.8Z" className={primaryClassName} />
      <path d="M175.4 103.2c1.2-0.8 3.1-1.6 5.6-2.5 2.5-0.9 5.4-1.3 8.6-1.3 4.1 0 7.6 0.7 10.8 2.2 3.1 1.4 5.8 3.5 8 6.1 2.2 2.6 3.8 5.7 4.9 9.3 1.1 3.6 1.7 7.6 1.7 11.9 0 4.6-0.7 8.7-2 12.3 -1.3 3.7-3.2 6.7-5.7 9.3 -2.5 2.5-5.4 4.5-8.9 5.9 -3.5 1.4-7.4 2.1-11.7 2.1 -4.7 0-8.9-0.3-12.5-1 -3.6-0.7-6.6-1.3-8.9-2l0-80.8 10.1-1.7 0 30.3Zm0 45.1c1 0.3 2.4 0.6 4.3 0.8 1.8 0.3 4.1 0.4 6.9 0.4 5.4 0 9.8-1.8 13-5.4 3.3-3.6 4.9-8.7 4.9-15.2 0-2.9-0.3-5.6-0.9-8.1 -0.6-2.5-1.5-4.7-2.8-6.6 -1.3-1.8-3-3.3-5-4.3 -2.1-1-4.5-1.6-7.4-1.6 -2.7 0-5.3 0.5-7.6 1.4 -2.3 0.9-4.1 1.9-5.3 2.9l0 35.7Z" className={primaryClassName} />
      <path d="M226.1 129c0-5 0.7-9.3 2.2-13.1 1.4-3.7 3.4-6.8 5.8-9.3 2.4-2.5 5.1-4.3 8.2-5.5 3.1-1.2 6.3-1.8 9.5-1.8 7.6 0 13.4 2.4 17.5 7.1 4.1 4.7 6.1 12 6.1 21.6 0 0.4 0 1 0 1.7 0 0.7 0 1.3-0.1 1.9l-38.6 0c0.4 5.9 2.1 10.3 5.1 13.3 3 3 7.6 4.6 13.9 4.6 3.5 0 6.5-0.3 9-0.9 2.4-0.6 4.2-1.2 5.5-1.8l1.4 8.5c-1.2 0.7-3.4 1.3-6.5 2.1 -3.1 0.7-6.6 1.1-10.5 1.1 -4.9 0-9.2-0.7-12.7-2.2 -3.6-1.5-6.5-3.5-8.8-6.1 -2.3-2.6-4-5.7-5.2-9.3 -1.1-3.6-1.7-7.5-1.7-11.8Zm38.7-5.5c0.1-4.6-1.1-8.3-3.4-11.2 -2.3-2.9-5.6-4.4-9.7-4.4 -2.3 0-4.4 0.5-6.1 1.4 -1.8 0.9-3.3 2.1-4.5 3.5 -1.2 1.4-2.2 3.1-2.9 5 -0.7 1.9-1.1 3.8-1.4 5.8l28 0Z" className={primaryClassName} />
      <path d="M310.7 99.5c0.9 0 1.9 0.1 3 0.2 1.1 0.1 2.2 0.3 3.3 0.4 1.1 0.2 2.1 0.4 3 0.5 0.9 0.2 1.6 0.3 2 0.5l-1.7 8.8c-0.8-0.3-2.1-0.6-4-1 -1.8-0.4-4.2-0.6-7.1-0.6 -1.9 0-3.7 0.2-5.6 0.6 -1.8 0.4-3.1 0.7-3.6 0.8l0 47.4 -10.1 0 0-54c2.4-0.9 5.4-1.7 8.9-2.4 3.5-0.8 7.5-1.1 11.9-1.1Z" className={primaryClassName} />
      <path d="M328.6 129c0-5 0.7-9.3 2.2-13.1 1.4-3.7 3.4-6.8 5.8-9.3 2.4-2.5 5.1-4.3 8.2-5.5 3.1-1.2 6.3-1.8 9.5-1.8 7.6 0 13.4 2.4 17.5 7.1 4.1 4.7 6.1 12 6.1 21.6 0 0.4 0 1 0 1.7 0 0.7 0 1.3-0.1 1.9l-38.6 0c0.4 5.9 2.1 10.3 5.1 13.3 3 3 7.6 4.6 13.9 4.6 3.5 0 6.5-0.3 9-0.9 2.4-0.6 4.2-1.2 5.5-1.8l1.4 8.5c-1.2 0.7-3.4 1.3-6.5 2.1 -3.1 0.7-6.6 1.1-10.5 1.1 -4.9 0-9.2-0.7-12.7-2.2 -3.6-1.5-6.5-3.5-8.8-6.1 -2.3-2.6-4-5.7-5.2-9.3 -1.1-3.6-1.7-7.5-1.7-11.8Zm38.7-5.5c0.1-4.6-1.1-8.3-3.4-11.2 -2.4-2.9-5.6-4.4-9.7-4.4 -2.3 0-4.4 0.5-6.1 1.4 -1.8 0.9-3.3 2.1-4.5 3.5 -1.2 1.4-2.2 3.1-2.9 5 -0.7 1.9-1.1 3.8-1.4 5.8l28 0Z" className={primaryClassName} />
      <path d="M693 73c3 0 5.5 0.2 7.6 0.7 2.1 0.4 3.6 0.8 4.5 1.2l-1.8 8.7c-0.9-0.4-2.1-0.8-3.7-1.2 -1.6-0.4-3.5-0.6-5.9-0.6 -4.7 0-8 1.3-9.9 3.9 -1.9 2.6-2.8 6-2.8 10.4l0 4.9 21.7 0 0 8.5 -21.7 0 0 48 -10.1 0 0-61.5c0-7.2 1.8-12.8 5.3-16.8 3.5-3.9 9.1-5.9 16.7-5.9Z" className={primaryClassName} />
      <path d="M757.8 155.5c-2.3 0.6-5.4 1.2-9.2 1.8 -3.8 0.7-8.2 1-13.2 1 -4.3 0-8-0.6-11-1.9 -3-1.3-5.4-3.1-7.2-5.4 -1.8-2.3-3.1-5-3.9-8.2 -0.8-3.1-1.2-6.6-1.2-10.5l0-31.7 10.1 0 0 29.5c0 6.9 1.1 11.8 3.3 14.8 2.2 3 5.8 4.4 11 4.4 1.1 0 2.2 0 3.4-0.1 1.2-0.1 2.2-0.2 3.3-0.3 1-0.1 1.9-0.2 2.8-0.3 0.8-0.1 1.4-0.2 1.8-0.4l0-47.6 10.1 0 0 54.8Z" className={primaryClassName} />
      <path d="M775.2 102.4c2.3-0.6 5.4-1.2 9.2-1.8 3.8-0.7 8.2-1 13.2-1 4.5 0 8.2 0.6 11.2 1.9 3 1.3 5.3 3 7.1 5.3 1.8 2.3 3 5 3.7 8.2 0.7 3.2 1.1 6.7 1.1 10.5l0 31.7 -10.1 0 0-29.5c0-3.5-0.2-6.4-0.7-8.9 -0.5-2.5-1.2-4.4-2.3-6 -1.1-1.5-2.5-2.6-4.3-3.3 -1.8-0.7-4-1-6.7-1 -1.1 0-2.2 0-3.4 0.1 -1.2 0.1-2.3 0.2-3.3 0.3 -1 0.1-2 0.2-2.8 0.4 -0.8 0.1-1.4 0.3-1.8 0.3l0 47.6 -10.1 0 0-54.8Z" className={primaryClassName} />
      <path d="M873.9 112.7c-1.2-1-3-2-5.3-2.9 -2.3-0.9-4.8-1.4-7.6-1.4 -2.9 0-5.4 0.5-7.4 1.6 -2.1 1-3.7 2.5-5 4.3 -1.3 1.8-2.2 4-2.8 6.6 -0.6 2.5-0.9 5.2-0.9 8.1 0 6.6 1.6 11.7 4.9 15.2 3.3 3.6 7.6 5.4 13 5.4 2.7 0 5-0.1 6.9-0.4 1.8-0.3 3.3-0.5 4.3-0.8l0-35.7Zm0-38l10.1-1.7 0 82.6c-2.3 0.7-5.3 1.3-8.9 2 -3.6 0.7-7.8 1-12.5 1 -4.3 0-8.2-0.7-11.7-2.1 -3.5-1.4-6.4-3.3-8.9-5.9 -2.5-2.5-4.4-5.6-5.7-9.3 -1.3-3.7-2-7.8-2-12.3 0-4.3 0.6-8.3 1.7-11.9 1.1-3.6 2.8-6.7 4.9-9.3 2.2-2.6 4.8-4.6 8-6.1 3.1-1.4 6.7-2.2 10.8-2.2 3.3 0 6.1 0.4 8.6 1.3 2.5 0.9 4.4 1.7 5.6 2.5l0-28.5Z" className={primaryClassName} />
      <path d="M650.2 126c0 69.6-56.4 126-126 126 -69.6 0-126-56.4-126-126 0-69.6 56.4-126 126-126 69.6 0 126 56.4 126 126Z" className={primaryClassName} />
      <path d="M508.2 157.5l0-13.3 12 0 0 27.5c0 19.5-8.5 29.3-25.6 29.3 -4.2 0-9.1-0.8-14.8-2.5l3.1-9.6c4.6 1.5 8.6 2.3 11.9 2.3 4.5 0 7.9-1.5 10.1-4.5 2.2-3 3.3-7.9 3.3-14.5l0-5.1 0-9.3Z" className={secondaryClassName} />
      <path d="M542.4 120.1l0-12.1 31.4 18.1 -31.4 18.1 0-12.1 -67.9 0 0-12 67.9 0Z" className={secondaryClassName} />
      <path d="M520.1 94.8l0 13.3 -12 0 0-13.3 0-9.8 0-4.4c0-19.5 8.5-29.3 25.6-29.3 4.2 0 9.1 0.8 14.8 2.5l-3.1 9.6c-4.6-1.5-8.6-2.2-11.9-2.2 -4.5 0-7.9 1.5-10.1 4.5 -2.2 3-3.3 7.9-3.3 14.5l0 14.5Z" className={secondaryClassName} />
    </svg>
  );

  return props.link ?
    <Link className={className} to="/">{logo}</Link> :
    <span className={className}>{logo}</span>;
};

Logo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.bool,
  secondary: PropTypes.bool
};

export default Logo;
