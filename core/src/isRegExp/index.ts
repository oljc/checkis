export const isRegExp = (value: unknown): value is RegExp => {
  return value instanceof RegExp;
};
