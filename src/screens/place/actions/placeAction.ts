import { BookingHistory } from 'src/models/BookingHistory';
import WorkPlace from 'src/models/WorkPlace';
import { HybridApi } from 'src/services/networking';
import store from 'src/redux/store';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request';
import _ from 'lodash';
import reactotron from 'reactotron-react-native';

export const getPlaceDetail = async (mapId: number, placeId: number): Promise<any> => {
  try {
    const response: any = await HybridApi.getPlaceDetail(mapId, placeId);
    const workingPlaceResponse: any = response.data;

    return new WorkPlace(workingPlaceResponse);
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
