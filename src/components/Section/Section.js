import React, { PropTypes } from 'react';
import classes from './Section.scss';

const Section = (props) => {
  let className = classes.section;
  if (props.className) className += ` ${props.className}`;
  return <div className={className}>{props.children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Section;
