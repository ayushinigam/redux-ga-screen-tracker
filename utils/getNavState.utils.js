function getNavState(state, navStoreKey) {
  navStoreKey.forEach((storeKey) => {
    state = state[storeKey];
  });
  return state;
};

module.exports = getNavState;
