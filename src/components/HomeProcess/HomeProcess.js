import React from 'react';
import Section from '../Section/Section';
import classes from './HomeProcess.scss';

const HomeProcess = () => (
  <Section className={classes.section} container title="Process">
    <div className={classes.process}>
      <img src="/images/process.svg" alt="Process infographic" />
    </div>
  </Section>
);

export default HomeProcess;
