import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../../redux/modules/ui/uiModule';

const secondaryTheme = (Comp) => {
  class WrappedComponent extends Component {
    static propTypes = {
      setTheme: PropTypes.func.isRequired
    }

    componentWillMount() {
      this.props.setTheme('secondary');
    }

    componentWillUnmount() {
      this.props.setTheme('primary');
    }

    render() {
      return <Comp {...this.props} />;
    }
  }

  return connect(null, { setTheme })(WrappedComponent);
};

export default secondaryTheme;
