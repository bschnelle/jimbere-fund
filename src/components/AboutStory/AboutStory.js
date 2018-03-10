import React from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './AboutStory.scss';

/**
 * story section of root route
 */
const AboutStory = () => (
  <Container className={classes.section} container section title="Story">
    <div className={classes.story}>
      <p>
        Co-founders Adele, Sandra and Obadias came from remote areas of Congo in
        High Plateaus of Itombwe in South Kivu. You have to walk for days from the
        nearest dirt road to reach their ancestral villages. After witnessing the
        horrors of Congo’s wars and settling in New York, they wanted to help their
        homeland still mired in extreme poverty, tribal conflict, and largely
        disconnected from the modern world. But they weren't sure where to start.
      </p>
      <p>
        After years of discussions and research into the most effective ways to sustainably
        lift people out poverty, they concluded that empowering women to build sustainable
        livelihoods through enterprise create multiple benefits and improve the living
        standards of families and communities. Helping women in rural communities in Congo
        to launch their own businesses means increased income, which in turn translate
        into better standards of living for their families, better education for their
        children and better access to healthcare for their communities. Jimbere Fund
        seeks to fight poverty in rural Congo by mobilizing, preparing and financing
        women to launch their businesses, and become catalysts for change.
      </p>
      <div className={classes.buttonWrapper}>
        <Button label="Our Team" to="/people" nowrap />
      </div>
    </div>
  </Container>
);

export default AboutStory;
