export const isPromise = (value: unknown): value is Promise<unknown> => {
  return (
    value instanceof Promise ||
    (typeof value === 'object' && value !== null && typeof (value as any).then === 'function')
  );
};
