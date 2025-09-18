import { isNull } from './index';

test('null values', () => {
  expect(isNull(null)).toBe(true);
});

test('non-null values', () => {
  expect(isNull(undefined)).toBe(false);
  expect(isNull(0)).toBe(false);
  expect(isNull('')).toBe(false);
  expect(isNull(false)).toBe(false);
  expect(isNull({})).toBe(false);
  expect(isNull([])).toBe(false);
  expect(isNull('null')).toBe(false);
  expect(isNull(NaN)).toBe(false);
});
