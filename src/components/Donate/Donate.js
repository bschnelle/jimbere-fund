import React from 'react';
import Button from '../Button/Button';
import classes from './Donate.scss';

const Donate = () => (
  <div className={classes.donate}>
    <div>
      <div>
        <div>
          <h1>Donate</h1>
          <p>Congo is among the most destitute countries on Earth.</p>
          <p>You can help change that.</p>
        </div>
      </div>
      <div>
        <Button label="Give Now" />
      </div>
    </div>
  </div>
);

export default Donate;
