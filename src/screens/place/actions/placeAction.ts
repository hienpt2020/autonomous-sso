import { BookingHistory } from 'src/models/BookingHistory';
import WorkPlace from 'src/models/WorkPlace';
import { HybridApi } from 'src/services/networking';
import store from 'src/redux/store';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request';
import _ from 'lodash';
import reactotron from 'reactotron-react-native';
import { parseMapAddress } from 'src/helpers/locationHelper';
import Asset from 'src/models/Asset';

export const getPlaceDetail = async (mapId: number, placeId: number): Promise<any> => {
  try {
    const response: any = await HybridApi.getPlaceDetail(mapId, placeId);
    const placeResponse: any = response.data;

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
        ? placeResponse.working_p_lace_images[0]
        : '';
    return workPlace;
  } catch (error) {
    return undefined;
  }
};

export const bookPlace = async (workPlaceId: number, dateFrom: Date, dateTo: Date): Promise<any> => {
  try {
    store.dispatch(createRequestStartAction());
    const response: any = await HybridApi.bookPlace(workPlaceId, dateFrom, dateTo);
    const bookingHistoryResponse = response.data;
    store.dispatch(createRequestEndAction());
    return new BookingHistory(bookingHistoryResponse);
  } catch (error) {
    reactotron.log(error);
    const message = _.get(error, 'debug', 'Something went wrong');
    store.dispatch(createRequestErrorMessageAction(message));
    store.dispatch(createRequestEndAction());
    return undefined;
  }
};
