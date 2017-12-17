import React, { PropTypes } from 'react';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeLanding.scss';

/**
 * landing section of root route
 */
const HomeLanding = (props) => (
  <ImageContainer className={classes.splash} src="/images/children-o.jpg">
    <div className={classes.landing}>
      <div className={classes.slogan}>
        {!props.isMedium ? (
          <div className={classes.message}>
            Connecting communities beyond the reach of the road to opportunities.
          </div>
        ) : (
          <div className={classes.message}>
            <div>Connecting communities</div>
            <div>beyond the reach of the road</div>
            <div>to opportunities.</div>
          </div>
        )}

        <div>
          <Button label="Join Us" to="/get-involved" nowrap />
          <Button label="Donate" to="/donate" light nowrap />
        </div>
      </div>
    </div>
  </ImageContainer>
);

HomeLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired,
  isMedium: PropTypes.bool.isRequired
};

export default HomeLanding;
