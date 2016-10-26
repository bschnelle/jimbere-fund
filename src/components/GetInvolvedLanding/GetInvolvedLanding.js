import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './GetInvolvedLanding.scss';

/**
 * landing section of /get-involved route
 */
export const GetInvolvedLanding = (props) => (
  <ImageContainer className={classes.imageContainer} src="/images/hands-o.jpg">
    <Container className={classes.container} fluid title="Get Involved">
      <div className={classes.header}>
        <div>
          <h6>We need your time and talents</h6>
        </div>
      </div>
      <div className={classes.tiles}>
        <div>
          <div data-id="fundraising" onClick={props.onScrollClick}>
            <h5>Start a</h5>
            <h5>Fundraiser</h5>
          </div>
        </div>
        <div>
          <div data-id="newsletter" onClick={props.onScrollClick}>
            <h5>Newsletter</h5>
            <h5>Sign up</h5>
          </div>
        </div>
        <div>
          <div data-id="work-with-us" onClick={props.onScrollClick}>
            <h5>Work</h5>
            <h5>With Us</h5>
          </div>
        </div>
      </div>
    </Container>
  </ImageContainer>
);

GetInvolvedLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired
};

export default GetInvolvedLanding;
