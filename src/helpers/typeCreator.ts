const REQUEST: string = 'GET';
const SUCCESS: string = 'SUCCESS';
const FAILURE: string = 'FAILURE';

const defaultTypes = [REQUEST, SUCCESS, FAILURE];

export function createActionTypes(base: string, types: string[] = defaultTypes): object {
    const res: any = {};
    types.forEach((type: any) => (res[type] = `${base}/${type}`));
    return res;
}
