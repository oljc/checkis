import { isUrl } from './index';

test('valid URLs', () => {
  expect(isUrl('https://example.com')).toBe(true);
  expect(isUrl('http://example.com')).toBe(true);
  expect(isUrl('https://www.example.com')).toBe(true);
  expect(isUrl('https://example.com/path')).toBe(true);
  expect(isUrl('https://example.com/path?query=value')).toBe(true);
  expect(isUrl('https://example.com:8080')).toBe(true);
  expect(isUrl('ftp://example.com')).toBe(true);
  expect(isUrl('file:///path/to/file')).toBe(true);
});

test('invalid URLs', () => {
  expect(isUrl('invalid')).toBe(false);
  expect(isUrl('example.com')).toBe(false);
  expect(isUrl('www.example.com')).toBe(false);
  expect(isUrl('://example.com')).toBe(false);
  expect(isUrl('https://')).toBe(false);
  expect(isUrl('')).toBe(false);
});

test('edge case URLs', () => {
  expect(isUrl('https://.')).toBe(true);
});

test('non-strings', () => {
  expect(isUrl(123)).toBe(false);
  expect(isUrl(null)).toBe(false);
  expect(isUrl(undefined)).toBe(false);
  expect(isUrl({})).toBe(false);
  expect(isUrl([])).toBe(false);
  expect(isUrl(true)).toBe(false);
});
