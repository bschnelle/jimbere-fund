import React from 'react';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeLanding from '../HomeLanding/HomeLanding';
import Section from '../Section/Section';
// import classes from './Home.scss';

const Home = () => {
  const scrollToFacts = () => {
    const duration = 500;
    const el = document.getElementById('facts');
    const startingY = window.pageYOffset;
    const diff = el.offsetTop - startingY;
    let start;

    /* [0-1] */
    const easeInOutCubic = (t) => (
      t < 0.5
      ? 4 * t * t * t
      : ((t - 1) * ((2 * t) - 2) * ((2 * t) - 2)) + 1
    );

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min(easeInOutCubic(elapsed / duration), 1);
      window.scrollTo(0, startingY + (diff * percent));

      if (elapsed < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };

  return (
    <div>
      <HomeLanding onScrollClick={scrollToFacts} />
      <HomeFacts id="facts" />
      <Section>Mission & Vision</Section>
      <Section>Process</Section>
      <Section>Story</Section>
      <Section>Footer</Section>
    </div>
  );
};

export default Home;
