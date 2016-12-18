import React, { PropTypes } from 'react';
import classes from './PeopleProfile.scss';

const PeopleProfile = ({ image, name, onClick, title }) => {
  let imageSrc = image ? `/images/${image}` : '/images/peoplePlaceholder.jpg';

  return (
    <div className={classes.profile} disabled={!!onClick} onClick={onClick}>
      <div className={classes.imageWrapper}>
        <img alt={name} src={imageSrc} />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.title}>{title}</span>
    </div>
  );
};

PeopleProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default PeopleProfile;
