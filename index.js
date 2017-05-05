"use strict";
const getCurrentRouteName = require('./utils/transformer.utils');

module.exports = (tracker, navStoreKey, navActions) => {
  return ({getState}) => (next) => (action) => {
    if(navActions.includes(action.type)) {
      const currentScreen = getCurrentRouteName(getState()[navStoreKey]);
      const result = next(action);
      const nextScreen = getCurrentRouteName(getState()[navStoreKey]);
      if (nextScreen !== currentScreen) {
        tracker.trackScreenView(nextScreen);
      }
      return result;
    } else {
      return next(action);
    }
  };
}
