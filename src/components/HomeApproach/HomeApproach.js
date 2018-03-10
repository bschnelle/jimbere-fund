import React from 'react';
import Container from '../Container/Container';
import classes from './HomeApproach.scss';

const items = [
  { count: '03', label: 'Women', message: 'Three women form a business team' },
  { count: '10', label: 'Teams', message: 'Ten teams form an Akiba group' },
  { count: '01', label: 'Group', message: 'One Akiba group meets every two weeks' },
];

/**
 * approach section of root route
 */
const HomeApproach = () => (
  <Container className={classes.section} container section>
    <h5 className={classes.title}>How we organize participants:</h5>
    <ul className={classes.items}>
      {items.map(({ count, label, message }) => (
        <li className={classes.item} key={label}>
          <div>
            <h1>{count}</h1>
            <h5>{label}</h5>
          </div>
          <p>{message}</p>
        </li>
      ))}
    </ul>
  </Container>
);

export default HomeApproach;
