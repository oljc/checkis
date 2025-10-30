/** biome-ignore-all lint/suspicious/noExplicitAny: <> */
import { isBase64 } from './index';

describe('isBase64', () => {
  test('valid Base64 strings', () => {
    expect(isBase64('TWFu')).toBe(true);
    expect(isBase64('TWE=')).toBe(true);
    expect(isBase64('TQ==')).toBe(true);
    expect(isBase64('YW55IGNhcm5hbCBwbGVhc3VyZS4=')).toBe(true);
  });

  test('invalid Base64 strings', () => {
    expect(isBase64('')).toBe(false);
    expect(isBase64('ABC')).toBe(false);
    expect(isBase64('YW55IGNhcm5hbCBwbGVhc3VyZS')).toBe(false);
    expect(isBase64('YW55*IGNhcm5hbCBwbGVhc3VyZS4=')).toBe(false);
  });

  test('non-string inputs', () => {
    expect(isBase64(123 as any)).toBe(false);
    expect(isBase64(null as any)).toBe(false);
    expect(isBase64(undefined as any)).toBe(false);
  });
});
