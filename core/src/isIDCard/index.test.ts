import { isIDCard } from './index';

describe('isIDCard', () => {
  test('should return true for valid ID cards', () => {
    expect(isIDCard('11010519491231002X')).toBe(true);
    expect(isIDCard('11010519491231002x')).toBe(true);
  });

  test('should return false for invalid check digits', () => {
    expect(isIDCard('110105194912310021')).toBe(false);
    expect(isIDCard('440524188001010013')).toBe(false);
  });

  test('should return false for invalid dates', () => {
    expect(isIDCard('11010519990230002X')).toBe(false);
    expect(isIDCard('11010519991301002X')).toBe(false);
    expect(isIDCard('11010519990001002X')).toBe(false);
    expect(isIDCard('11010519991232002X')).toBe(false);
  });

  test('should return false for invalid formats', () => {
    expect(isIDCard('')).toBe(false);
    expect(isIDCard('123')).toBe(false);
    expect(isIDCard('11010519491231002')).toBe(false);
    expect(isIDCard('11010519491231002XX')).toBe(false);
    expect(isIDCard('11010A19491231002X')).toBe(false);
    expect(isIDCard('11010519491A31002X')).toBe(false);
  });

  test('should return false for non-string inputs', () => {
    expect(isIDCard(null as unknown as string)).toBe(false);
    expect(isIDCard(undefined as unknown as string)).toBe(false);
    expect(isIDCard(11010519491231002 as unknown as string)).toBe(false);
    expect(isIDCard({} as unknown as string)).toBe(false);
    expect(isIDCard([] as unknown as string)).toBe(false);
  });

  test('should return false for out-of-range years', () => {
    expect(isIDCard('11010518991231002X')).toBe(false);
    expect(isIDCard('11010522000101002X')).toBe(false);
  });
});
