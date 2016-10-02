import React from 'react';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './Donate.scss';

const Donate = () => (
  <ImageContainer className={classes.ImageContainer} src="/images/school-o.jpg">
    <div className={classes.donate}>
      <div>
        <div>
          <div>
            <h1>Donate</h1>
            <h6>Congo is among the most destitute countries on Earth.</h6>
            <p>You can help change that.</p>
          </div>
        </div>
        <div>
          <Button label="Give Now" href="https://www.razoo.com/us/story/Jimbere-Fund" />
        </div>
      </div>
    </div>
  </ImageContainer>
);

export default Donate;
