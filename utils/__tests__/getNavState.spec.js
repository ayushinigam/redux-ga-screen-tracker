"use strict"
const getNavState = require('../getNavState.utils');

describe('getNavState function', () => {
  const state = {
    nav: {
      routes: {
        0: 'routeName'
      }
    }
  }
  const navStoreKey = ['nav', 'routes', '0'];
  it('Should return value at the path', () => {
    expect(getNavState(state, navStoreKey)).toEqual('routeName');
  });
});
