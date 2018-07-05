"use strict";
const isEmpty = require('./utils/isEmpty.utils');
const getCurrentRouteName = require('./utils/transformer.utils');

module.exports = ({tracker, navStoreKey, navActions = [], gaRouteMap = {}, customDimensions = {}, getCustomDimensions = null}) => {
  return ({getState}) => (next) => (action) => {
    if(navActions.includes(action.type)) {
      const currentScreen = getCurrentRouteName(getState()[navStoreKey]);
      const result = next(action);
      const nextScreen = getCurrentRouteName(getState()[navStoreKey]);
      if (nextScreen !== currentScreen) {
        const screenName = (isEmpty(gaRouteMap) || !gaRouteMap[nextScreen]) ? nextScreen : gaRouteMap[nextScreen];
        customDimensions = getCustomDimensions ? getCustomDimensions() : customDimensions;
        if (isEmpty(customDimensions)) {
          tracker.trackScreenView(screenName);
        } else {
          tracker.trackScreenViewWithCustomDimensionValues(screenName, customDimensions);
        }
      }
      return result;
    } else {
      return next(action);
    }
  };
}
