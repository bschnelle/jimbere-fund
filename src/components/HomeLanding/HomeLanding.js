import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeLanding.scss';

/**
 * landing section of root route
 */
const HomeLanding = ({ isMedium }) => (
  <ImageContainer className={classes.splash} src="/images/landing-o.jpg">
    <div className={classes.landing}>
      <div className={classes.slogan}>
        <div className={classes.message}>
          <div>Mobilizing women</div>
          <div>entrepreneurs to lift</div>
          <div>Congo out of poverty.</div>
        </div>
        <div>
          <Button label="Join Us" to="/get-involved" nowrap />
          {isMedium && <Button label="Donate" to="/donate" light nowrap />}
        </div>
      </div>
    </div>
  </ImageContainer>
);

HomeLanding.propTypes = {
  isMedium: PropTypes.bool.isRequired,
};

export default HomeLanding;
