import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TestApp from './containers/test/test-app/test-app.container';
import TestHomeContainer from './containers/test/test-home/test-home.container';
import TimeKeeperTestContainer from './containers/test/time-keeper-test.container';

render(
  <Router history={browserHistory}>
    <Route path="/" component={TestApp}>
      <IndexRoute component={TestHomeContainer} />
      <Route path="time-keeper" component={TimeKeeperTestContainer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
