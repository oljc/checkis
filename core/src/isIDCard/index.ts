import { isString } from '../isString';

const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
const mod11 = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];

export const isIDCard = (id: string) => {
  if (!isString(id)) return false;
  id = id.toUpperCase();

  const len = id.length;
  if (len !== 15 && len !== 18) return false;

  if (len === 15) {
    if (!/^\d{15}$/.test(id)) return false;
    id = `${id.slice(0, 6)}19${id.slice(6)}`;
  } else if (!/^\d{17}[\dX]$/.test(id)) {
    return false;
  }

  const y = +id.slice(6, 10);
  const m = +id.slice(10, 12);
  const d = +id.slice(12, 14);
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() + 1 !== m || dt.getDate() !== d) return false;

  let sum = 0;
  for (let i = 0; i < 17; i++) sum += +id[i] * weights[i];
  return String(mod11[sum % 11]) === id[17];
};
