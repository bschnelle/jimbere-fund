import React, { PropTypes } from 'react';
import classes from './Fact.scss';

const Fact = (props) => {
  const { body, header } = props;

  return (
    <div className={props.className || ''}>
      <div className={classes.fact}>
        <h4>{header}</h4>
        <span>{body}</span>
      </div>
    </div>
  );
};

Fact.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  header: PropTypes.string.isRequired
};

export default Fact;
