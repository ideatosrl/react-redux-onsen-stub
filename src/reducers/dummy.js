import {ACTION_TYPES} from '../actions';

const reducers = {};

reducers[ACTION_TYPES.DUMMY_ON] = (state, action) => {
  return {
    open: true
  };
};

reducers[ACTION_TYPES.DUMMY_OFF] = (state, action) => {
  return {
    open: false
  };
};

const noopReducer = state => state;

export default (state = {open: false}, action) => {
  const reducer = reducers[action.type] || noopReducer;
  return reducer(state, action);
};
