import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import ImageLoader from '../ImageLoader/ImageLoader';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import classes from './HomeLanding.scss';

const HomeLanding = (props) => {
  const { onScrollClick } = props;

  return (
    <ImageLoader className={classes.splash} src="/images/children-o.jpg">
      <div className={classes.landing}>
        <div className={classes.slogan}>
          <div>
            <span>battling</span>
            <span><span>extreme</span></span>
            <span>poverty</span>
            <span>in Congo</span>
          </div>
        </div>

        <div className={classes.actions}>
          <Button label="Join Us" to="join-us" />
        </div>

        <ScrollArrow className={classes.scrollToFacts} label="facts" onClick={onScrollClick} />
      </div>
    </ImageLoader>
  );
};

HomeLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired
};

export default HomeLanding;
