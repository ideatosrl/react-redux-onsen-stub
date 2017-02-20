import exers from './exers';
import {requestExers, requestExersSuccess} from '../actions';

test('should set loading to true when a requestExers actions is dispatched', () => {
  const result = exers({loading: false}, requestExers());
  expect(result.loading).toBe(true);
});

test('should set loading to false when a requestExersSuccess actions is dispatched', () => {
  const result = exers({loading: true}, requestExersSuccess());
  expect(result.loading).toBe(false);
});

test('should set the exers when a requestExersSuccess actions is dispatched', () => {
  const result = exers({loading: true}, requestExersSuccess(['dummy']));
  expect(result.exers).toEqual(['dummy']);
});
