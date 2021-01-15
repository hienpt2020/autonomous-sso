import _ from 'lodash';
import { ParserImpl } from 'src/helpers/parser';
import { BookingHistory } from 'src/models/BookingHistory';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request';
import store from 'src/redux/store';
import { HybridApi } from 'src/services/networking';

export const getPlaceDetail = async (mapId: number, placeId: number): Promise<any> => {
  try {
    const response: any = await HybridApi.getPlaceDetail(mapId, placeId);
    const placeResponse: any = response.data;

    const parser = new ParserImpl();
    return parser.parseWorkPlace(placeResponse);
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
    const message = _.get(error, 'debug', 'Something went wrong');
    store.dispatch(createRequestErrorMessageAction(message));
    store.dispatch(createRequestEndAction());
    return undefined;
  }
};
