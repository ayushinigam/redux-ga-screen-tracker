# redux-ga-screen-tracker

Redux middleware to track screens on google analytics in a react-native application using [react-navigation](https://github.com/react-community/react-navigation)<br>
The middleware triggers track screen events on desired navigation actions with screen name which it gets from the route stack in the store.

<strong>Installation</strong>:
```javascript
npm install redux-ga-screen-tracker --save
```

<strong>Usage</strong>:<br>
<br>redux-ga-screen-tracker expects the following parameters:

 * tracker: An instance of ```react-native-google-analytics-bridge```
 * nav: Key for store object with navigation stack
 * navActionsToTrack: Array of actions for screen tracking
 * gaRouteMap (optional) : Config map of screen name to business name to be used in google analytics tracker
 * customDimensions (optional) : An object with custom dimensions
<br>

```javascript
//store.js
import screenTracking from 'redux-ga-screen-tracker';
import screenTrackingConfig from '../screenTrackingConfig.config';
import tracker from '../googleAnalytics.util'; //tracker from react-native-google-analytics-bridge

const middleware = compose(applyMiddleware(..., screenTracking(screenTrackingConfig));

const initStore = () => createStore(rootReducer, {}, middleware);
```
```javascript
//screenTrackingConfig.config.js
export const screenTrackingConfig = {
  tracker,
  navStoreKey: 'nav',
  navActions: ['Navigation/NAVIGATE', 'Navigation/BACK', 'Navigation/RESET'],
  gaRouteMap,
  customDimensions
};

const gaRouteMap = {
  LaunchPage: 'Launch Screen',
  LoginPage: 'Login Screen'
}
```
<br><strong>Usage Dependency</strong>:<br>

1. Set up google analytics for your react native application:

```javascript
//googleAnalytics.util.js
import {GoogleAnalyticsTracker, GoogleAnalyticsSettings} from 'react-native-google-analytics-bridge';
import env from '../constants/env.config';

GoogleAnalyticsSettings.setDispatchInterval(env.GA_TRACKER_INTERVAL);
const tracker = new GoogleAnalyticsTracker(env.GA_TRACKER_ID);
export default tracker;
```

2. Navigation state in store

```javascript
//reducers: index.js
import Navigator from '../routes/index.routes'; //react-navigation

const nav = (state, action) => (
  Navigator.router.getStateForAction(action, state)
);

const appReducers = combineReducers({ ..., nav });
```

<strong>References</strong>:
* [react-native-google-analytics-bridge](https://github.com/idehub/react-native-google-analytics-bridge)
* [react-navigation](https://github.com/react-community/react-navigation)
