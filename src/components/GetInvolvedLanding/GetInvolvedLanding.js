import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import GetInvolvedTiles from '../GetInvolvedTiles/GetInvolvedTiles';
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
      <GetInvolvedTiles onTileClick={props.onScrollClick} />
    </Container>
  </ImageContainer>
);

GetInvolvedLanding.propTypes = {
  onScrollClick: PropTypes.func.isRequired
};

export default GetInvolvedLanding;
