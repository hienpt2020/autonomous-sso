import reactotron from 'src/config/configReactoron';
export default class Asset {
  id: number;
  name: string;
  isSmartDevice: boolean;

  constructor(assetResponse: any) {
    const advance_features = JSON.parse(assetResponse.advance_features);

    this.id = assetResponse.id;
    this.name = assetResponse.name;
    this.isSmartDevice = advance_features.features && advance_features.features.length > 0;
  }
}
