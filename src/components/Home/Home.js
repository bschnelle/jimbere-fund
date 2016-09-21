import React from 'react';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeLanding from '../HomeLanding/HomeLanding';
import Section from '../Section/Section';
// import classes from './Home.scss';

const Home = () => {
  const scrollToFacts = () => { console.log('scroll'); };

  return (
    <div>
      <HomeLanding onScrollClick={scrollToFacts} />
      <HomeFacts />
      <Section>Mission & Vision</Section>
      <Section>Process</Section>
      <Section>Story</Section>
      <Section>Footer</Section>
    </div>
  );
};

export default Home;
