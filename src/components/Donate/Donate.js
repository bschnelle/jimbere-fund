import React, { Component } from 'react';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import DonateTiles from '../DonateTiles/DonateTiles';
import classes from './Donate.scss';

/**
 * landing section of /donate route
 */
export class Donate extends Component { // eslint-disable-line
  render() {
    return (
      <ImageContainer className={classes.imageContainer} src="/images/donate-o.jpg">
        <Container className={classes.container} fluid title="Thank You">
          <div className={classes.header}>
            <div>
              <h6>
                Your donation is an investment in a real, long-term change.<br />
                Begin the ripple effect: help us mobilize, prepare, and position<br />
                women entrepreneurs to have a positive, permanent effect on<br />
                their communities and Congo.
              </h6>
            </div>
          </div>
          <DonateTiles />
        </Container>
      </ImageContainer>
    );
  }
}

export default secondaryTheme(Donate);
