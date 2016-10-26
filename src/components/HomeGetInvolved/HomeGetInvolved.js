import React, { Component } from 'react';
import Container from '../Container/Container';
import GetInvolvedTiles from '../GetInvolvedTiles/GetInvolvedTiles';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeGetInvolved.scss';

/**
 * story section of root route
 */
class HomeGetInvolved extends Component {

  constructor(props) {
    super(props);
    this.state = { readMore: false };
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  /**
   * toggleReadMore - open/close detail
   */
  toggleReadMore() {
    this.setState({ readMore: !this.state.readMore });
  }

  render() {
    return (
      <ImageContainer className={classes.imageContainer} src="/images/hands-o.jpg">
        <Container className={classes.section} container fluid section title="Get Involved">
          <p>We need your time and talents.</p>
          <GetInvolvedTiles link />
        </Container>
      </ImageContainer>
    );
  }
}

export default HomeGetInvolved;
