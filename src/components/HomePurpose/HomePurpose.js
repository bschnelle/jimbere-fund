import React from 'react';
import ImageContainer from '../ImageContainer/ImageContainer';
import Container from '../Container/Container';
import classes from './HomePurpose.scss';

const HomePurpose = () => (
  <ImageContainer src="/images/street.jpg" className={classes.ImageContainer}>
    <Container className={classes.section} container section title="Purpose">
      <div className={classes.content}>
        <p>
          Jimbere Fund is on a mission to revitalize distressed communities in Congo.
          We support those communities by designing, implementing and managing high-impact
          projects that grow local economies, create jobs and lift people out of
          extreme poverty in a sustainable way.
        </p>
        <div>
          <h4>Vision</h4>
          <p>
            A world in which people have the means they need to create
            opportunities to realize their potential and for all to live with dignity.
          </p>
        </div>
        <div>
          <h4>Mission</h4>
          <p>
            To empower the people and communities of the D.R. Congo to create
            economic opportunities and improve their livelihoods. We strive to make
            vulnerable communities stronger and more resilient through community-driven
            interventions.
          </p>
        </div>
      </div>
    </Container>
  </ImageContainer>
);

export default HomePurpose;
