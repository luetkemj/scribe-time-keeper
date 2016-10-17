import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import TimeReducer from './time.reducer';

export default combineReducers({
  routing,
  timeState: TimeReducer,
});
