import reactotron from 'src/config/configReactoron';
export default class Asset {
    id: number;
    name: string;
    isSmartDevice: boolean;
    thumbImage: string;

    constructor(assetResponse: any) {
        const advance_features = JSON.parse(assetResponse.advance_features);

        this.id = assetResponse.id;
        this.name = assetResponse.name;
        this.isSmartDevice = advance_features && advance_features.features && advance_features.features.length > 0;
        this.thumbImage =
            assetResponse.assets_images &&
            assetResponse.assets_images.length > 0 &&
            assetResponse.assets_images[0].image_url
                ? assetResponse.assets_images[0].image_url
                : '';
    }
}
