import { ParserImpl } from 'src/helpers/parser';
import { BookingHistory } from 'src/models/BookingHistory';
import { createRequestEndAction, createRequestStartAction } from 'src/redux/request';
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
        const bookingHisotry = new BookingHistory();
        bookingHisotry.code = bookingHistoryResponse.code;
        store.dispatch(createRequestEndAction());
        return bookingHisotry;
    } catch (error) {
        store.dispatch(createRequestEndAction());
        // const message = _.get(error, 'debug', 'Something went wrong');
        // store.dispatch(createRequestErrorMessageAction(message));
        return undefined;
    }
};

export const cancelBooking = async (bookId: number): Promise<any> => {
    try {
        store.dispatch(createRequestStartAction());
        await HybridApi.cancelBooking(bookId);
        store.dispatch(createRequestEndAction());
        return true;
    } catch (error) {
        store.dispatch(createRequestEndAction());
        // const message = _.get(error, 'debug', 'Something went wrong');
        // store.dispatch(createRequestErrorMessageAction(message));
        return false;
    }
};
