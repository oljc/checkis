export const isBase64 = (str: string): boolean => {
  if (typeof str !== 'string' || str.length === 0) return false;

  // This regex more strictly validates the Base64 structure, including padding rules.
  // It handles both padded and unpadded strings (like 'TWFu').
  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})?$/;

  return base64Regex.test(str);
};
