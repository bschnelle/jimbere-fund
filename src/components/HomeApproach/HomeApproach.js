import React, { Component, PropTypes } from 'react';
import FlipMove from 'react-flip-move';
import Container from '../Container/Container';
import HomeApproachIcon from '../HomeApproachIcon/HomeApproachIcon';
import classes from './HomeApproach.scss';

/**
 * approach section of root route
 */
class HomeApproach extends Component {

  static propTypes = {
    isSmall: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { activeContainer: 'Collaborative' };
    this.updateContainer = this.updateContainer.bind(this);
  }

  /**
   * updateContainer - active section when header/icon is clicked
   *
   * @param  {Object} e event
   */
  updateContainer(e) {
    this.setState({ activeContainer: e.currentTarget.dataset.title });
  }

  render() {
    const sections = [
      {
        title: 'Collaborative',
        body: `
          We believe that lasting change can only happen from the ground-up.
          We ensure community participation in formulating solutions and
          gaining wider buy-in of the way each project is implemented.
        `
      },
      {
        title: 'Holistic',
        body: `
          We work with communities to define a set of interventions that
          will do the most good. We then invest in their ideas. By working
          with different communities in a given area, we create linkages
          and small ecosystems for more economic activities and trade.
          Turning interventions into business-like model is a sustainable
          way to end poverty.
        `
      },
      {
        title: 'Self-Sustaining',
        body: `
          Our projects are primarily linked to local economies and designed
          to be financially self-sustaining long after we're gone.
          Communities we serve elect people to help co-manage our projects,
          ensuring continuity after the implementation phase.
        `
      }
    ];

    const { props: { isSmall }, updateContainer } = this;
    const { activeContainer } = this.state;
    const enter = {
      from: { opacity: 0, transform: 'translateY(-30px)' },
      to: { opacity: 1 }
    };
    const leave = {
      from: { opacity: 1 },
      to: { opacity: 0, transform: 'translateY(30px)' }
    };

    /**
     * render different elements based on screen size (isSmall)
     * desktop is a lefthand list with righthand detail, mobile
     * is a list of icons on top and detail below
     */
    const approachClassName = isSmall ? classes.approachSmall : classes.approach;
    const sectionElements = sections.map((section) => {
      const { title: t } = section;
      const className = activeContainer === t ? classes.active : '';
      return !isSmall
      ? <h4 className={className} data-title={t} key={t} onClick={updateContainer}>{t}</h4>
      : (
        <div className={className} key={t}>
          <span data-title={t} onClick={updateContainer}>
            <HomeApproachIcon
              active={!!className}
              className={classes.icon}
              icon={t.toLowerCase()}
            />
          </span>
        </div>
      );
    });

    const { body, title } = sections.find((section) => section.title === activeContainer);
    const detailElement = !isSmall
    ? <p>{body}</p>
    : (
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );

    return (
      <Container className={classes.section} container section title="Our Approach">
        <div className={classes.content}>
          <div className={approachClassName}>
            <div className={classes.sections}>
              {sectionElements}
            </div>
            <FlipMove duration={200} enterAnimation={enter} leaveAnimation={leave}>
              <div className={classes.detail} key={activeContainer}>
                {detailElement}
              </div>
            </FlipMove>
          </div>
        </div>
      </Container>
    );
  }
}

export default HomeApproach;
