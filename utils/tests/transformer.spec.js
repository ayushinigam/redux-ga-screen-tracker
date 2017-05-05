"use strict"
const dummyNavigationState = require('./mockNavStoreData.json');
const getCurrentRouteName = require('../transformer.utils');

describe('Router Utility', () => {
  it('Should return the current route', () => {
    const expected = 'InvestScreen';
    expect(getCurrentRouteName(dummyNavigationState)).toEqual(expected);
    expect(getCurrentRouteName(null)).toEqual(null);
  });
});
