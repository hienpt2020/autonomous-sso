export default class Asset {
  id: number;
  name: string;
  isSmartDevice: boolean;

  constructor(assetResponse: any) {
    this.id = assetResponse.id;
    this.name = assetResponse.name;
    this.isSmartDevice = false;
  }
}
