import React from 'react';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
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

      <ScrollArrow className={classes.facts} label="facts" onClick={this.scrollToFacts} />
    </div>
    <Section>Mission & Vision</Section>
    <Section>Process</Section>
    <Section>Story</Section>
    <Section>Footer</Section>
  </div>
);

Home.scrollToFacts = () => { console.log('scroll'); };

export default Home;
