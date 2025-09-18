/**
 * Checks whether the given value is an array
 * @param value Any value
 */
export const isArray = (value: unknown): value is unknown[] => {
  return Array.isArray(value);
};
