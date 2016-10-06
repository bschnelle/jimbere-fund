import React, { Component } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './GetInvolved.scss';

export class GetInvolved extends Component {
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
              {['Positions'].map((card) => {
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

export default secondaryTheme(GetInvolved);
