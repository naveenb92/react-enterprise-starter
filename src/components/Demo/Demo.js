import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DemoActions from './DemoActions';
import DemoView from './DemoView';
import './Demo.css';

class Demo extends Component {

  componentDidMount() {
    const { getCurrentWeather } = this.props;
    getCurrentWeather();
  }

  render() {
    const { weather, getCurrentWeather } = this.props;
    return (<DemoView weather={weather} getCurrentWeather={getCurrentWeather} />);
  }
}


function mapStateToProps(state) {
  const demoState = state.get('demo');
  return {
    weather: demoState.get('weather'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DemoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
