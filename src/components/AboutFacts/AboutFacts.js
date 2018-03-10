import React, { PropTypes } from 'react';
import Container from '../Container/Container';
import Fact from '../Fact/Fact';
import classes from './AboutFacts.scss';

/**
 * facts section of root route
 */
const AboutFacts = (props) => {
  let facts = [
    { body: 'rank on Gender Inequality Index', header: '149th' },
    { body: 'people are food insecure', header: '6.7 Mil' },
    { body: 'average income for Congolese women', header: '$0.74' },
    { body: 'of children suffer from chronic malnutrition', header: '43%' },
    { body: 'of people lack access to electricity', header: '83.6%' },
    { body: 'of the population lack access to safe drinking water', header: '75%' },
    { body: 'of children are out of school', header: '28.9%' },
    { body: 'of the population live below the national poverty line', header: '63.6%' },
  ];
  if (props.isSmall) facts = facts.slice(0, 4);

  return (
    <Container fluid id={props.id} section title="Facts">
      <div className={classes.facts}>
        {facts.map((fact, index) => <Fact {...fact} className={classes.fact} key={index} />)}
      </div>
    </Container>
  );
};

AboutFacts.propTypes = {
  id: PropTypes.string.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export default AboutFacts;
