import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/modules/blog/blogModule';
import HomeComp from '../../components/Home/Home';

export const HomeContainer = ({ isLarge, isMedium, isSmall }) => (
  <HomeComp
    isLarge={isLarge}
    isMedium={isMedium}
    isSmall={isSmall}
  />
);

HomeContainer.propTypes = {
  isLarge: PropTypes.bool.isRequired,
  isMedium: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool.isRequired
};

export const stateToProps = ({ browser }) => ({
  isLarge: browser.greaterThan.large,
  isMedium: browser.greaterThan.medium,
  isSmall: browser.lessThan.medium,
});

const dispatchToProps = { getPosts };

export default connect(stateToProps, dispatchToProps)(HomeContainer);
