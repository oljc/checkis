import { isInteger } from './index';

test('integers', () => {
  expect(isInteger(0)).toBe(true);
  expect(isInteger(123)).toBe(true);
  expect(isInteger(-456)).toBe(true);
  expect(isInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(isInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
});

test('non-integers', () => {
  expect(isInteger(3.14)).toBe(false);
  expect(isInteger(-3.14)).toBe(false);
  expect(isInteger(0.1)).toBe(false);
  expect(isInteger(NaN)).toBe(false);
  expect(isInteger(Infinity)).toBe(false);
  expect(isInteger(-Infinity)).toBe(false);
});

test('non-numbers', () => {
  expect(isInteger('123')).toBe(false);
  expect(isInteger('0')).toBe(false);
  expect(isInteger(null)).toBe(false);
  expect(isInteger(undefined)).toBe(false);
  expect(isInteger(true)).toBe(false);
  expect(isInteger({})).toBe(false);
  expect(isInteger([])).toBe(false);
});
