import { isBigInt } from './index';

test('bigints', () => {
  expect(isBigInt(BigInt(123))).toBe(true);
  expect(isBigInt(BigInt('123'))).toBe(true);
  expect(isBigInt(123n)).toBe(true);
  expect(isBigInt(0n)).toBe(true);
  expect(isBigInt(-123n)).toBe(true);
});

test('non-bigints', () => {
  expect(isBigInt(123)).toBe(false);
  expect(isBigInt('123n')).toBe(false);
  expect(isBigInt('123')).toBe(false);
  expect(isBigInt({})).toBe(false);
  expect(isBigInt([])).toBe(false);
  expect(isBigInt(null)).toBe(false);
  expect(isBigInt(undefined)).toBe(false);
  expect(isBigInt(true)).toBe(false);
});
