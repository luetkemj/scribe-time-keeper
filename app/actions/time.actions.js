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

function getTimeInitiated() {
  return { type: GET_TIME_INITIATED };
}

function gettingTime(time) {
  return {
    type: GETTING_TIME,
    time,
  };
}

function getTimeError(error) {
  return {
    type: GET_TIME_ERROR,
    error,
  };
}

function getTimeSucess() {
  return { type: GET_TIME_SUCCESS };
}

function updateTimeInitiated() {
  return { type: UPDATE_TIME_INITIATED };
}

function updatingTime(time) {
  return {
    type: UPDATING_TIME,
    time,
  };
}

function updateTimeError(error) {
  return {
    type: UPDATE_TIME_ERROR,
    error,
  };
}

function updateTimeSuccess() {
  return { type: UPDATE_TIME_SUCCESS };
}

export function _parseMs(milliseconds, divisor) {
  const total = Math.trunc(milliseconds / divisor);
  const remainder = milliseconds % divisor;

  return {
    total,
    remainder,
  };
}

export function _setSky(hours) {
  // set the sky colors per time of day
  let sky;
  if (hours === 6) {
    sky = 'dawn';
  } else if (hours === 18) {
    sky = 'dusk';
  } else if (hours < 6 || hours > 18) {
    sky = 'night';
  } else if (hours > 6 && hours < 18) {
    sky = 'day';
  }

  return sky;
}

export function _setRotation(days, hours, minutes) {
  // set the rotation of the sun and moon
  const rotation =
  // get the rotation based on total number of days
  ((days) * -360) +
  // get the rotation based on total number of hours minus half a day
  // to get the sun and moon in the right spot
  ((hours * -15) - 180) +
  // get the little bit of rotation from minutes cause the maths are even enough?
  (minutes * -0.25);

  return rotation;
}

// pulled this func from MDN localstorage docs. So I'm not going to test it cause I trust them.
function storageAvailable(type) {
  try {
    const storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

export function incrementTime(initialTime, milliseconds) {
  return (dispatch) => {
    dispatch(updateTimeInitiated());

    // add milliseconds to current time parsing it into days, hours, minutes, seconds
    const ms = initialTime + milliseconds;
    const days = _parseMs(ms, 86400000);
    const hours = _parseMs(days.remainder, 3600000);
    const minutes = _parseMs(hours.remainder, 60000);
    const seconds = _parseMs(minutes.remainder, 1000);

    const sky = _setSky(hours.total);

    const rotation = _setRotation(days.total, hours.total, minutes.total);

    const time = {
      ms,
      days: days.total,
      hours: hours.total,
      minutes: minutes.total,
      seconds: seconds.total,
      sky,
      rotation,
    };

    dispatch(updatingTime(time));
    localStorage.setItem('scribeTimeKeeper', JSON.stringify(time));

    if (localStorage.getItem('scribeTimeKeeper') === JSON.stringify(time)) {
      dispatch(updateTimeSuccess());
    } else {
      dispatch(updateTimeError('Something has gone horribly wrong.'));
    }
  };
}

export function getTime() {
  return (dispatch) => {
    dispatch(getTimeInitiated());
    if (storageAvailable('localStorage')) {
      const savedTime = localStorage.getItem('scribeTimeKeeper');

      if (savedTime) {
        dispatch(gettingTime(JSON.parse(savedTime)));
        dispatch(getTimeSucess());
      } else {
        dispatch(getTimeError('ERROR: You have no saved time'));
      }
    } else {
      dispatch(getTimeError('ERROR: Your browser does not support local storage.'));
    }
  };
}
