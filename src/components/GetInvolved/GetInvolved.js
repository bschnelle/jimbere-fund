import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './GetInvolved.scss';

export const GetInvolved = () => (
  <ImageContainer className={classes.imageContainer} src="/images/new_york-o.jpg">
    <Container className={classes.container} fluid title="Get Involved">
      <div className={classes.joinUs}>
        <div className={classes.header}>
          <div>
            <h6>We're currently looking for volunteers to fill the following positions.</h6>
          </div>
        </div>
        <div className={classes.positions}>
          <ul>
            <li>Graphic Designer</li>
            <li>Web Developer</li>
            <li>Blogger/Storyteller</li>
            <li>Photographer/Videographer</li>
            <li>Financial Manager</li>
            <li>Strategy & Planning Mgr</li>
            <li>Brand Manager</li>
            <li>Int'l Development Mgr</li>
          </ul>
          <div className={classes.contact}>
            <Button label="Contact" to="/contact" />
          </div>
        </div>
      </div>
    </Container>
  </ImageContainer>
);

export default secondaryTheme(GetInvolved);
