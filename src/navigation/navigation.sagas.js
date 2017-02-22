import { takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from './navigation.actions';

let navigator;

function * pushPage(action) {
  return navigator.pushPage(action.payload.route, action.payload.options);
}

function * popPage(action) {
  return navigator.popPage(action.payload.options);
}

function * resetPage(action) {
  return navigator.resetPage(action.payload.route, action.payload.options);
}

function * resetPageStack(action) {
  return navigator.resetPageStack(action.payload.route, action.payload.options);
}

export default {
  getSagas: () => function * () {
    yield [
      takeLatest(ACTION_TYPES.PUSH_PAGE, pushPage),
      takeLatest(ACTION_TYPES.POP_PAGE, popPage),
      takeLatest(ACTION_TYPES.RESET_PAGE, resetPage),
      takeLatest(ACTION_TYPES.RESET_PAGE_STACK, resetPageStack)
    ];
  },
  setNavigator: n => {
    navigator = n;
  }
};

