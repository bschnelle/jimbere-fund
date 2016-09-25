import React from 'react';
import Section from '../Section/Section';
import classes from './HomePurpose.scss';

const HomePurpose = () => (
  <div className={classes.purpose}>
    <Section className={classes.section}>
      <div>
        <h1>Purpose</h1>
        <p>
          Jimbere Fund is on a mission to revitalize distressed communities in Congo.
          We support those communities by designing, implementing and managing high-impact
          projects that grow local economies, create jobs and lift people out of
          extreme poverty in a sustainable way.
        </p>
        <div>
          <h3>Vision</h3>
          <p>
            Our vision is a world in which people have the means they need to create
            opportunities to realize their potential and for all to live with dignity.
          </p>
        </div>
        <div>
          <h3>Mission</h3>
          <p>
            Our mission is to empower the people and communities of the D.R. Congo to create
            economic opportunities and improve their livelihoods. We strive to make
            vulnerable communities stronger and more resilient through community-driven
            interventions.
          </p>
        </div>
      </div>
    </Section>
  </div>
);

export default HomePurpose;
