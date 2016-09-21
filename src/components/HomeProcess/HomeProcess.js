import React from 'react';
import Section from '../Section/Section';
import classes from './HomeProcess.scss';

const HomeProcess = () => (
  <Section className={classes.section}>
    <h1>Process</h1>
    <div className={classes.missionAndVision}>
      <div>
        <p>
          Our vision is a world in which people have the means they need to create
          opportunities to realize their potential and for all to live with dignity.
        </p>
      </div>
      <div>
        <p>
          Our mission is to empower people and communities in the D.R. Congo to create
          economic opportunities and improve their livelihoods. We strive to make
          vulnerable communities stronger and more resilient through community-driven
          interventions.
        </p>
      </div>
    </div>
  </Section>
);

export default HomeProcess;
