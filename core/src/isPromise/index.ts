export const isPromise = (value: unknown): value is Promise<unknown> => {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as PromiseLike<unknown>).then === 'function' &&
    typeof (value as { catch: (...args: unknown[]) => unknown }).catch === 'function'
  );
};
