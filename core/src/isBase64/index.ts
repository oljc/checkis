export const isBase64 = (str: string): boolean => {
  if (typeof str !== 'string' || str.length === 0) return false;

  const base64Regex =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})?$/;

  return base64Regex.test(str);
};
