/* eslint-disable max-len */
import React from 'react';
import Container from '../Container/Container';
import PeopleProfile from '../PeopleProfile/PeopleProfile';
import classes from './People.scss';
import people from './members';

/**
 * /people route component
 */
const People = () => {
  return (
    <Container className={classes.people} title="People">
      <div>
        <h6>Our team of incredible individuals</h6>
        {people.map((group) => (
          <div className={classes.group} key={group.name}>
            <h4>{group.name}</h4>
            {group.members.map((member) => (
              <PeopleProfile {...member} />
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default People;
