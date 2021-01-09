const defaultTypes = [REQUEST, SUCCESS, FAILURE];

export function createRequestTypes(base: any, types = defaultTypes) {
  const res = {};
  types.forEach((type) => (res[type] = `${base}_${type}`));
  return res;
}
