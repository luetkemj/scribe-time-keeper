import should from 'should';
import reducer from '../../../app/reducers/time.reducer.js';
import * as types from '../../../app/constants/action-types';

describe('time.reducer', () => {
  it('should exist', () => {
    should.exist(reducer);
  });

  it('should have the correct initial state', () => {
    should(reducer(undefined, {})).deepEqual({
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
    });
  });

  describe('in the initial state', () => {
    const TIME = {
      ms: 1,
      days: 2,
      hours: 3,
      minutes: 4,
      seconds: 5,
      sky: 'night',
      rotation: -365,
    };

    let state;
    beforeEach(() => {
      state = reducer(undefined, {});
    });

    it('should handle GET_TIME_INITIATED correctly', () => {
      should(
        reducer(state, {
          type: types.GET_TIME_INITIATED,
        })
      ).deepEqual({
        time: {
          ms: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          sky: 'night',
          rotation: -180,
        },
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    });

    it('should handle GETTING_TIME correctly', () => {
      should(
        reducer(state, {
          type: types.GETTING_TIME,
          time: TIME,
        })
      ).deepEqual({
        time: {
          ms: 1,
          days: 2,
          hours: 3,
          minutes: 4,
          seconds: 5,
          sky: 'night',
          rotation: -365,
        },
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    });

    it('should handle GET_TIME_ERROR correctly', () => {
      should(
        reducer(state, {
          type: types.GET_TIME_ERROR,
          error: 'bad things!',
        })
      ).deepEqual({
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
        error: 'bad things!',
        success: false,
      });
    });

    it('should handle GET_TIME_SUCCESS correctly', () => {
      should(
        reducer(state, {
          type: types.GET_TIME_SUCCESS,
        })
      ).deepEqual({
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
        success: true,
      });
    });

    it('should handle UPDATE_TIME_INITIATED correctly', () => {
      should(
        reducer(state, {
          type: types.UPDATE_TIME_INITIATED,
        })
      ).deepEqual({
        time: {
          ms: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          sky: 'night',
          rotation: -180,
        },
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    });

    it('should handle UPDATING_TIME correctly', () => {
      should(
        reducer(state, {
          type: types.UPDATING_TIME,
          time: TIME,
        })
      ).deepEqual({
        time: {
          ms: 1,
          days: 2,
          hours: 3,
          minutes: 4,
          seconds: 5,
          sky: 'night',
          rotation: -365,
        },
        loading: true,
        editing: false,
        error: null,
        success: false,
      });
    });

    it('should handle UPDATE_TIME_ERROR correctly', () => {
      should(
        reducer(state, {
          type: types.UPDATE_TIME_ERROR,
          error: 'terrible things!',
        })
      ).deepEqual({
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
        error: 'terrible things!',
        success: false,
      });
    });

    it('should handle UPDATE_TIME_SUCCESS correctly', () => {
      should(
        reducer(state, {
          type: types.UPDATE_TIME_SUCCESS,
        })
      ).deepEqual({
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
        success: true,
      });
    });
  });
});
