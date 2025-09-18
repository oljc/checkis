import { isBoolean } from './index';

test('booleans', () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});

test('non-booleans', () => {
  expect(isBoolean(0)).toBe(false);
  expect(isBoolean(1)).toBe(false);
  expect(isBoolean('true')).toBe(false);
  expect(isBoolean('false')).toBe(false);
  expect(isBoolean('')).toBe(false);
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean(NaN)).toBe(false);
});
