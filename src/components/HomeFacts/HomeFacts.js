import React, { PropTypes } from 'react';
import Fact from '../Fact/Fact';
import Container from '../Container/Container';
import classes from './HomeFacts.scss';

const HomeFacts = (props) => {
  const facts = [
    { body: 'GDP per capita', header: '$800' },
    { body: 'Access to electricity', header: '10%' },
    { body: 'Literacy', header: '64%' },
    { body: 'Malnourished young children', header: '24%' },
    { body: 'Access to clean water', header: '46%' },
    { body: 'Food insecure people', header: '6.7M' }
  ];

  return (
    <Container fluid id={props.id} section title="Facts">
      <div className={classes.facts}>
        {facts.map((fact, index) => <Fact {...fact} className={classes.fact} key={index} />)}
      </div>
    </Container>
  );
};

HomeFacts.propTypes = {
  id: PropTypes.string.isRequired
};

export default HomeFacts;
