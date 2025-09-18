import { isEmpty } from './index';

test('empty values', () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty('')).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);
});

test('non-empty values', () => {
  expect(isEmpty('hello')).toBe(false);
  expect(isEmpty(' ')).toBe(false);
  expect(isEmpty([1])).toBe(false);
  expect(isEmpty([null])).toBe(false);
  expect(isEmpty({ a: 1 })).toBe(false);
  expect(isEmpty({ a: undefined })).toBe(false);
  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(NaN)).toBe(false);
});
