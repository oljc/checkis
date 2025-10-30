export const isBase64 = (str: string): boolean => {
  if (typeof str !== 'string' || str.length === 0) return false;
  if (str.length % 4 !== 0) return false;
  return /^[A-Za-z0-9+/]+={0,2}$/.test(str);
};
