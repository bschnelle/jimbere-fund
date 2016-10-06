import React, { PropTypes } from 'react';
import HomeFacts from '../HomeFacts/HomeFacts';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomePurpose from '../HomePurpose/HomePurpose';
import classes from './Home.scss';

const Home = (props) => {
  const scrollToFacts = () => {
    const duration = 750;
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
    <div className={classes.home}>
      <HomeLanding onScrollClick={scrollToFacts} />
      <HomeFacts id="facts" isSmall={props.isSmall} />
      <HomePurpose />
      <HomeApproach isSmall={props.isSmall} />
      <HomeProcess isSmall={props.isSmall} />
    </div>
  );
};

Home.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default Home;
