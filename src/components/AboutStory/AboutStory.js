import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './AboutStory.scss';

/**
 * story section of root route
 */
class AboutStory extends Component {
  render() {
    return (
      <Container className={classes.section} container section title="Story">
        <div className={classes.story}>
          <p>Co-founders Obadias, Adele and Sandra came from some of the most remote
            areas of Congo in High Plateaux of South Kivu. You have to walk for days
            from the nearest dirt road to reach their ancestral villages. After
            witnessing the horrors of Congo’s wars and resettling to New York, they
            wanted to help their homeland still mired in extreme poverty, tribal
            conflict, and largely disconnected from the modern world. But they weren't
            sure where to start.</p>

          <p>After years of research and discussions with local communities, they
            knew they could not possibly find one solution to help all those in need.
            The best way forward, they concluded, was to work with and support local
            communities and villages to identify top interventions that would do the
            most good. Then they would help them design and implement their own
            projects, allowing communities to tackle common needs together.</p>
        </div>
      </Container>
    );
  }
}

export default AboutStory;
