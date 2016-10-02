import React from 'react';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';
import Container from '../Container/Container';
import classes from './Donate.scss';

const Donate = () => (
  <ImageContainer className={classes.imageContainer} src="/images/school-o.jpg">
    <Container className={classes.donate} title="Donate">
      <div>
        <div>
          <div>
            <h6>Congo is among the most destitute countries on Earth.</h6>
            <p>You can help change that.</p>
          </div>
        </div>
        <div>
          <Button label="Give Now" href="https://www.razoo.com/us/story/Jimbere-Fund" />
        </div>
      </div>
    </Container>
  </ImageContainer>
);

export default Donate;
