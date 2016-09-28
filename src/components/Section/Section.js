import React, { PropTypes } from 'react';
import classes from './Section.scss';

const Section = (props) => {
  let className = classes.section;
  if (props.className) className += ` ${props.className}`;
  return (
    <div className={className} id={props.id}>
      <h1>{props.title}</h1>
      {props.container
      ? <div className={classes.container}>{props.children}</div>
      : props.children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  container: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Section;
