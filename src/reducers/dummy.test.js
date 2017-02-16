import dummy from './dummy';
import {DUMMY_ON, DUMMY_OFF} from '../actions';

test('should open when DUMMY_ON is dispatched', () => {
  const result = dummy({open: false}, DUMMY_ON());
  expect(result.open).toBe(true);
});

test('should close when DUMMY_ON is dispatched', () => {
  const result = dummy({open: true}, DUMMY_OFF());
  expect(result.open).toBe(false);
});
