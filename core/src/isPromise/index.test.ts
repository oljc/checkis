import { isPromise } from './index';

test('promises', () => {
  expect(isPromise(Promise.resolve())).toBe(true);
  expect(isPromise(Promise.reject().catch(() => {}))).toBe(true);
  expect(isPromise(new Promise(() => {}))).toBe(true);
  expect(isPromise(Promise.all([]))).toBe(true);
});

test('thenable objects', () => {
  // biome-ignore lint/suspicious/noThenProperty: <>
  expect(isPromise({ then: () => {} })).toBe(false);
});

test('non-promises', () => {
  expect(isPromise({})).toBe(false);
  // biome-ignore lint/suspicious/noThenProperty: <>
  expect(isPromise({ then: 'not a function' })).toBe(false);
  // biome-ignore lint/suspicious/noThenProperty: <>
  expect(isPromise({ then: null })).toBe(false);
  expect(isPromise([])).toBe(false);
  expect(isPromise('promise')).toBe(false);
  expect(isPromise(null)).toBe(false);
  expect(isPromise(undefined)).toBe(false);
  expect(isPromise(123)).toBe(false);
  expect(isPromise(true)).toBe(false);
});
