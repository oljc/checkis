import { isUndefined } from './index';

test('undefined values', () => {
  expect(isUndefined(undefined)).toBe(true);
  expect(isUndefined(void 0)).toBe(true);
});

test('non-undefined values', () => {
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined(0)).toBe(false);
  expect(isUndefined('')).toBe(false);
  expect(isUndefined(false)).toBe(false);
  expect(isUndefined({})).toBe(false);
  expect(isUndefined([])).toBe(false);
  expect(isUndefined('undefined')).toBe(false);
  expect(isUndefined(NaN)).toBe(false);
});
