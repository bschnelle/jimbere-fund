import React, { PropTypes } from 'react';
import { Link } from 'react-router';
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
          {!props.isLarge ? (
            <div className={classes.message}>
              Connecting communities beyond the reach of the road to opportunities.
            </div>
          ) : (
            <div className={classes.message}>
              <div>Connecting communities beyond the</div>
              <div>reach of the road to opportunities.</div>
            </div>
          )}

          <div>
            <Button className={classes.joinUsButton} label="Join Us" to="/get-involved" nowrap />
          </div>
        </div>
      </div>
    </ImageContainer>
  );
};

HomeLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired,
  isLarge: PropTypes.bool.isRequired
};

export default HomeLanding;
