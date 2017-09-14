"use strict";
const Navigation = require('react-navigation');
jest.mock('../utils/transformer.utils.js');
const tracker = {trackScreenView: jest.fn()};
const screenTrackingConfig = {
  tracker,
  navStoreKey: ['nav'],
  navActions: ['Navigation/BACK', 'Navigation/NAVIGATE']
}
const screenTracking = require('../index')(screenTrackingConfig);

const createFakeStore = (fakeData) => ({
  getState () {
    return fakeData;
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null;
  const dispatch = screenTracking(createFakeStore(storeData))((actionAttempt) => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
};

describe('screenTracking middleware', () => {

  it('should not call google analytics tracker', () => {
    const action = {
      type: 'TEST_ACTION'
    };
    dispatchWithStoreOf({}, action);
    expect(tracker.trackScreenView).not.toBeCalled();
  });

  it('should dispatch an action', () => {
    const action = {
      type: 'Navigation/BACK'
    };
    expect(dispatchWithStoreOf({}, action)).toEqual(action);
  });

  it('should call google analytics tracker', () => {
    expect(tracker.trackScreenView).toBeCalledWith('B');
  });
});
