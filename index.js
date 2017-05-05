"use strict";
const getCurrentRouteName = require('./utils/transformer.utils');

module.exports = (tracker, navState, navActions) => {
    return ({getState}) => (next) => (action) => {
    if(navActions.includes(action.type)) {
      const currentScreen = getCurrentRouteName(getState()[navState]);
      const result = next(action);
      const nextScreen = getCurrentRouteName(getState()[navState]);
      if (nextScreen !== currentScreen) {
        tracker.trackScreenView(nextScreen);
      }
      return result;
    } else {
      return next(action);
    }
  };
}
