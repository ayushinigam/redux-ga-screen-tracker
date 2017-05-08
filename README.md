# redux-ga-screen-tracker

Redux middleware to track screens on google analytics in a react-native application using [react-navigation](https://github.com/react-community/react-navigation)<br>
The middleware triggers track screen events on desired navigation actions with screen name which it gets from the route stack in the store.

<strong>Installation</strong>:
```javascript
npm install redux-ga-screen-tracker --save
```

<strong>Usage</strong>:<br>
<br>redux-ga-screen-tracker expects the following parameters:

 * An instance of ```react-native-google-analytics-bridge```
 * key for store object with navigation stack
 * array of actions for screen tracking
<br>

```javascript
//store.js
import screenTracking from 'redux-ga-screen-tracker';
import tracker from '../googleAnalytics.util'; //tracker from react-native-google-analytics-bridge

const navActionsToTrack = ['Navigation/NAVIGATE', 'Navigation/BACK'];

const middleware = compose(applyMiddleware(..., screenTracking(tracker, 'nav', navActionsToTrack)));

const initStore = () => createStore(rootReducer, {}, middleware);
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
