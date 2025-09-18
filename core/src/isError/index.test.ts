import { isError } from './index';

test('error objects', () => {
  expect(isError(new Error())).toBe(true);
  expect(isError(new Error('message'))).toBe(true);
  expect(isError(new TypeError())).toBe(true);
  expect(isError(new ReferenceError())).toBe(true);
  expect(isError(new SyntaxError())).toBe(true);
  expect(isError(new RangeError())).toBe(true);
});

test('non-error objects', () => {
  expect(isError('Error')).toBe(false);
  expect(isError({ message: 'error' })).toBe(false);
  expect(isError({ name: 'Error' })).toBe(false);
  expect(isError({})).toBe(false);
  expect(isError([])).toBe(false);
  expect(isError(null)).toBe(false);
  expect(isError(undefined)).toBe(false);
  expect(isError(123)).toBe(false);
  expect(isError(true)).toBe(false);
});
