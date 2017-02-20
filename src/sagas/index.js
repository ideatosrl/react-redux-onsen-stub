import { call, put, takeLatest } from 'redux-saga/effects';
import exers from '../model/exers';
import * as actions from '../actions/index';

function * fetchExers(action) {
  const exersList = yield call(exers.list);
  yield put(actions.requestExersSuccess(exersList));
}

export default function * () {
  yield [
    takeLatest(actions.ACTION_TYPES.REQUEST_EXERS, fetchExers)
  ];
};

