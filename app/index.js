import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './containers/app/app.container';
import TimeKeeperContainer from './containers/time-keeper-container/time-keeper-container';

const store = configureStore(undefined, browserHistory);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={TimeKeeperContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
