import { isString } from '.';

test('should return true when value is string', () => {
  expect(isString('')).toBe(true);
  expect(isString(null)).toBe(false);
});

test('should return false when value is not string', () => {
  expect(isString(1)).toBe(false);
});
