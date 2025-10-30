export const isUUID = (id: string, version?: 1 | 2 | 3 | 4 | 5): boolean => {
  if (typeof id !== 'string' || id.length !== 36) return false;

  const c = id.toLowerCase();
  if (c[8] !== '-' || c[13] !== '-' || c[18] !== '-' || c[23] !== '-') return false;

  const hex = c.replace(/-/g, '');
  if (!/^[0-9a-f]{32}$/.test(hex)) return false;

  const ver = +c[14];
  if (ver < 1 || ver > 5 || (version && ver !== version)) return false;

  const variant = c[19];
  return variant >= '8' && variant <= 'b';
};
