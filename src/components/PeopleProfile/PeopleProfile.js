import React, { Component, PropTypes } from 'react';
import classes from './PeopleProfile.scss';

class PeopleProfile extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick } = this.props;
    if (onClick && this.props.profile.bio) this.props.onClick(this.props.profile);
  }

  render() {
    const { onClick, profile: { bio, image, name, title } } = this.props;
    const imageSrc = image ? `/images/${image}` : '/images/profile-placeholder.jpg';
    let imageWrapperClassName = classes.imageWrapper;
    if (onClick && bio) imageWrapperClassName += ` ${classes.hoverable}`;

    return (
      <div className={classes.profile} onClick={this.onClick}>
        <div className={imageWrapperClassName}>
          <img alt={name} src={imageSrc} />
        </div>
        <span className={classes.name}>{name}</span>
        <span className={classes.title}>{title}</span>
      </div>
    );
  }
}

PeopleProfile.propTypes = {
  onClick: PropTypes.func,
  profile: PropTypes.object.isRequired,
};

export default PeopleProfile;
