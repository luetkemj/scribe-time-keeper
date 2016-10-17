import {
  GET_TIME_INITIATED,
  GETTING_TIME,
  GET_TIME_ERROR,
  GET_TIME_SUCCESS,
  UPDATE_TIME_INITIATED,
  UPDATING_TIME,
  UPDATE_TIME_ERROR,
  UPDATE_TIME_SUCCESS,
} from '../constants/action-types';

const initialState = {
  time: {
    ms: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    sky: 'night',
    rotation: -180,
  },
  loading: false,
  editing: false,
  error: null,
  success: false,
};

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TIME_INITIATED:
      return Object.assign({}, state, {
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    case GETTING_TIME:
      return Object.assign({}, state, {
        time: action.time,
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    case GET_TIME_ERROR:
      return Object.assign({}, state, {
        loading: false,
        editing: false,
        error: action.error,
        success: false,
      });
    case GET_TIME_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        editing: false,
        error: null,
        success: true,
      });
    case UPDATE_TIME_INITIATED:
      return Object.assign({}, state, {
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    case UPDATING_TIME:
      return Object.assign({}, state, {
        time: action.time,
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    case UPDATE_TIME_ERROR:
      return Object.assign({}, state, {
        loading: false,
        editing: false,
        error: action.error,
        success: false,
      });
    case UPDATE_TIME_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        editing: false,
        error: null,
        success: true,
      });
    default:
      return state;
  }
}
