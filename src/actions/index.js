export const ACTION_TYPES = {
  REQUEST_EXERS: 'REQUEST_EXERS',
  REQUEST_EXERS_SUCCESS: 'REQUEST_EXERS_SUCCESS'
};

export const requestExers = () => ({
  type: ACTION_TYPES.REQUEST_EXERS
});

export const requestExersSuccess = (exers) => ({
  type: ACTION_TYPES.REQUEST_EXERS_SUCCESS,
  payload: exers
});
