/* eslint-disable max-len */
import React, { Component } from 'react';
import Modal from 'react-modal';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ImageContainer from '../ImageContainer/ImageContainer';
import PeopleProfile from '../PeopleProfile/PeopleProfile';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import classes from './People.scss';
import people from './members';

/**
 * /people route component
 */
class People extends Component {

  constructor(props) {
    super(props);
    this.groups = ['Staff', 'US Board', 'DRC Board'];
    this.state = { selectedGroup: 'Staff', selectPerson: undefined };
    const fns = ['changeGroup', 'clearSelectedPerson', 'selectPerson'];
    fns.forEach(fn => { this[fn] = this[fn].bind(this); });
  }

  changeGroup(e) {
    this.setState({ selectedGroup: e.target.innerHTML });
  }

  clearSelectedPerson() {
    this.setState({ selectedPerson: null });
  }

  selectPerson(person) {
    this.setState({ selectedPerson: person });
  }

  render() {
    const { selectedGroup, selectedPerson } = this.state;
    const modalStyle = {
      content: {
        bottom: 'none',
        left: '25%',
        right: '25%',
        top: '25%'
      },
      overlay: {
        backgroundColor: 'rgba(0,0,0,.75)'
      }
    };

    return (
      <div>
        <ImageContainer
          className={classes.imageContainer}
          imageClassName={classes.image}
          src="/images/office-o.jpg"
        >
          <Container className={classes.header} fluid title="People">
            <h6>Our team of incredible individuals</h6>
          </Container>
        </ImageContainer>
        <div className={classes.buttons}>
          {this.groups.map(group =>
            <Button
              flat={group !== selectedGroup}
              key={group}
              label={group}
              onClick={this.changeGroup}
            />)
          }
        </div>
        <Container className={classes.section} container section title={selectedGroup}>
          <div className={classes.people}>
            <div className={classes.group}>
              <div className={classes.members}>
                {people[selectedGroup].map((member, index) => (
                  <div className={classes.member} key={index}>
                    <PeopleProfile profile={member} onClick={this.selectPerson} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <Modal
          contentLabel="Bio"
          isOpen={!!selectedPerson}
          onRequestClose={this.clearSelectedPerson}
          style={modalStyle}
        >
          {selectedPerson && (
            <div className={classes.modal}>
              <div>
                <PeopleProfile profile={selectedPerson} />
              </div>
              <div>
                <p>{selectedPerson.bio}</p>
              </div>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default secondaryTheme(People);
