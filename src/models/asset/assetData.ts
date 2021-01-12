import { AssetResponse } from './../../services/networking/responseModels/asset/AssetResponse';
export default class AssetData {
  id: number;
  name: string;
  isSmartDevice: boolean;

  constructor(assetResponse: AssetResponse) {
    this.id = assetResponse.id;
    this.name = assetResponse.name;
    this.isSmartDevice = false;
  }
}
