import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import Vivus from 'vivus';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeHowWeWork.scss';

const steps = [
  {
    title: 'Mobilize Women',
    body: `
      We reach out to and engage with women and their communities, targeting
      the poorest households struggling to meet their basic needs. We listen
      to their priorities and concerns and work towards building trust and
      consensus among the communities we serve, cultivating relationships.
    `,
  },
  {
    title: 'Provide Training',
    body: `
      We provide a week-long boot camp for new members aimed at building their
      confidence, creating a continuous peer learning and group support atmosphere,
      and instilling sound financial and business management practices. Together,
      we identify local opportunities for and interests of each participant,
      form business teams, and then launch and support their businesses.
    `,
  },
  {
    title: 'Social Support System',
    body: `
      We form Akiba Groups (Savings Groups), composed of about 10 business
      teams or 30 entrepreneurs, who meet bi-weekly to learn from and support
      each other, as well as receive training from our field staff. Members of
      each Akiba Group pool their savings together, borrow from the pool when
      the unexpected happens and guarantee each other’s loans for growth capital.
    `,
  },
  {
    title: 'Flexible Financing',
    body: `
      We initially provide grants for new teams, to be followed by low-interest
      loans for those that successfully meet clear, measurable growth goals.
    `,
  },
  {
    title: 'Sustained Support',
    body: `
      We accompany these new businesses with regular mentorship, bi-weekly
      trainings, and meeting events for each Akiba Group. In these meetings,
      women help each other at personal and professional levels while our
      field staff provide continued support through strategy and planning
      trainings, accompanied by goal assessments of each Akiba Group’s
      performance on a regular basis.
    `,
  },
  {
    title: 'Graduation',
    body: `
      Our ultimate goal is graduating our participants into sustainable
      livelihoods. New businesses can graduate from our support after at
      least a year (at most two years), and continue to grow on their own
      through access to commercial credit and capital.
    `,
  },
];

/**
 * process section of root route
 */
class DesktopHowWeWork extends Component {
  constructor(props) {
    super(props);
    const { onScroll } = this;
    this.onScroll = debounce(onScroll, 25);
  }
  componentDidMount() {
    /* eslint-disable no-new */
    const options = { duration: 150, type: 'oneByOne', start: 'manual' };
    for (let i = 1; i <= 6; i++) {
      this[`step${i}Vivus`] = new Vivus(`how-we-work-step-${i}`, options);
    }
    /* eslint-enable no-new */

    document.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    let doneAnimating = true;
    for (let i = 1; i <= 6; i++) {
      if (!this[`step${i}Animated`]) {
        doneAnimating = false;
        const el = this[`step${i}Ref`];
        const animate = (el.getBoundingClientRect().top - (el.offsetHeight / 1.25)) <= 0;
        if (animate) {
          /* eslint-disable no-new */
          this[`step${i}Vivus`].play();
          this[`step${i}Animated`] = true;
          /* eslint-enable no-new */
        }
      }
    }

    if (doneAnimating) {
      document.removeEventListener('scroll', this.onScroll);
    }
  }

  setRef = (el, i) => {
    this[`step${i}Ref`] = el;
  }

  render() {
    return (
      <div>
        {steps.map(({ title, body }, i) => {
          const step = i + 1;
          const isLanding = !i;
          const isImageStep = i % 2 === 0;
          const className = isImageStep ? 'imgSection' : 'section';
          const content = (
            <Container
              key={`step_${step}`}
              className={classNames(classes[className], isLanding && classes.landing)}
              container
              section
              title={isLanding ? 'How We Work' : undefined}
            >
              <div className={classes.content}>
                <div>
                  <h5>{title}</h5>
                  <p>{body}</p>
                </div>
              </div>
              <object
                className={classes.svg}
                id={`how-we-work-step-${step}`}
                type="image/svg+xml"
                data={`/images/how-we-work-step-${step}.svg`}
                ref={el => this.setRef(el, step)}
              />
            </Container>
          );

          return !isImageStep ? content : (
            <ImageContainer
              key={`img_step_${step}`}
              src={`/images/how-we-work-${step}-o.jpg`}
            >{content}</ImageContainer>
            );
        })}
      </div>
    );
  }
}

class MobileHowWeWork extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedStep: 0 };
  }

  render() {
    const { selectedStep } = this.state;
    const step = steps[selectedStep];

    return (
      <ImageContainer src="/images/how-we-work-1-o.jpg">
        <Container
          className={classes.mobile}
          container
          section
          title="How We Work"
        >
          <div className={classes.mobileSteps}>
            {steps.map(({ title, body }, i) => (
              <span
                className={classNames(classes.mobileStep, i === selectedStep && classes.active)}
                key={`step_${i + 1}`}
                onClick={() => this.setState({ selectedStep: i })}
              >
                <span>0{i + 1}</span>
              </span>
              ))}
          </div>
          <h5>{step.title}</h5>
          <p>{step.body}</p>
        </Container>
      </ImageContainer>
    );
  }
}

const HomeHowWeWork = ({ isMedium }) =>
  (isMedium ? <DesktopHowWeWork /> : <MobileHowWeWork />);

HomeHowWeWork.propTypes = {
  isMedium: PropTypes.bool.isRequired,
};

export default HomeHowWeWork;
