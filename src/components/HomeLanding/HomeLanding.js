import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import classes from './HomeLanding.scss';

/**
 * landing section of root route
 */
const HomeLanding = (props) => {
  const { onScrollClick } = props;

  return (
    <ImageContainer className={classes.splash} src="/images/children-o.jpg">
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
          <Button label="Join Us" to="/get-involved" />
        </div>

        <ScrollArrow className={classes.scrollToFacts} label="facts" onClick={onScrollClick} />
      </div>
    </ImageContainer>
  );
};

HomeLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired
};

export default HomeLanding;
