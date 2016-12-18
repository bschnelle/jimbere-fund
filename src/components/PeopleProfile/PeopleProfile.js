import React, { PropTypes } from 'react';
import classes from './PeopleProfile.scss';

const PeopleProfile = ({ image, name, onClick, title }) => (
  <div className={classes.profile} onClick={onClick}>
    <img alt={name} src={image} />
    <h5>{name}</h5>
    <span>{title}</span>
  </div>
);

PeopleProfile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default PeopleProfile;
