import { isNumber } from './index';

test('numbers', () => {
  expect(isNumber(123)).toBe(true);
  expect(isNumber(0)).toBe(true);
  expect(isNumber(-456)).toBe(true);
  expect(isNumber(3.14)).toBe(true);
  expect(isNumber(NaN)).toBe(true);
  expect(isNumber(Infinity)).toBe(true);
});

test('non-numbers', () => {
  expect(isNumber('123')).toBe(false);
  expect(isNumber('')).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber(true)).toBe(false);
});
