import { isArray } from './index';

test('arrays', () => {
  expect(isArray([])).toBe(true);
  expect(isArray([1, 2, 3])).toBe(true);
  expect(isArray(['a', 'b', 'c'])).toBe(true);
  expect(isArray([null, undefined])).toBe(true);
  expect(isArray([])).toBe(true);
  expect(isArray(new Array(5))).toBe(true);
});

test('non-arrays', () => {
  expect(isArray({})).toBe(false);
  expect(isArray('[]')).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray(123)).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray({ length: 0 })).toBe(false);
});
