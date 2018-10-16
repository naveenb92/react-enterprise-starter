import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Demo from './components/Demo';
import PageNotFound from './components/PageNotFound/';

class App extends Component {
  render() {
    const { rehydrated } = this.props;
    if (!rehydrated) {
      return null;
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/demo" component={Demo} />
          <Route path="/404" component={PageNotFound} />
          <Route
            render={(props) => {
              const { match } = props;
              console.log(match);
              return (
                match.url === '/' && match.isExact ?
                  <Redirect to={{ pathname: '/demo' }} /> :
                  <Redirect to={{ pathname: '/404' }} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}


function mapStateToProps(state) {
  return {
    rehydrated: state.get('rehydrated')
  };
}

export default connect(mapStateToProps)(App);
