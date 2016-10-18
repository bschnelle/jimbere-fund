import React, { Component } from 'react';
import Container from '../Container/Container';
import classes from './Work.scss';

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = { active: null };
    this.activatePane = this.activatePane.bind(this);
    this.closePane = this.closePane.bind(this);
    this.panes = [
      { title: '1', content: 'Some content' },
      { title: '2', content: 'Some content' },
      { title: '3', content: 'Some content' },
      { title: '4', content: 'Some content' },
      { title: '5', content: 'Some content' }
    ];
  }

  activatePane(e) {
    e.stopPropagation();
    console.log('click', e.currentTarget.dataset.name);
    this.setState({ active: e.currentTarget.dataset.name });
  }

  closePane() {
    this.setState({ active: null });
  }

  render() {
    return (
      <div>
        <Container className={classes.work} title="Work">
          <div>
            <p>
              Jimbere Fund works closely with communities and villages in remote areas of
              Democratic Republic of Congo to design and implement individualized high-impact
              social interventions. Communities identify their most pressing needs in agriculture,
              education, health, women’s empowerment, water and sanitation, and we work with them
              to find solutions.
            </p>
            <h5>Why we do what we do</h5>
            <p>
              About 64% of Democratic Republic of Congo’s nearly 80 million inhabitants live below
              poverty line. Over 60% of them live in rural areas as subsistence farmers.  This
              unprecedented level of extreme poverty is amplified by tribal strife and incessant
              conflicts. We provide communities with tools and resources to improve their lives.
              Our approach is different: it’s truly locally-led. We source ideas of interventions
              from local communities and work with them to design and implement holistic and
              self-sustaining projects.
            </p>
            <h5>What makes us different</h5>
            <p>
              We go where others dare not go. Other nonprofits and relief organizations go up to
              where the last dirt road ends. We go beyond that. We reach out to some of the world’s
              most remote communities where social needs are most acute. It sometimes takes us a
              couple of days of hiking to get there. We firmly believe that solutions to issues of
              extreme poverty and inequality lie within people and communities living in it. We
              co-design and co-manage projects together with the communities we serve.
            </p>
            <p>
              Although our projects are informed by the communities we serve, the issues we hear
              across remote communities in Congo are the same. We ensure each community we
              serve has an opportunity to participate in designing the particularities of their
              project and drive the implementation. Here are the top issues we’re trying to fix,
              one community at a time.
            </p>
          </div>
        </Container>

        <div className={classes.panes}>
          <span className={classes.close} onClick={this.closePane} />
          {this.panes.map((pane, index) => {
            const className = this.state.active === index.toString()
            ? classes.active
            : this.state.active && index > this.state.active && classes.hidden;
            return (
              <div className={className} data-name={index} key={index} onClick={this.activatePane}>
                <h3>{pane.title}</h3>
                <p>{pane.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Work;
