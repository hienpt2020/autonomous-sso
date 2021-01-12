import { BookingData } from 'src/models/booking/bookingData';
import { PropsBase } from 'src/types/propsBase';
import { RouteName } from 'src/routers/routeName';
import { BookingResponse } from 'src/services/networking/responseModels/booking/BookingResponse';
import moment from 'moment';

export interface Presenter {
  fetchBooking(): BookingData[];
}
export interface Props extends PropsBase<RouteName.MY_BOOKING> {}
