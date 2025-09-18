import { isNullish } from './index';

test('nullish values', () => {
  expect(isNullish(null)).toBe(true);
  expect(isNullish(undefined)).toBe(true);
  expect(isNullish(void 0)).toBe(true);
});

test('non-nullish values', () => {
  expect(isNullish(0)).toBe(false);
  expect(isNullish('')).toBe(false);
  expect(isNullish(false)).toBe(false);
  expect(isNullish({})).toBe(false);
  expect(isNullish([])).toBe(false);
  expect(isNullish('null')).toBe(false);
  expect(isNullish('undefined')).toBe(false);
  expect(isNullish(NaN)).toBe(false);
});
