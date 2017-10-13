import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Button from '../Button/Button';
import HomeApproach from '../HomeApproach/HomeApproach';
import HomeGetInvolved from '../HomeGetInvolved/HomeGetInvolved';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeProcess from '../HomeProcess/HomeProcess';
import HomeWork from '../HomeWork/HomeWork';
import { hideBook } from '../../redux/modules/ui/uiModule';
import secondaryTheme from '../../containers/secondaryTheme/secondaryTheme';
import * as animations from '../../utils/animations';
import classes from './Home.scss';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pane: 0, show: false }
    this.goToAmazon = this.goToAmazon.bind(this);
    this.goToCampaign = this.goToCampaign.bind(this);
    this.hideBook = this.hideBook.bind(this);
    this.togglePane = this.togglePane.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }

  goToAmazon() {
    window.location = 'https://www.amazon.com/How-Dare-Sun-Rise-Memoirs/dp/0062470140/ref=tmm_hrd_swatch_0?_encoding=UTF8&amp;qid=1498435372&amp;sr=1-1';
  }

  goToCampaign() {
    window.location = 'https://www.razoo.com/team/Q5adif';
  }

  hideBook(e) {
    e.stopPropagation();
    this.props.hideBook();
  }

  togglePane() {
    this.setState({
      pane: this.state.pane ? 0 : 1
    });
  }

  render() {
    const { pane, show } = this.state;

    const campaign = (
      <div className={classes.wrapper}>
        <div className={classes.close} onClick={this.hideBook}>
          <span />
          <span />
        </div>
        <h5><span>LIFT UP CONGO'S </span>RURAL WOMEN</h5>
          <div className={classes.message}>
            <p>
            This project will support 12 women's groups in
            the Itombwe area to acquire and use a milling machine
            to produce maize flour instead of pounding maize with their
            bare hands, which is time-consuming and physically exhausting.
            <strong> All your donations will be matched by a generous donor.</strong>
          </p>
          <div>
            <Button
              className={classes.button}
              label="Donate Now"
              onClick={this.goToCampaign}
              small={!this.props.isSmall}
            />
          </div>
        </div>
        <img src="/images/woman.png" alt="Woman" />
      </div>
    );

    const book = (
      <div className={classes.wrapper}>
        <div className={classes.close} onClick={this.hideBook}>
          <span />
          <span />
        </div>
        <h5>HOW DARE THE SUN RISE</h5>
        <div className={classes.message}>
          <p>
            In this memoir, <i>Jimbere Fund Co-founder Sandra Uwiringiyimana </i>
            tells the story of her survival,
            of finding her place in a new country,
            of her hope for the future,
            and how she found a way to give a voice to her people.
          </p>
          <div>
            <Button
              className={classes.button}
              label="Learn More"
              onClick={this.goToAmazon}
              small
            />
          </div>
        </div>
        <img src="/images/how-dare-the-sun-rise.jpg" alt="Book Cover" />
      </div>
    );

    return (
      <div className={classNames(classes.notification, show && classes.show)}>
        <div className={classes.content}>
          {this.state.pane ? book : campaign}
          <div className={classes.footer}>
            <span className={classNames(!pane && classes.active)} onClick={this.togglePane} />
            <span className={classNames(pane && classes.active)} onClick={this.togglePane} />
          </div>
        </div>
      </div>
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
      <HomeWork />
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
