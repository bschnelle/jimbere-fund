import React, { Component } from 'react';
import classes from './JoinUs.scss';

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeCard: undefined };
    this.onCardClick = this.onCardClick.bind(this);
    this.shrinkCard = this.shrinkCard.bind(this);
  }

  onCardClick(activeCard) {
    this.setState({ activeCard });
  }

  shrinkCard(e) {
    e.stopPropagation();
    this.setState({ activeCard: null });
  }

  render() {
    const cards = {
      Story: 'The story',
      Positions: 'The positions'
    };

    return (
      <div className={classes.joinUs}>
        <div>
          <div className={classes.header}>
            <div>
              <h1>Join Us</h1>
              <p>Together we can end poverty.</p>
            </div>
          </div>
          <div className={classes.cards}>
            {Object.keys(cards).map((card) => (
              <div
                className={this.state.activeCard === card ? classes.active : ''}
                key={card}
                onClick={() => this.onCardClick(card)}
              >
                <h4>{card}</h4>
                <span onClick={this.shrinkCard}>Close</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default JoinUs;
