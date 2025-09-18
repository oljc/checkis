import { isEmail } from './index';

test('valid emails', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user.name@domain.co.uk')).toBe(true);
  expect(isEmail('user+tag@example.org')).toBe(true);
  expect(isEmail('user_name@example-domain.com')).toBe(true);
  expect(isEmail('123@example.com')).toBe(true);
});

test('invalid emails', () => {
  expect(isEmail('invalid')).toBe(false);
  expect(isEmail('invalid@')).toBe(false);
  expect(isEmail('@invalid.com')).toBe(false);
  expect(isEmail('invalid@.com')).toBe(false);
  expect(isEmail('invalid@com')).toBe(false);
  expect(isEmail('invalid.com')).toBe(false);
  expect(isEmail('invalid @example.com')).toBe(false);
  expect(isEmail('invalid@ example.com')).toBe(false);
  expect(isEmail('')).toBe(false);
});

test('non-strings', () => {
  expect(isEmail(123)).toBe(false);
  expect(isEmail(null)).toBe(false);
  expect(isEmail(undefined)).toBe(false);
  expect(isEmail({})).toBe(false);
  expect(isEmail([])).toBe(false);
  expect(isEmail(true)).toBe(false);
});
