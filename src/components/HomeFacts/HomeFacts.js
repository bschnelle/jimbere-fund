import React, { PropTypes } from 'react';
import Fact from '../Fact/Fact';
import Container from '../Container/Container';
import classes from './HomeFacts.scss';

const HomeFacts = (props) => {
  let facts = [
    { body: 'GDP per capita', header: '$480' },
    { body: 'of people lack access to electricity', header: '83.6%' },
    { body: 'of children suffer from chronic malnutrition', header: '43%' },
    { body: 'of the population lack access to safe drinking water', header: '75%' },
    { body: 'of the population live below the national poverty line', header: '63.6%' },
    { body: 'of life expectancy', header: '58.6 years' },
    { body: 'of children are out of school', header: '28.9%' },
    { body: 'people are food insecure', header: '6.7 Mil' },
    { body: 'burden of disease comes from treatable, communicable diseases', header: '75%' },
    { body: 'rank on Gender Inequality Index', header: '149th' },
    { body: 'of paved roads in one of the world\'s largest countries', header: '2,794 km' },
    { body: 'child soldiers worldwide are found in Congo', header: '1 in 10' }
  ];
  if (props.isSmall) facts = facts.slice(0, 6);

  return (
    <Container fluid id={props.id} section title="Facts">
      <div className={classes.facts}>
        {facts.map((fact, index) => <Fact {...fact} className={classes.fact} key={index} />)}
      </div>
    </Container>
  );
};

HomeFacts.propTypes = {
  id: PropTypes.string.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export default HomeFacts;
