import { isRegExp } from './index';

test('regular expressions', () => {
  expect(isRegExp(/test/)).toBe(true);
  expect(isRegExp(/test/g)).toBe(true);
  expect(isRegExp(/test/i)).toBe(true);
  expect(isRegExp(/test/gi)).toBe(true);
  expect(isRegExp(/test/)).toBe(true);
  expect(isRegExp(/test/g)).toBe(true);
});

test('non-regular expressions', () => {
  expect(isRegExp('/test/')).toBe(false);
  expect(isRegExp('test')).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp([])).toBe(false);
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
  expect(isRegExp(123)).toBe(false);
  expect(isRegExp(true)).toBe(false);
});
