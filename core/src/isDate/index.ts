export const isDate = (value: unknown): value is Date => {
  return value instanceof Date && !Number.isNaN(value.getTime());
};
