import React from 'react';
import Fact from '../Fact/Fact';
import Section from '../Section/Section';
import classes from './HomeFacts.scss';

const HomeFacts = () => {
  const facts = [
    { body: 'GDP per capita', header: '$800' },
    { body: 'Access to electricity', header: '10%' },
    { body: 'Literacy', header: '64%' },
    { body: 'Malnourished young children', header: '24%' },
    { body: 'Access to clean water', header: '46%' },
    { body: 'Food insecure people', header: '6.7M' }
  ];

  return (
    <Section className={classes.section}>
      <h1>Facts</h1>
      <div className={classes.facts}>
        {facts.map((fact, index) => <Fact {...fact} className={classes.fact} key={index} />)}
      </div>
    </Section>
  );
};

export default HomeFacts;
