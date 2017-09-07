"use strict"
const isEmpty = require('../isEmpty.utils');

describe('isEmpty function', () => {
  it('Should return true for empty object', () => {
    const testObject = {};
    expect(isEmpty(testObject)).toBeTruthy();
  });
  it('Should return false for non-empty object', () => {
    const testObject = {testValue: 0};
    expect(isEmpty(testObject)).toBeFalsy();
  });
});
