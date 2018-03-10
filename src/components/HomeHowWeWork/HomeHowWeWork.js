import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import classes from './HomeHowWeWork.scss';

/**
 * process section of root route
 */
const HomeHowWeWork = () => (
  <div>
    <ImageContainer src="/images/how-we-work-1-o.jpg">
      <Container
        className={classNames(classes.imgSection, classes.landing)}
        container
        section
        title="How We Work"
      >
        <div className={classes.content}>
          <div>
            <h5>Mobilize Women</h5>
            <p>
              We reach out to and engage with women and their communities, targeting
              the poorest households struggling to meet their basic needs. We listen
              to their priorities and concerns and work towards building trust and
              consensus among the communities we serve, cultivating relationships.
            </p>
          </div>
        </div>
        <object
          className={classes.svg}
          id="how-we-work-step-1"
          type="image/svg+xml"
          data="/images/how-we-work-step-1.svg"
        />
      </Container>
    </ImageContainer>
    <Container className={classes.section} container section>
      <div className={classes.content}>
        <div>
          <h5>Provide Training</h5>
          <p>
            We provide a week-long boot camp for new members aimed at building their
            confidence, creating a continuous peer learning and group support atmosphere,
            and instilling sound financial and business management practices. Together,
            we identify local opportunities for and interests of each participant,
            form business teams, and then launch and support their businesses.
          </p>
        </div>
      </div>
      <object
        className={classes.svg}
        id="how-we-work-step-2"
        type="image/svg+xml"
        data="/images/how-we-work-step-2.svg"
      />
    </Container>
    <ImageContainer src="/images/how-we-work-3-o.jpg">
      <Container className={classes.imgSection} container section>
        <div className={classes.content}>
          <div>
            <h5>Social Support System</h5>
            <p>
              We form Akiba Groups (Savings Groups), composed of about 10 business
              teams or 30 entrepreneurs, who meet bi-weekly to learn from and support
              each other, as well as receive training from our field staff. Members of
              each Akiba Group pool their savings together, borrow from the pool when
              the unexpected happens and guarantee each other’s loans for growth capital.
            </p>
          </div>
        </div>
        <object
          className={classes.svg}
          id="how-we-work-step-1"
          type="image/svg+xml"
          data="/images/how-we-work-step-1.svg"
        />
      </Container>
    </ImageContainer>
    <Container className={classes.section} container section>
      <div className={classes.content}>
        <div>
          <h5>Flexible Financing</h5>
          <p>
            We initially provide grants for new teams, to be followed by low-interest
            loans for those that successfully meet clear, measurable growth goals.
          </p>
        </div>
      </div>
      <object
        className={classes.svg}
        id="how-we-work-step-2"
        type="image/svg+xml"
        data="/images/how-we-work-step-2.svg"
      />
    </Container>
    <ImageContainer src="/images/how-we-work-5-o.jpg">
      <Container className={classes.imgSection} container section>
        <div className={classes.content}>
          <div>
            <h5>Sustained Support</h5>
            <p>
              we accompany these new businesses with regular mentorship, bi-weekly
              trainings, and meeting events for each Akiba Group. In these meetings,
              women help each other at personal and professional levels while our
              field staff provide continued support through strategy and planning
              trainings, accompanied by goal assessments of each Akiba Group’s
              performance on a regular basis.
            </p>
          </div>
        </div>
        <object
          className={classes.svg}
          id="how-we-work-step-1"
          type="image/svg+xml"
          data="/images/how-we-work-step-1.svg"
        />
      </Container>
    </ImageContainer>
    <Container className={classes.section} container section>
      <div className={classes.content}>
        <div>
          <h5>Graduation</h5>
          <p>
            Our ultimate goal is graduating our participants into sustainable
            livelihoods. New businesses can graduate from our support after at
            least a year (at most two years), and continue to grow on their own
            through access to commercial credit and capital.
          </p>
        </div>
      </div>
      <object
        className={classes.svg}
        id="how-we-work-step-2"
        type="image/svg+xml"
        data="/images/how-we-work-step-2.svg"
      />
    </Container>
  </div>
);

HomeHowWeWork.propTypes = {
  isSmall: PropTypes.bool.isRequired
};

export default HomeHowWeWork;
