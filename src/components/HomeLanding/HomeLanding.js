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
          {props.isMedium
          ? (
            <div>
              <span>Connecting communities beyond the reach of the road to opportunities.</span>
            </div>
          )
          : (
            <div>
              <span>Connecting</span>
              <span>communities beyond</span>
              <span>the reach of the road to</span>
              <span>opportunities.</span>
            </div>
          )}
          <div>
            <div><span>We enable Congo's most remote communities</span></div>
            <div>
              <span>
                to access critical services and thrive...
                <Link to="/work">learn more</Link>
              </span>
            </div>
          </div>
        </div>

        <div>
          <Button className={classes.joinUsButton} label="Join Us" to="/get-involved" />
        </div>

        <ScrollArrow className={classes.scrollToFacts} label="facts" onClick={onScrollClick} />
      </div>
    </ImageContainer>
  );
};

HomeLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired,
  isMedium: PropTypes.bool.isRequired
};

export default HomeLanding;
