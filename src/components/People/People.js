import React, { Component, PropTypes } from 'react';
import Container from '../Container/Container';
import classes from './People.scss';

class People extends Component {

  static propTypes = {
    setTheme: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.people = [
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
          { name: 'Moses Nkosilathi Vuma', title: 'Chairman' },
          { name: 'Rachel Henderson', title: 'Secretary' },
          { name: 'Hemant Wandhwani', title: 'Treasurer' },
          { name: 'Adele Kibasumba', title: 'Member' }
        ]
      },
      {
        name: 'D.R.C. Board of Directors',
        members: [
          { name: 'Lazare R. Sebitereko', title: 'Member' },
          { name: 'Sebaganwa Gasore Zébédée', title: 'Member' },
          { name: 'Adele Kibasumba', title: 'Member' },
          { name: 'Muhamiriza Neza Aline', title: 'Member' },
          { name: 'Ntare Paul', title: 'Member' }
        ]
      }
    ];
  }

  componentWillMount() {
    this.props.setTheme('primary');
  }

  componentWillUnmount() {
    this.props.setTheme('secondary');
  }

  render() {
    return (
      <Container className={classes.people} title="People">
        <div>
          <h6>Our team of incredible individuals.</h6>
          {this.people.map((group) => (
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
  }
}

export default People;