import { isUUID } from './index';

describe('isUUID', () => {
  test('should be case-insensitive', () => {
    expect(isUUID('550E8400-E29B-41D4-A716-446655440000')).toBe(true);
  });

  test('should return false for invalid formats', () => {
    expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
    expect(isUUID('6fa459ea-ee8a-3ca4-894e-db77e160355e')).toBe(true);
    expect(isUUID('550e8400-e29b-11d4-a716-446655440000')).toBe(true);
    expect(isUUID('550e8400e29b41d4a716446655440000')).toBe(false);
    expect(isUUID('550e8400-e29b-41d4-a716-446655440000', 4)).toBe(true);
    expect(isUUID('6fa459ea-ee8a-3ca4-894e-db77e160355e', 3)).toBe(true);
    expect(isUUID('6fa459ea-ee8a-3ca4-894e-db77e160355e', 4)).toBe(false);
    expect(isUUID('')).toBe(false);
    // biome-ignore lint/suspicious/noExplicitAny: <>
    expect(isUUID(null as any)).toBe(false);
  });
});
