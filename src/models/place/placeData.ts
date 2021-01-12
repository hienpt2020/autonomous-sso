import AssetData from '../asset/assetData';
import { WorkingPlaceResponse } from './../../services/networking/responseModels/place/WorkingPlaceResponse';

export default class PlaceData {
  name: string;
  address: string;
  devices: AssetData[];
  tags: string[];
  imageUrls: string[];

  constructor(placeResponse: WorkingPlaceResponse) {
    this.name = placeResponse.working_place_types.type_name + ' ' + placeResponse.code;
    this.address = placeResponse.working_space_layout.street;
    this.devices = placeResponse.assets_details
      ? placeResponse.assets_details.map((unit) => new AssetData(unit.assets_stock.assets))
      : [];
    this.tags = placeResponse.working_place_tags ? placeResponse.working_place_tags?.map((tag) => tag.tag) : [];
    this.imageUrls = placeResponse.working_p_lace_images
      ? placeResponse.working_p_lace_images.map((image) => 'https://storage.googleapis.com' + image.image_url)
      : [];
  }
}
