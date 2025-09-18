import { isFunction } from './index';

test('functions', () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction(async () => {})).toBe(true);
  expect(isFunction(function* () {})).toBe(true);
  expect(isFunction(Array)).toBe(true);
  expect(isFunction(Object)).toBe(true);
  expect(isFunction(Date)).toBe(true);
  expect(isFunction(Math.max)).toBe(true);
  expect(isFunction(class {})).toBe(true);
});

test('non-functions', () => {
  expect(isFunction({})).toBe(false);
  expect(isFunction([])).toBe(false);
  expect(isFunction('function')).toBe(false);
  expect(isFunction(123)).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(null)).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction(/regex/)).toBe(false);
  expect(isFunction(new Date())).toBe(false);
});
