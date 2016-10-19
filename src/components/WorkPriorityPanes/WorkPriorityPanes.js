import React, { Component, PropTypes } from 'react';
import classes from './WorkPriorityPanes.scss';

class Work extends Component {

  static propTypes = {
    compact: PropTypes.bool,
    panes: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { active: null };
    this.closePane = this.closePane.bind(this);
    this.togglePane = this.togglePane.bind(this);
  }

  closePane() {
    this.setState({ active: null });
  }

  togglePane(e) {
    e.stopPropagation();
    const { active } = this.state;
    const clicked = e.currentTarget.dataset.name;
    if (this.props.compact) {
      this.setState({ active: active && active === clicked ? null : clicked });
    } else {
      this.setState({ active: clicked });
    }
  }

  render() {
    let closeClassName = classes.close;
    if (this.state.active) closeClassName += ` ${classes.visible}`;

    return (
      <div className={classes.panesWrapper}>
        <div className={classes.panes}>
          <span className={closeClassName} onClick={this.closePane}>
            <span />
            <span />
          </span>
          <div>
          {this.props.panes.map((pane, i) => {
            const className = this.state.active === i.toString()
            ? classes.active
            : this.state.active && i > this.state.active && classes.hidden;
            return (
              <div className={className} key={i}>
                <div>
                  <div className={classes.title} data-name={i} onClick={this.togglePane}>
                    <img src={pane.image} alt={pane.imageAlt} />
                    <span />
                    <h5>{pane.title}</h5>
                  </div>
                  <div className={classes.content}>
                    {pane.content}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
