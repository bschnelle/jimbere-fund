/* eslint-disable max-len */
import React, { Component, PropTypes } from 'react';
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
    const { isLarge } = this.props;
    const { selectedGroup, selectedPerson } = this.state;
    let modalContentClassName = classes.modal;
    if (isLarge) modalContentClassName += ` ${classes.modalContentColumn}`;
    const modalStyle = {
      content: {
        bottom: 'none',
        height: '60%',
        left: isLarge ? '15%' : '25%',
        overflowY: 'scroll',
        right: isLarge ? '15%' : '25%',
        top: '20%'
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
        {!this.props.isExtraSmall ? (
          <div>
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
            <Container className={classes.section} section title={selectedGroup}>
              <div className={classes.people}>
                <div className={classes.members}>
                  {people[selectedGroup].map((member, index) => (
                    <div className={classes.member} key={index}>
                      <PeopleProfile profile={member} onClick={this.selectPerson} />
                    </div>
                  ))}
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
                <div className={modalContentClassName}>
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
        ) : (
          <div>
            {this.groups.map((group, index) => (
              <Container
                className={index % 2 !== 0 ? classes.alternateBackground : ''}
                key={group}
                section
                title={group}
              >
                <div className={classes.people}>
                  <div className={classes.members}>
                    {people[group].map((member, i) => (
                      <div className={classes.member} key={i}>
                        <PeopleProfile profile={member} onClick={this.selectPerson} />
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            ))}
          </div>
        )}
      </div>
    );
  }
}

People.propTypes = {
  isExtraSmall: PropTypes.bool.isRequired,
  isLarge: PropTypes.bool.isRequired
};

export default secondaryTheme(People);
