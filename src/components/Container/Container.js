import React, { PropTypes } from 'react';
import classes from './Container.scss';

/**
 * component for encapsulating content
 */
const Container = (props) => {
  let className = classes.container;
  if (props.className) className += ` ${props.className}`;
  if (props.section) className += ` ${classes.section}`;

  return (
    <div className={className} id={props.id}>
      <h1>{props.title}</h1>
      <div className={props.fluid ? classes.fluid : ''}>{props.children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  id: PropTypes.string,
  section: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Container;
