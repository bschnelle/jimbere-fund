import React from 'react';
import Section from '../Section/Section';
import classes from './Home.scss';

const Home = () => (
  <div>
    <div className={classes.landing}>
      <div className={classes.splash}>
        <div />
      </div>

      <div className={classes.slogan}>
        <div>
          <span>battling</span>
          <span><span>extreme</span></span>
          <span>poverty</span>
          <span>in Congo</span>
        </div>
      </div>

      <div className={classes.actions}>
        <div>Join Us</div>
      </div>

      <div className={classes.facts}>
        <span />
        <span>facts</span>
      </div>
    </div>
    <Section>Mission & Vision</Section>
    <Section>Process</Section>
    <Section>Story</Section>
    <Section>Footer</Section>
  </div>
);

export default Home;
