"use strict"
const dummyNavigationState = require('./mockNavStoreData.json');
const getCurrentRouteName = require('../transformer.utils');

describe('getCurrentRouteName from navigationState', () => {
  it('Should return the current route', () => {
    const expected = 'NextGrandChildScreen2';
    expect(getCurrentRouteName(dummyNavigationState)).toEqual(expected);
    expect(getCurrentRouteName(null)).toEqual(null);
  });
});
