import {ACTION_TYPES} from '../actions';

const INITIAL_STATE = {
  loading: false,
  exers: []
};

const reducers = {};

reducers[ACTION_TYPES.REQUEST_EXERS] = (state, action) => {
  return {...state, loading: true};
};

reducers[ACTION_TYPES.REQUEST_EXERS_SUCCESS] = (state, action) => {
  return {...state, loading: false, exers: action.payload};
};

const noopReducer = state => state;

export default (state = INITIAL_STATE, action) => {
  const reducer = reducers[action.type] || noopReducer;
  return reducer(state, action);
};
