import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Button from '../Button/Button';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeGetInvolved from '../HomeGetInvolved/HomeGetInvolved';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeProcess from '../HomeProcess/HomeProcess';
import { hideBook } from '../../redux/modules/ui/uiModule';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import * as animations from '../../utils/animations';
import classes from './Home.scss';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
    this.goToAmazon = this.goToAmazon.bind(this);
    this.hideBook = this.hideBook.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }

  goToAmazon() {
    window.location = 'https://www.amazon.com/How-Dare-Sun-Rise-Memoirs/dp/0062470140/ref=tmm_hrd_swatch_0?_encoding=UTF8&amp;qid=1498435372&amp;sr=1-1';
  }

  hideBook(e) {
    e.stopPropagation();
    this.props.hideBook();
  }

  render() {
    return (
      <a
        className={classNames(classes.book, this.state.show && classes.show)}
        onClick={this.props.isSmall ? undefined : this.goToAmazon}
      >
        <img alt="How Dare the Sun Rise" src="/images/how-dare-the-sun-rise.jpg" />
        <span className={classes.close} onClick={this.hideBook}>
          <span />
          <span />
        </span>
        <div>
          <span>How Dare the Sun Rise</span>
          <p>
            In this memoir, <i>Jimbere Fund Co-founder Sandra Uwiringiyimana </i>
            tells the story of her survival,
            of finding her place in a new country,
            of her hope for the future,
            and how she found a way to give a voice to her people.
          </p>
          {this.props.isSmall && (
            <Button label="Learn More" onClick={this.goToAmazon} />
          )}
        </div>
      </a>
    );
  }
}

/**
 * root route component
 */
export const Home = (props) => {
  const { hideBook, isLarge, isSmall } = props;
  const scrollToFacts = (e) => {
    e.stopPropagation();
    animations.smoothScrollTo('facts');
  };

  return (
    <div className={classes.home}>
      <HomeLanding onScrollClick={scrollToFacts} isLarge={isLarge} />
      <HomeApproach isSmall={isSmall} />
      <HomeProcess isSmall={isSmall} />
      <HomeGetInvolved />
      {props.showBook && (new Date().getFullYear() < 2018) &&
        <Book hideBook={hideBook} isSmall={isSmall} />
      }
    </div>
  );
};

Home.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  showBook: state.ui.get('showBook')
});

const mapDispatchToProps = {
  hideBook
};

export default secondaryTheme(connect(mapStateToProps, mapDispatchToProps)(Home));
