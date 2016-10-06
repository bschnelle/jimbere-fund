import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './GetInvolved.scss';

class GetInvolved extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCard: undefined };
    this.onCardClick = this.onCardClick.bind(this);
    this.closeCard = this.closeCard.bind(this);
  }

  onCardClick(activeCard) {
    this.setState({ activeCard });
  }

  closeCard(e) {
    e.stopPropagation();
    this.setState({ activeCard: null });
  }

  render() {
    const cards = {
      Story: (
        <div>
          <p>Co-founders Obadias Ndaba and Adele Kibasumba came from some of the most remote areas
          of Congo in High Plateaux of South Kivu. You’ve got to walk a couple of days from the
          nearest dirt road to reach their ancestral villages. After witnessing the horrors of
          Congo’s wars and resettling to New York, they wanted to do something about their homeland
          still mired in extreme poverty, tribal conflict, and largely disconnected from the modern
          world. But they weren't’ sure what could make change happen there. The only thing they
          knew for sure was that there was a great deal of need on the ground - from conflict to
          water, food shortages to health,  gender inequality to education. Where could they
          possibly start?</p>

          <p>For over four years, they grappled to define what exactly they could do to help and
          which intervention would make the most impact. These kinds of deliberations went nowhere.
          The needs were too great to condense into one sort of intervention. There is no
          silver-bullet to fix poverty. It’s too complex and multifaceted, especially in Congo.
          Then they came to the realization that they had been asking the wrong question.</p>

          <p>Instead of asking what they could do to help those in extreme poverty and wrestling
          with how to go about it, they asked: what do people need most? They went and asked local
          communities and villages about their top priorities. Each local community or village
          gave them somewhat different needs and priorities.</p>

          <p>They figured out that they could not possibly find one solution for Congo’s
          developmental challenges and that no one intervention is close to being sufficient to
          help those in need. The best way to help, they concluded, was to work with and support
          local communities and villages to identify top interventions that would do the most good,
          help them design and implement their own projects in a way that bring people together
          from different ethnic groups - building trust between communities through tackling common
          needs together. Their model was born out of frustration from having to choose one clear
          thing to do, as every textbook in nonprofit and international development would
          tell you.</p>
        </div>
      ),
      Positions: (
        <div>
          <p>
            We're currently looking for volunteers to fill the following positions.
          </p>
          <ul>
            <li>Graphic Designer</li>
            <li>Web Developer</li>
            <li>Blogger/Storyteller</li>
            <li>Photographer/Videographer</li>
          </ul>
          <ul>
            <li>Financial Manager</li>
            <li>Strategy & Planning Mgr</li>
            <li>Brand Manager</li>
            <li>Int'l Development Mgr</li>
          </ul>
          <div className={classes.contact}>
            <Button label="Contact" to="/contact" />
          </div>
        </div>
      )
    };

    return (
      <ImageContainer className={classes.imageContainer} src="/images/new_york-o.jpg">
        <Container className={classes.container} fluid title="Get Involved">
          <div className={classes.joinUs}>
            <div className={classes.header}>
              <div>
                <h6>Together we can end poverty.</h6>
              </div>
            </div>
            <div className={classes.cards}>
              {['Story', 'Positions'].map((card) => {
                let className = classes[card.toLowerCase()];
                if (this.state.activeCard === card) className += ` ${classes.active}`;
                return (
                  <div className={className} key={card} onClick={() => this.onCardClick(card)}>
                    <span className={classes.close} onClick={this.closeCard}>Close</span>
                    <h4>{card}</h4>
                    <div className={classes.content}>{cards[card]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </ImageContainer>
    );
  }
}

export default GetInvolved;