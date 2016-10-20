import React from 'react';
import Container from '../Container/Container';
import classes from './People.scss';

/**
 * /people route component
 */
const People = () => {
  const people = [
    {
      name: 'Staff',
      members: [
        { name: 'Obadias Ndaba', title: 'President & CEO' },
        { name: 'Sandra Uwinlingiy\'Imana', title: 'Director of Strategic Partnerships' },
        { name: 'Ruhumuriza Justin', title: 'Community Coordinator' }
      ]
    },
    {
      name: 'U.S. Board of Directors',
      members: [
        { name: 'Moses Nkosilathi Vuma', title: 'Chair' },
        { name: 'Rachel Henderson', title: 'Secretary' },
        { name: 'Hemant Wandhwani', title: 'Treasurer' },
        { name: 'Adele Kibasumba', title: 'Member' },
        { name: 'JD Stier', title: 'Member' }
      ]
    },
    {
      name: 'D.R.C. Board of Directors',
      members: [
        { name: 'Adele Kibasumba', title: 'Chair' },
        { name: 'Muhamiriza Neza Aline', title: 'Secretary' },
        { name: 'Ntare Paul', title: 'Treasurer' },
        { name: 'Lazare R. Sebitereko', title: 'Member' },
        { name: 'Sebaganwa Gasore Zébédée', title: 'Member' }
      ]
    }
  ];

  return (
    <Container className={classes.people} title="People">
      <div>
        <h6>Our team of incredible individuals.</h6>
        {people.map((group) => (
          <div className={classes.group} key={group.name}>
            <h4>{group.name}</h4>
            {group.members.map((member) => (
              <div className={classes.member} key={member.name}>
                <span>{member.name}</span>
                <span>{member.title}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default People;
