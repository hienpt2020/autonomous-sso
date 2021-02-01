import { put, takeEvery } from 'redux-saga/effects';
import { ParserImpl } from 'src/helpers/parser';
import { HybridApi } from 'src/services/networking';
import { GET_BOOKING_HISTORY, GetBookingHistoryActionType } from './bookingHisotryType';

import { getBookingHistorySuccessAction } from './bookingHistoryAction';

function* sagaFunction(action: GetBookingHistoryActionType) {
    try {
        const today = new Date();
        const res: any = yield HybridApi.getBookingHistory({
            isAdmin: action.isAdmin,
            workingSpaceId: action.workSpaceId,
            page: action.page,
            from: action.isUpcoming ? today.toISOString() : undefined,
        });

        const bookings = res.data.items;
        const bookingDatas = bookings.map((booking: any) => {
            const parser = new ParserImpl();
            return parser.parseBookingHistory(booking);
        });
        yield put(getBookingHistorySuccessAction(bookingDatas, action.isUpcoming));
    } catch (error) {}
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* saga() {
    yield takeEvery(GET_BOOKING_HISTORY, sagaFunction);
}
