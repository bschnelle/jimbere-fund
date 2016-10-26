import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
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
    const { readMore } = this.state;
    let readMoreClass = classes.readMore;
    if (readMore) readMoreClass += ` ${classes.readMoreOpen}`;

    return (
      <Container className={classes.section} container section title="Story">
        <div className={classes.story}>
          <p>We need your time and talents.</p>

        </div>
      </Container>
    );
  }
}

export default HomeGetInvolved;
