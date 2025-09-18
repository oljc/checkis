import { isDate } from './index';

test('valid dates', () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate(new Date('2023-01-01'))).toBe(true);
  expect(isDate(new Date(2023, 0, 1))).toBe(true);
  expect(isDate(new Date(0))).toBe(true);
});

test('invalid dates', () => {
  expect(isDate(new Date('invalid'))).toBe(false);
  expect(isDate(new Date(NaN))).toBe(false);
});

test('non-dates', () => {
  expect(isDate('2023-01-01')).toBe(false);
  expect(isDate(1672531200000)).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate([])).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(true)).toBe(false);
});
