const getCurrentRouteName = jest.fn();
getCurrentRouteName.mockReturnValueOnce('A').
 mockReturnValueOnce('B');

module.exports = getCurrentRouteName;
