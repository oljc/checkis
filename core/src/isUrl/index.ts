import { isString } from '@/isString';

export const isUrl = (value: unknown): value is string => {
  if(!isString(value)) return false;

  try {
    const url = new URL(value);
    return (
      url.protocol === 'http:' ||
      url.protocol === 'https:' ||
      url.protocol === 'ftp:' ||
      url.protocol === 'file:'
    );
  } catch {
    return false;
  }
};
