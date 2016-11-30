import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import classes from './HomeStory.scss';

/**
 * story section of root route
 */
class HomeStory extends Component {

  constructor(props) {
    super(props);
    this.state = { readMore: false };
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  /**
   * toggleReadMore - open/close detail
   */
  toggleReadMore() {
    this.setState({ readMore: !this.state.readMore });
  }

  render() {
    const { readMore } = this.state;
    let readMoreClass = classes.readMore;
    if (readMore) readMoreClass += ` ${classes.readMoreOpen}`;

    return (
      <Container className={classes.section} container section title="Story">
        <div className={classes.story}>
          <p>Co-founders Obadias, Adele and Sandra came from some of the most remote areas of Congo
          in High Plateaux of South Kivu. You’ve got to walk a couple of days from the nearest dirt
          road to reach their ancestral villages. After witnessing the horrors of Congo’s wars and
          resettling to New York, they wanted to do something about their homeland still mired in
          extreme poverty, tribal conflict, and largely disconnected from the modern world. But they
          weren't’ sure what could make change happen there. The only thing they knew for sure was
          that there was a great deal of need on the ground - from conflict to water, food shortages
          to health, gender inequality to education. Where could they possibly start?</p>

          <div className={readMoreClass}>
            <p>For over four years, they grappled to define what exactly they could do to help and
            which intervention would make the most impact. These kinds of deliberations went nowhere.
            The needs were too great to condense into one sort of intervention. There is no
            silver-bullet to fix poverty. It’s too complex and multifaceted, especially in Congo.
            Then they came to the realization that they had been asking the wrong question.</p>

            <p>Instead of asking what they could do to help those in extreme poverty and wrestling
            with how to go about it, they asked: what do people need most? They went and asked local
            communities and villages about their top priorities. Each local community or village
            gave them somewhat different needs and priorities.</p>

            <p>They figured out that they could not possibly find one solution for Congo’s developmental
            challenges and that no one intervention is close to being sufficient to help those in need.
            The best way to help, they concluded, was to work with and support local communities and
            villages to identify top interventions that would do the most good, help them design and
            implement their own projects in a way that bring people together from different ethnic
            groups - building trust between communities through tackling common needs together. Their
            model was born out of frustration from having to choose one clear thing to do, as every
            textbook in nonprofit and international development would tell you.</p>
          </div>

          <div className={classes.readMoreButton}>
            <Button label={readMore ? 'Read less' : 'Read more'} onClick={this.toggleReadMore} small />
          </div>
        </div>
      </Container>
    );
  }
}

export default HomeStory;
