export interface IVersionCodeModel {
    minimum: number;
    recommend: number;
}
export class VersionCodeModel {
    constructor(info: IVersionCodeModel) {
        return info;
    }
}
export const DEFAULT_VERSION_CODE = new VersionCodeModel({ minimum: 1, recommend: 1 });
