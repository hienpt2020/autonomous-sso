import { parseMapAddress } from 'src/helpers/locationHelper';
import Asset from 'src/models/Asset';
import WorkPlace from 'src/models/WorkPlace';
import { HybridApi } from 'src/services/networking';

export const getAllWorkPlace = async (workLayoutId: number): Promise<WorkPlace[]> => {
  try {
    const { data } = await HybridApi.getListWorkingPlaceById(workLayoutId);
    const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => {
      const workPlace = new WorkPlace();
      workPlace.id = placeResponse.id;
      workPlace.mapId = placeResponse.working_space_layout_id;
      workPlace.name = placeResponse.working_place_types.type_name + ' ' + placeResponse.code;
      workPlace.address = parseMapAddress(
        placeResponse.working_space_layout.street,
        placeResponse.working_space_layout.city,
        placeResponse.working_space_layout.state,
        placeResponse.working_space_layout.street.country,
      );
      workPlace.devices = placeResponse.assets_details
        ? placeResponse.assets_details.map((unit: any) => new Asset(unit.assets_stock.assets))
        : [];
      workPlace.tags = placeResponse.working_place_tags
        ? placeResponse.working_place_tags?.map((tag: any) => tag.tag)
        : [];
      workPlace.imageUrls = placeResponse.working_p_lace_images
        ? placeResponse.working_p_lace_images.map((image: any) => image.image_url)
        : [];
      workPlace.thumbImageUrl =
        placeResponse.working_p_lace_images && placeResponse.working_p_lace_images.length > 0
          ? placeResponse.working_p_lace_images[0].image_url
          : '';
      return workPlace;
    });
    return workPLaces;
  } catch (e) {
    return [];
  }
};

export const getAvailableWorkPlace = async (workLayoutId: number, from: string, to: string): Promise<WorkPlace[]> => {
  try {
    const { data } = await HybridApi.getListWorkingPlaceByDate(workLayoutId, from, to);
    const workPLaces: WorkPlace[] = data.items.map((placeResponse: any) => {
      const workPlace = new WorkPlace();
      workPlace.id = placeResponse.id;
      workPlace.mapId = placeResponse.working_space_layout_id;
      workPlace.name = placeResponse.working_place_types.type_name + ' ' + placeResponse.code;
      workPlace.address = parseMapAddress(
        placeResponse.working_space_layout.street,
        placeResponse.working_space_layout.city,
        placeResponse.working_space_layout.state,
        placeResponse.working_space_layout.street.country,
      );
      workPlace.devices = placeResponse.assets_details
        ? placeResponse.assets_details.map((unit: any) => new Asset(unit.assets_stock.assets))
        : [];
      workPlace.tags = placeResponse.working_place_tags
        ? placeResponse.working_place_tags?.map((tag: any) => tag.tag)
        : [];
      workPlace.imageUrls = placeResponse.working_p_lace_images
        ? placeResponse.working_p_lace_images.map((image: any) => image.image_url)
        : [];
      workPlace.thumbImageUrl =
        placeResponse.working_p_lace_images && placeResponse.working_p_lace_images.length > 0
          ? placeResponse.working_p_lace_images[0].image_url
          : '';
      return workPlace;
    });
    return workPLaces;
  } catch (e) {
    return [];
  }
};
