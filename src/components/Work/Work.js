import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './Work.scss';

/**
 * /work route component
 */
export const Work = (props) => (
  <div>
    <ImageContainer src="/images/work-o.jpg">
      <Container className={classes.work} title="Work">
        <h6>
          Jimbere Fund is dedicated to empowering women in Congo’s rural communities,
          who are most affected by extreme poverty and who have been victims of the
          country’s devastating wars, to achieve economic self-sufficiency. Our approach
          is based on the premise that investing time and money in women entrepreneurs
          will create a ripple effect to benefit their families, communities, and Congo as a whole.
        </h6>
      </Container>
    </ImageContainer>

    <Container className={classes.section} section title="Why?">
      <p>
        The Democratic Republic of Congo regularly ranks as the poorest country in the world.
        About 64 percent of Democratic Republic of Congo’s nearly 80 million inhabitants live
        below the national poverty line, and over 60 percent of these people live in rural
        areas as subsistence farmers.
      </p>
      <p>
        Due to dismal socio-economic indicators, aid agencies mostly operate on an emergency
        basis. Though impactful, the provision of bags of rice, bottles of water, school meals
        and the like still do not reach the remote communities where the needs are most acute.
        Even when emergency aid manages to reach rural communities, the benefits last only as
        long as the provisions themselves. A better, long-term solution is needed to lift
        rural Congo communities out of poverty.
      </p>
    </Container>

    <Container className={classes.altSection} section title="Why Women?">
      <p>
        Women are the cornerstones of their communities, yet they suffer disproportionately from
        high rates of extreme poverty, often being the poorest members of their communities. They
        also experience numerous other discriminatory cultural practices and prejudices rampant in
        rural Congo. The average income of a Congolese woman is just $0.74 per day, way below the
        threshold of extreme poverty. Access to education and healthcare is limited, with 57
        percent of Congolese women having no formal education at all.  About 40 percent of girls
        in Congo are married off before they turn 18.
      </p>
      <p>
        These factors explain why the Democratic Republic of Congo is frequently listed as one of
        the worst places in the world for women, and Congolese women are at heightened risk for
        gender-based violence more than any other country.
      </p>
      <p>
        It is clear to us that women have a central role in their communities. We seek to
        mobilize, prepare, and position them to fill that role and create a ripple effect of
        benefits not only for their own families, but also for their entire communities.
      </p>
    </Container>

    <Container className={classes.section} section title="Why Grants?">
      <p>
        Because Congo is one of the world’s poorest countries, people in rural areas,
        particularly women, have little to no income. Our target beneficiaries are subsistence
        farmers: they grow what they can for their own consumption, which is oftentimes
        insufficient, and struggle to send their children to school or pay a hospital bill when
        sickness knocks at their door. We don’t want to trap them further in debt at this
        vulnerable time. Grants get them off to an easier start and stable path. Our goal is
        to make a substantive impact into the lives of these women and their communities.
        Once they have reached a basic level of financial stability and are able to provide
        for their families’ basic needs like food, shelter and education, they can then
        qualify for low-interest loans.
      </p>
    </Container>
    <Container className={classes.theoryOfChange} fluid section title="Our Theory of Change">
      <img alt="Theory of Change" src="/images/theory-of-change.png" />
    </Container>
  </div>
);

Work.propTypes = {
  isMedium: PropTypes.bool.isRequired
};

export default secondaryTheme(Work);
