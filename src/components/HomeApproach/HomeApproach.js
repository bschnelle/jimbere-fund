import React, { Component } from 'react';
import Section from '../Section/Section';
import classes from './HomeApproach.scss';

class HomeApproach extends Component {

  constructor(props) {
    super(props);
    this.state = { activeSection: 'Collaborative' };
    this.updateSection = this.updateSection.bind(this);
  }

  updateSection(e) {
    this.setState({ activeSection: e.target.innerHTML });
  }

  render() {
    const sections = {
      Collaborative: `
        We engage communities we serve at every level: from the design to the
        implementation of each project. Not only do we engage them, we actually
        let them take the lead. We believe that lasting change can only happen
        from the ground-up. We ensure community participation in formulating
        solutions and a wider buy-in of the way each project is implementated.
      `,
      Holistic: `
        Poverty is complex. No single intervention can tackle it alone. Nor is
        there a silver-bullet. We work with communities to figure out a set of
        interventions that will do the most good. We then invest in their ideas.
        By working with different communities in a given area, we create linkages
        and small ecosystems for more economic activities and trade. Turning
        interventions into business-like model is a sustainable way to end poverty.
      `,
      'Self-Sustaining': `
        Sustainability is important to us. We design each project with an
        “exit strategy” in mind and ensure that every community we serve will
        continue to reap the benefits. Our projects are mostly linked to local
        economies and designed to be financially self-sustaining long after we're
        gone. Communities we serve elect people to help co-manage our projects,
        ensuring continuity after the implementation phase.
      `
    };

    return (
      <Section className={classes.section}>
        <div>
          <h1>Approach</h1>
          <div className={classes.approach}>
            <div className={classes.sections}>
              {Object.keys(sections).map((section) => {
                const className = this.state.activeSection === section ? classes.active : '';
                return (
                  <h3 className={className} key={section} onClick={this.updateSection}>
                    {section}
                  </h3>
                );
              })}
            </div>
            <div className={classes.details}>
              <p>{sections[this.state.activeSection]}</p>
            </div>
          </div>

          <div className={classes.process}>
            <h3>Process</h3>
          </div>
        </div>
      </Section>
    );
  }
}

export default HomeApproach;
