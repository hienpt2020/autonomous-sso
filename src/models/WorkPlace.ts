import Asset from './Asset';

export default class WorkPlace {
  id: number;
  mapId: number;
  name: string;
  address: string;
  devices: Asset[];
  tags: string[];
  imageUrls: string[];
  thumbImageUrl: string;

  constructor(placeResponse: any) {
    this.id = placeResponse.id;
    this.mapId = placeResponse.working_space_layout_id;
    this.name = placeResponse.working_place_types.type_name + ' ' + placeResponse.code;
    this.address = placeResponse.working_space_layout.street;
    this.devices = placeResponse.assets_details
      ? placeResponse.assets_details.map((unit: any) => new Asset(unit.assets_stock.assets))
      : [];
    this.tags = placeResponse.working_place_tags ? placeResponse.working_place_tags?.map((tag: any) => tag.tag) : [];
    this.imageUrls = placeResponse.working_p_lace_images
      ? placeResponse.working_p_lace_images.map((image: any) => 'https://storage.googleapis.com' + image.image_url)
      : [];
    this.thumbImageUrl =
      placeResponse.working_p_lace_images && placeResponse.working_p_lace_images.length > 0
        ? placeResponse.working_p_lace_images[0]
        : '';
  }
}
