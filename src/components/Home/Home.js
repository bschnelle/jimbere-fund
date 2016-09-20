import React from 'react';
import Button from '../Button/Button';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import Section from '../Section/Section';
import classes from './Home.scss';

const Home = () => {
  const scrollToFacts = () => { console.log('scroll'); };

  return (
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
          <Button label="Join Us" to="join-us" />
        </div>

        <ScrollArrow className={classes.facts} label="facts" onClick={scrollToFacts} />
      </div>
      <Section>Mission & Vision</Section>
      <Section>Process</Section>
      <Section>Story</Section>
      <Section>Footer</Section>
    </div>
  );
};

export default Home;
