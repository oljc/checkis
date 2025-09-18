import { isObject } from './index';

test('objects', () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ a: 1 })).toBe(true);
  expect(isObject({ a: 1, b: 'test' })).toBe(true);
  expect(isObject(new Object())).toBe(true);
  expect(isObject(Object.create(null))).toBe(true);
});

test('non-objects', () => {
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject([])).toBe(false);
  expect(isObject([1, 2, 3])).toBe(false);
  expect(isObject('object')).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(new Date())).toBe(false);
  expect(isObject(/regex/)).toBe(false);
  expect(isObject(() => {})).toBe(false);
  expect(isObject(new Error())).toBe(false);
});
